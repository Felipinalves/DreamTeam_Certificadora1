import React from 'react'
import { signInGoogle } from '../../firebase'



export const Login = () => {
  return (  
    
    <div className="row justify-content-center align-content-center vh-100">
        <div className="card col-sm-12 col-md-6 col-lg-4 mt-5">
            <div className="card-body">
                <main className="form-signin w-100 m-auto">
                    <form>
                        <h1 className="Sign-in my-4">Login</h1>
                        <div className="form-floating mb-2">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label className="TextIntern" htmlFor="floatingInput">Email</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label className="TextIntern" htmlFor="floatingPassword">Senha</label>
                        </div>
                        
                        <div className="mb-3 float-end">
                            <a href="#">Esqueceu a senha?</a>
                        </div>

                        <button className="TextButton btn btn-primary w-100 py-2 mb-3" type="submit">Entrar</button>

                        <div className="mb-4">
                            <button className="btn btn-outline-secondary w-100" onClick={ signInGoogle } >
                                <i className="bi bi-google"></i>
                                <span>Entrar com Google</span>
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    </div>

  )
}
