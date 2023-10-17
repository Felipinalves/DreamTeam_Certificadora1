import React from 'react'
import { QuestionsCards } from '../../components/QuestionsCards';
import { getQuestions } from '../../firebase';
import { useState, useEffect } from 'react';
import { doc } from 'firebase/firestore';
import imagem9334183 from '../../assets/9334243.jpg'



export const Home = () => {
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getQuestions();
      console.log(response)
      const allQuestions = []
      // const allQuestions = response.docs.map((doc) =>doc.data())
      response.forEach((element) => {
        const item = element.data()
        item.id = element.id
        allQuestions.push(item) 
        console.log(item)       
      });
      
      let sortedQuestions = allQuestions.sort(
        (q1, q2) => (q2.level < q1.level) ? 1 : (q2.level > q1.level) ? -1 : 0);
      setQuestions(sortedQuestions)

     
    };

    fetchData()
  }, []);
  
  console.log(questions)

  const handleClick = () => {
      setIsIconClicked(!isIconClicked);
      setQuestions(questions.reverse())
  };



  return (
    <>
      <div className='row justify-content-center' style={{paddingLeft:92, paddingRight:92, paddingTop:77, backgroundColor:'#EAF3FB'}}>
        <div className="card col-8">
          <div className='card-body'>
            <div style={{marginTop: "4px", marginLeft: "8px"}}>
              <h3 >Questões</h3>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-light me-2 md-2" type="button" onClick={(handleClick)}>
                {isIconClicked ? <i className ="bi bi-sort-up" style={{fontSize:20}} /> : <i className ="bi bi-sort-down" style={{fontSize:20}} />}
              </button>
            </div>
            {questions.map((question) => <QuestionsCards key={question.id} id={question.id} title={question.title} description = {question.description} level={question.level}/>)}
          </div>
        </div>

        <div className='card col-3 ms-4' style={{height:'250px'}}>
          <div className='card-body d-flex flex-column justify-content-center align-items-center'>
            <img src={imagem9334183} style={{width:110, height:110}} className='mb-3'/>
            <div><span style={{fontSize:20}}>Felipe Alves Cerquiare</span></div>
            <span style={{fontSize:20}}>Pontuação atual:  <span className='Pontuacao' style={{fontSize:'20px'}}>100 pts</span></span>
          </div>
        </div>
      </div>
    </>
  )
}
