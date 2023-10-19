import './App.css'
import { Navbar } from './components/Navbar'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import {Responder} from './pages/Responder'
import {Gabarito} from './pages/Gabarito'
import {
  Route,
  Link,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {

  const {currentUser} = useContext(AuthContext)



  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
            <Route path='/'>
              <Route index element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }/>
              <Route path='home' element ={<Home />}/>
              <Route path='login' element={<Login />}/>
              <Route path='register' element={<Register />}/>
              <Route path='responder' element={<Responder />}/>
              <Route path='gabarito' element={<Gabarito />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
