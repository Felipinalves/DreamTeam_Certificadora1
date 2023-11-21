import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const QuestionsCards = (props) => {

	const[show, setShow] = useState(false)
	const[showModal, setShowModal] = useState(false)
	const [question, setQuestion] = useState()
	const user = props.user
	const navigate = useNavigate()

	const showItem = () => setShow(!show)

	useEffect(() => {
		if(user){
			(user.questions).forEach(element => {
				if(element.id === props.id) setQuestion(element)
			});
		}
	}, [user])
	
	

	const handleClick = () => {
		if(question.solved){
			setShowModal(true)
		}else{
			navigate(`/responder/` + props.id)
		}
	}

	const navigateResponder = () =>{
		navigate(`/responder/` + props.id)
	}

	const closeModal = () =>{
		setShowModal(false)
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
					{(user? user.level >= props.level : false)? null : <span style={{color: `red`}}>Para resolver a questão, acerte pelo menos uma questão do nível anterior</span> }	
						<div className='col-lg-10 col-md-8 p-1 TextAcordeon'>
							{props.description}	
						</div>
						<div className='col-lg-2 col-md-4 p-0 text-center'>
							<span className='Pontuacao'>{props.score} pontos</span>
							<div className='mt-2'>
								
								<button className="TextButton_Acordeon btn btn-primary w-70 py-0 px-3" disabled = {(user? user.level >= props.level : false)? null : true} onClick={ handleClick }>Responder</button>
								
							</div>
						</div>
						<div className='modal' style={showModal? {display:`block`, backgroundColor: 'rgb(0,0,0, 0.5)'}:{display:`none`}}>
							<div className="modal-dialog">
								<div className="modal-content">
								<div className="modal-header">
									<h1 className="modal-title fs-5" id="exampleModalLabel">Aviso</h1>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ closeModal }></button>
								</div>
								<div className="modal-body">
									Você já respondeu essa questão, deseja responder novamente?
								</div>
								<div class="modal-footer">
									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal" on onClick={ closeModal }>Não</button>
									<button type="button" className="btn btn-primary" onClick={ navigateResponder }>Sim</button>
								</div>
								</div>
							</div>
						</div>
				</div>
			</div>
		</div>
    </div>
  )
}
