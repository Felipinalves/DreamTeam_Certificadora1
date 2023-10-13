import React from 'react'
import './home.css';
import { QuestionsCards } from '../../components/QuestionsCards';

const { useState } = React;

export const Home = () => {
  const [isIconClicked, setIsIconClicked] = useState(false);

  const handleClick = () => {
      setIsIconClicked(!isIconClicked);
  };

  return (
    <>
    
      <div className="mb-3 margin-t" >
        <h3 >Questões</h3>
	    </div>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-1">
        <button className="btn btn-light me-md-2" type="button" onClick={(handleClick)}>
          {isIconClicked ? <i className ="bi bi-sort-up" style={{fontSize:20}} /> : <i className ="bi bi-sort-down" style={{fontSize:20}} />}
        </button>
      </div>

      <QuestionsCards title='Blablabla' description ='djkdhfjhkasgfasdgfa' level={1}/>
    </>
  )
}
