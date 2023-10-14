import React from 'react'

export const QuestionsCards = (props) => {
	const questionLevel = (level) =>{
		console.log(typeof level)
		switch (level) {
			case 0:
				return ['Fácil', '#05FF00'];
			case 1:
				return ['Média', '#FFE500']
			case 2:
				return ['Difícil', '#FF0000']
			default:
				break;
		}
	}

  return (
    <div className="accordion" id="accordionPanelsStayOpenExample" style={{marginLeft:"8px", marginRight:"8px"}}>
		<div className="accordion-item">
			<h2 className="accordion-header">
				<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
					data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false"
					aria-controls="panelsStayOpen-collapseOne" style={{color: '#303841'}}>
					<div className="row w-100 align-items-center">
						<div className="titulo col-10">
							{props.title}
						</div>
						<div className="dificuldade col-2 text-center">
							<span style={{color:questionLevel(props.level)[1]}} >● </span>
							{questionLevel(props.level)[0]}
						</div>
					</div>
				</button>
			</h2>
			<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
				<div className="accordion-body row" style={{color:'#303841'}}>
						<div className='col-10 p-1 TextAcordeon'>
							{props.description}	
						</div>
						<div className='col-2 p-0 text-center'>
							<span className='Pontuacao'>0 pontos</span>
							<div className='mt-3'>
								<button className="TextButton_Acordeon btn btn-primary w-70 py-0" type="submit">Responder</button>
							</div>
						</div>
				</div>
			</div>
		</div>
    </div>
  )
}
