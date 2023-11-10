import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const QuestionsCards = (props) => {

	const[show, setShow] = useState(false)
	const [question, setQuestion] = useState()
	const showItem = () => setShow(!show)
	const user = props.user
	const navigate = useNavigate()

	
	useEffect(() => {
		if(user){
			(user.questions).forEach(element => {
				if(element.id === props.id) setQuestion(element)
			});
		}
	}, [user])
	
	

	const handleClick = () => {
		if(question.solved){
			const text = `Você já respondeu essa questão, deseja respondela novamente?`
			if(confirm(text) == true){
				navigate(`/responder/` + props.id)
			}else{
				return
			}
		}else{
			navigate(`/responder/` + props.id)
		}
	}

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
					{(user? user.level >= props.level : false)? null : <span style={{color: `red`}}>Para resolver a questão, acerte pelo menos 1 do do nível anterior</span> }	
						<div className='col-lg-10 col-md-6 p-1 TextAcordeon'>
							{props.description}	
						</div>
						<div className='col-lg-2 col-md-6 p-0 text-center'>
							<span className='Pontuacao'>{props.score} pontos</span>
							<div className='mt-2'>
								
									<button className="TextButton_Acordeon btn btn-primary w-70 py-0 px-3" type="submit" disabled = {(user? user.level >= props.level : false)? null : true} onClick={ handleClick }>Responder</button>
								
							</div>
						</div>
				</div>
			</div>
		</div>
    </div>
  )
}
