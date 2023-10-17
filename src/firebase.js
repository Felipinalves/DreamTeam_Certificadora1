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
const db = getFirestore(app);

//set user information
const setUserInformation = async (res) =>{
  const docRef = doc(db,"users", res.user.uid)
  const docSnap = await getDoc(docRef)


  console.log(docSnap.exists())

  if (!docSnap.exists()){
    const addDoc = await setDoc(docRef, {
      uid: res.user.uid,
      email: res.user.email,
      level: 1,
      score: 0
    });
  }
}

//Email SingUp and SingIn
export const signUpEmail = async (e) => {
  e.preventDefault()
  const email = e.target[0].value;
  const password = e.target[1].value;
  
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password)
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

  }catch(err){
    console.log(err)
    alert('Algo errado tente novamente')
  }
    
}

//get questions
export const getQuestions = async() => {
  const querySnapshot =  await getDocs(collection(db, "questions"));
  return querySnapshot
}

