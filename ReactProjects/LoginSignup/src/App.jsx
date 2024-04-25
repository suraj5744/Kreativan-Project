import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Comple from './pages/Comple'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Acccreated from './pages/Acccreated'
const App = () => {
  return (
    <div className='mainpage'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} ></Route>
            <Route path='/signup' element={<Signup />} ></Route>
            <Route path='/success' element={<Comple />} ></Route>
            <Route path='/acccreated' element={<Acccreated/>}></Route>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
