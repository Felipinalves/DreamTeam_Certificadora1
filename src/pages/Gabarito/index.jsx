import React from 'react'
import { QuestionsCards } from '../../components/QuestionsCards';
import { getQuestions } from '../../firebase';
import imagem9334183 from '../../assets/9334243.jpg'


export const Gabarito = () => {

  return (
    <>
      <div className='row justify-content-center' style={{paddingLeft:92, paddingRight:92, paddingTop:77, backgroundColor:'#EAF3FB'}}>
        <div className="card col-8">
          <div className='card-body'>
            <div style={{marginTop: "4px"}} className='mb-4'>
              <h3 >Gabarito da Questão</h3>
            </div>
            <div className='mb-3 text-end'>
              <span className='Pontuacao' style={{fontSize:"18px"}}>Pontuação: 100pts</span>
            </div>
            <div className='mb-4'>
              <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat voluptatibus quae sapiente, vero non mollitia, amet reprehenderit quo eaque alias, magnam sit odit quidem. Quas magnam odio laborum? Officia, velit!</span>
            </div>
            <div className="form-floating mb-2">
              <span>A resposta correta para esta questão é:</span>
            </div>
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