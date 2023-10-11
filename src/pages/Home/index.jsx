import React from 'react'
import './home.css';
import { QuestionsCards } from '../../components/QuestionsCards';

export const Home = () => {
  return (
    <>
    
      <div className="mb-3 margin-t" >
        <h3 >Questões</h3>
	    </div>
      <QuestionsCards title='Blablabla' description ='djkdhfjhkasgfasdgfa' level={1}/>
    </>
  )
}
