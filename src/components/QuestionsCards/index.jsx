import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const QuestionsCards = (props) => {

	const[show, setShow] = useState(false)
	const showItem = () => setShow(!show)

	const questionLevel = (level) =>{

		switch (level) {
			case 1:
				return ['Fácil', '#05FF00'];
			case 2:
				return ['Média', '#FFE500']
			case 3:
				return ['Difícil', '#FF0000']
			default:
				break;
		}
	}

  return (
    <div className="accordion" style={{marginLeft:"8px", marginRight:"8px"}}>
		<div className="accordion-item" >
			<h2 className="accordion-header" onClick={showItem}>
				<button className={show ? "accordion-button" : "accordion-button collapsed"} type="button" 
					aria-controls="panelsStayOpen-collapseOne" style={{color: '#303841'}}>
					<div className="row w-100 align-items-center">
						<div className="titulo col-lg-10 col-md-8">
							{props.title}
						</div>
						<div className="dificuldade col-lg-2 col-md-4 text-center">
							<span style={{color:questionLevel(props.level)[1]}} >● </span>
							{questionLevel(props.level)[0]}
						</div>
					</div>
				</button>
			</h2>
			<div id="panelsStayOpen-collapseOne" className={show ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'}>
				<div className="accordion-body row" style={{color:'#303841'}}>
						<div className='col-lg-10 col-md-6 p-1 TextAcordeon'>
							{props.description}	
						</div>
						<div className='col-lg-2 col-md-6 p-0 text-center'>
							<span className='Pontuacao'>0 pontos</span>
							<div className='mt-2'>
								<Link to={'/responder/' + props.id} >
									<button className="TextButton_Acordeon btn btn-primary w-70 py-0 px-3" type="submit">Responder</button>
								</Link>
							</div>
						</div>
				</div>
			</div>
		</div>
    </div>
  )
}
