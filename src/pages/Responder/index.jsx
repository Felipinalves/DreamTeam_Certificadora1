import React from 'react'
import { QuestionsCards } from '../../components/QuestionsCards';
import { getQuestions } from '../../firebase';


export const Responder = () => {

  return (
    <>
      <div className='row justify-content-center' style={{paddingLeft:92, paddingRight:92, paddingTop:77, backgroundColor:'#EAF3FB'}}>
        <div className="card col-8">
          <div className='card-body'>
            <div style={{marginTop: "4px", marginLeft: "8px"}}>
              <h3 >Resolução da Questão</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

