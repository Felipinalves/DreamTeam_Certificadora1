import React from 'react'
import { signInGoogle, signUpEmail } from '../../firebase'
import { Link, useNavigate } from 'react-router-dom'

export const Register = () => {
    const navigate = useNavigate();
    const signUpwithEmail = async(e) => {
        await signUpEmail(e)
        navigate('/')
    }
    const signInwithGoogle = async(e) => {
        await signInGoogle(e)
        navigate('/')
    }
  return (
    <>
        <nav className="navbar bg-body-tertiary bg-nav fixed-top">
                        <span className="TextNav mx-auto">
                            Neweinstein
                        </span>
            </nav>
        <div className="row justify-content-center align-content-center vh-100">
            <div className="card col-sm-12 col-md-6 col-lg-4 mt-5">
                <div className="card-body">
                    <main className="form-signin w-100 m-auto">
                        <form onSubmit={signUpwithEmail}>
                            <h1 className="Sign-in my-4">Sign up</h1>
                            
                            <div className="form-floating mb-2">
                                <input type="text" className="form-control" id="floatingName" />
                                <label className="TextIntern" htmlFor="floatName">Nome Completo</label>
                            </div>


                            <div className="form-floating mb-2">
                                <input type="email" className="form-control" id="floatingInput" />
                                <label className="TextIntern" htmlFor="floatingInput">Email</label>
                            </div>

                            <div className="form-floating mb-2">
                                <input type="password" className="form-control" id="floatingPassword" />
                                <label className="TextIntern" htmlFor="floatingPassword">Senha</label>
                            </div>

                            <div className="form-floating mb-4">
                                <input type="password" className="form-control" id="cFloatingPassword" />
                                <label className="TextIntern" htmlFor="cFloatingPassword">Confirmar Senha</label>
                            </div>

                            <button className="TextButton btn btn-primary w-100 py-2 mb-3" type="submit">Inscrever-se</button>

                            <div className="mb-4">
                                <button className="btn btn-outline-secondary w-100" onClick={signInwithGoogle}>
                                    <i className="bi bi-google px-1"></i>
                                    <span>Inscrever-se com Google</span>
                                </button>
                            </div>
                            
                            <div className="mb-3 text-center">
                                <span  >Já possui uma conta?</span> <Link to='/login'>Entrar</Link>
                            </div>

                        </form>
                    </main>
                </div>
            </div>
        </div>
        </>
  )
}
