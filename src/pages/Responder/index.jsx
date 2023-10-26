import React from 'react'
import { QuestionsCards } from '../../components/QuestionsCards';
import { getQuestions } from '../../firebase';
import imagem9334183 from '../../assets/9334243.jpg'
import { Link } from 'react-router-dom';


export const Responder = () => {

  return (
    <>
      <div className='row justify-content-center' style={{paddingLeft:92, paddingRight:92, paddingTop:77, backgroundColor:'#EAF3FB'}}>
        <div className="card col-8">
          <div className='card-body'>
            <div style={{marginTop: "4px"}} className='mb-4'>
              <h3 >Resolução da Questão</h3>
            </div>
            <div className='mb-3 text-end'>
              <span className='Pontuacao' style={{fontSize:"18px"}}>Pontuação: 100pts</span>
            </div>
            <div className='mb-3'>
              <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat voluptatibus quae sapiente, vero non mollitia, amet reprehenderit quo eaque alias, magnam sit odit quidem. Quas magnam odio laborum? Officia, velit!</span>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="Insira sua resposta"/>
              <label className="TextIntern" htmlFor="floatingInput">Insira sua resposta</label>
            </div>
            <div className='mb-2'>
              <div className='text-start mb-2'>
                <button className="TextButton_Acordeon btn btn-primary py-1 px-3" type="submit" >Responder</button>
                {/* sumir com esse botão e apresentar os textos abaixo */}
              </div>
              <div className='text-start'>
                <span className='TextButton_Acordeon'>Sua resposta está correta</span>
                <span className='TextButton_Acordeon' style={{color:'red'}}>Sua resposta está incorreta</span>
                <div className='mb-3'>
                  <span className='TextButton_Acordeon'>A resposta correta é:</span>
                </div>
                {/* fazer função para aparecer um ou outro */}
              </div>
              <div>
                <button className="TextButton_Acordeon btn btn-primary py-1 px-3" type="submit">Refazer</button>
                <Link to='/home'>
                  <button className="TextButton_Acordeon btn btn-outline-primary py-1 px-3 ms-3" type="submit">Voltar às questões</button>
                </Link>
                {/* Se acertou, só aparece o botão de voltar? Ou não? */}
              </div>
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