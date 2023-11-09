import './App.css'
import { Navbar } from './components/Navbar'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import {Responder} from './pages/Responder'
import {Resolvidas} from './pages/Resolvidas'
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
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/'>
              <Route index element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }/>
              
              <Route path='responder/:id' element={
                <ProtectedRoute>
                  <Responder />
                </ProtectedRoute>
              }/>
              <Route path='resolvidas' element={
                <ProtectedRoute>
                  <Resolvidas />
                </ProtectedRoute>
              }/>
              
              <Route path='login' element={<Login />}/>
              <Route path='register' element={<Register />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
