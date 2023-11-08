import {React, useState, useEffect} from 'react'
import { QuestionsCards } from '../../components/QuestionsCards';
import { getQuestions, getCurrentUserInfo } from '../../firebase';
import imagem9334183 from '../../assets/9334243.jpg'
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


export const Responder = () => {

  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();
  const [question, setQuestion] = useState();
  const [userInformation, setUserInformation] = useState();
  const [userUid, setUserUid] = useState(currentUser.uid);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getQuestions();
      response.forEach(element => {
          if(element.id === id){
            setQuestion(element);
          }
      });
    };
    fetchData()
  },[question]);

  useEffect(() => {
    const fetchData = async () => {
    if(currentUser.uid){
        setUserUid(currentUser.uid);
        const userInfo = await getCurrentUserInfo(userUid)
        setUserInformation(userInfo);
      }
      console.log(currentUser)
    };
    fetchData()
  },[currentUser]);

  return (
    <>
      <nav className="navbar bg-body-tertiary bg-nav fixed-top px-1">

      <a className="btn" style={{color:'#2185D5'}}>
        <Link to="/">
          <i className="bi bi-arrow-left-circle" style={{color:'#FFFFFF', fontSize: '20px'}}></i>
        </Link>
        </a>

        <div className="mx-auto">
          <div className="TextNav">neweinstein</div>
        </div>

        <a className="btn" style={{color:'#2185D5'}}>
          <i className="bi bi-box-arrow-right" onClick={() => signOut(auth)} style={{color:'#FFFFFF', fontSize: '20px'}}></i>
        </a>
	  </nav>

      <div className='row justify-content-center' style={{paddingLeft:92, paddingRight:92, paddingTop:77, backgroundColor:'#EAF3FB'}}>
        <div className="card col-lg-8 col-md-7">
          <div className='card-body'>
            <div style={{marginTop: "4px"}} className='mb-4'>
              <h3 >Resolução da Questão</h3>
            </div>
            <div className='mb-3 text-end'>
              <span className='Pontuacao' style={{fontSize:"18px"}}>Valor: 100pts</span>
            </div>
            <div className='mb-3'>
              <span>{question? question.description : `carregando`}</span>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="Insira sua resposta"/>
              <label className="TextIntern" htmlFor="floatingInput">Insira sua resposta</label>
            </div>
            <div className='mb-2'>
              <div className='text-start mb-2'>
                <button className="TextButton_Acordeon btn btn-primary py-1 px-3" type="submit" >Responder</button>
                {/* sumir com esse botão e apresentar os textos abaixo?? */}
              </div>
              <div className='text-start'>
                <span className='TextButton_Acordeon'>Sua resposta está correta</span>
                <span className='TextButton_Acordeon' style={{color:'red'}}>Sua resposta está incorreta</span>
                {/* fazer função para aparecer um ou outro */}
              </div>
            </div>
          </div>
        </div>

        <div className='card col-lg-3 col-md-4 ms-4' style={{height:'250px'}}>
          <div className='card-body d-flex flex-column justify-content-center align-items-center'>
            <img src={imagem9334183} style={{width:110, height:110}} className='mb-3'/>
            <div><span style={{fontSize:20}}>{userInformation? userInformation.displayName : 'Carregando'}</span></div>
            <span style={{fontSize:20}}>Pontuação:  <span className='Pontuacao' style={{fontSize:'20px'}}></span>{userInformation? userInformation.score : 'Carregando'} pts</span>
          </div>
        </div>
      </div>
    </>
  )
}