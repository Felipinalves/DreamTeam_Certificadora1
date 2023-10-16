import React from 'react'
import './home.css';
import { QuestionsCards } from '../../components/QuestionsCards';
import { getQuestions } from '../../firebase';
import { useState, useEffect } from 'react';
import { doc } from 'firebase/firestore';



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
    
      <div className="mb-3" style={{marginTop: "88px", marginLeft: "8px"}}>
        <h3 >Questões</h3>
	    </div>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-1">
        <button className="btn btn-light me-md-2" type="button" onClick={(handleClick)}>
          {isIconClicked ? <i className ="bi bi-sort-up" style={{fontSize:20}} /> : <i className ="bi bi-sort-down" style={{fontSize:20}} />}
        </button>
      </div>

      {questions.map((question) => <QuestionsCards key={question.id} id={question.id} title={question.title} description = {question.description} level={question.level}/>)}
  
      
      
    </>
  )
}
