import React from 'react'
import { QuestionsCards } from '../../components/QuestionsCards';
import { getCurrentUserInfo, getQuestions } from '../../firebase';
import { useState, useEffect } from 'react';

import imagem9334183 from '../../assets/9334243.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';



export const Home = () => {

  const {currentUser} = useContext(AuthContext)
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userInformation, setUserInformation] = useState();
  const [userUid, setUserUid] = useState(currentUser.uid);


  useEffect(() => {
    const fetchData = async () => {
      const response = await getQuestions();
      setQuestions(response);
    };
    fetchData()
  },[]);
  
  useEffect(() => {
    const fetchData = async () => {
    if(currentUser.uid){
        setUserUid(currentUser.uid);
        const userInfo = await getCurrentUserInfo(userUid)
        setUserInformation(userInfo);
      }
    };
    fetchData()
  },[currentUser]);


  const handleClick = () => {
      setIsIconClicked(!isIconClicked);
      setQuestions(questions.reverse())
  };



  return (
    <>
      <div className='row justify-content-center' style={{paddingLeft:92, paddingRight:92, paddingTop:77, backgroundColor:'#EAF3FB'}}>
        <div className="card col-lg-8">
          <div className='card-body'>
            <div style={{marginTop: "4px", marginLeft: "8px"}}>
              <h3 >Questões</h3>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-light me-2 md-2" type="button" onClick={(handleClick)}>
                {isIconClicked ? <i className ="bi bi-sort-up" style={{fontSize:20}} /> : <i className ="bi bi-sort-down" style={{fontSize:20}} />}
              </button>
            </div>
            {questions.map((question) => <QuestionsCards key={question.id} id={question.id} title={question.title} description = {question.description} level={question.level} user={userInformation} score={question.score}/>)}
          </div>
        </div>

        <div className='card col-lg-3 ms-4' style={{height:'250px'}}>
          <div className='card-body d-flex flex-column justify-content-center align-items-center'>
            <img src={imagem9334183} style={{width:110, height:110}} className='mb-3'/>
            <div className='text-center'><span style={{fontSize:20}}>{userInformation? userInformation.displayName : 'Carregando'}</span></div>
            <span className='text-center' style={{fontSize:20}}>Pontuação:  <span className='Pontuacao' style={{fontSize:'20px'}}></span>{userInformation? userInformation.score : 'Carregando'} pts</span>
          </div>
        </div>
      </div>
    </>
  )
}

