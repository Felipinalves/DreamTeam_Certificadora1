import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App() {

  return (
    <>
      <Navbar/>
      <Register/>
    </>
  )
}

export default App
