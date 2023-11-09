// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc,collection, getDocs, updateDoc, serverTimestamp } from "firebase/firestore"; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRoGRBGBa6QVq50IPlmMgfLULh_UZV2YI",
  authDomain: "certificadora1-23fb9.firebaseapp.com",
  projectId: "certificadora1-23fb9",
  storageBucket: "certificadora1-23fb9.appspot.com",
  messagingSenderId: "361307584774",
  appId: "1:361307584774:web:5a253919093642fff84687"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

//get questions
export const getQuestions = async() => {
  const querySnapshot =  await getDocs(collection(db, "questions"));
  const allQuestions = []
      // const allQuestions = response.docs.map((doc) =>doc.data())
      querySnapshot.forEach((element) => {
        const item = element.data()
        item.id = element.id
        allQuestions.push(item) 
      });
      
      let sortedQuestions = allQuestions.sort(
        (q1, q2) => (q2.level < q1.level) ? 1 : (q2.level > q1.level) ? -1 : 0);
  return sortedQuestions
}



//set user information
const setUserInformation = async (res) =>{
  const docRef = doc(db,"users", res.user.uid)
  const docSnap = await getDoc(docRef)


  console.log(docSnap.exists())

  if (!docSnap.exists()){
    const questions = await getQuestions();
    const addDoc = await setDoc(docRef, {
      uid: res.user.uid,
      displayName: res.user.displayName,
      email: res.user.email,
      level: 1,
      score: 0,
    });
    questions.forEach(element => {
      const questionsRef = doc(db,"users", res.user.uid, "userQuestions", element.id)
      setDoc(questionsRef,{
        level: element.level,
        solved: false,
        attempts: 0
      } )
    });
  }
}

export const updateOnAnswer = async(question, user, props) => {
  const docRef = doc(db, `users`, props.id);
  const questionRef = doc(db, `users`, userQuestions, question.id);
  const userLevel = (user.level === question.level)? (user.level+1) : (user.level)
  if(props.solved){
    await updateDoc(docRef, {
      score: question.score/(2**props.attempts),
      level: userLevel,
    })
    await updateDoc(questionRef, {
      solved: props.solved, 
      attempts: props.attempts,
    })
  }else{
    await updateDoc(questionRef, {
      attempts: props.attempts,
    })
  }
    
}

//getCurrentUserInfo

export const getCurrentUserInfo = async (id) => {
  const docRef = doc(db,"users", id);
  const querySnapshot =  await getDocs(collection(db, "users", id, "userQuestions"));
  const docSnap = await getDoc(docRef)


  if (docSnap.exists()){
    const userInfo = docSnap.data();
    const allQuestions = []
    // const allQuestions = response.docs.map((doc) =>doc.data())
    querySnapshot.forEach((element) => {
      const item = element.data()
      item.id = element.id
      allQuestions.push(item) 
    });
    
    let sortedQuestions = allQuestions.sort(
      (q1, q2) => (q2.level < q1.level) ? 1 : (q2.level > q1.level) ? -1 : 0);

    userInfo.questions = allQuestions
    return userInfo;
  }

}

//Email SingUp and SingIn
export const signUpEmail = async (e) => {
  e.preventDefault()
  const displayName = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;
  
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password)
    res.user.displayName = displayName;
    await setUserInformation(res)

  }catch(err){
    console.log(err)
    alert('Algo deu errado, tente novamente')
  }
}

export const signInEmail = async(e)=>{
  e.preventDefault()
  const email = e.target[0].value;
  const password = e.target[1].value;

  try{
    const res = await signInWithEmailAndPassword(auth,email,password)

  }catch(err){
    console.log(err)
  }
}

//Google SignUp and SingIn
const provider = new GoogleAuthProvider();
export const signInGoogle = async (event) => {
  event.preventDefault();
  try{
    const res = await signInWithPopup(auth, provider)

    await setUserInformation(res)
    console.log(res)

  }catch(err){
    console.log(err)
    alert('Algo errado tente novamente')
  }
    
}



