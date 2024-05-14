import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Productexpand from './components/Productexpand'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='product/:id' element={<Productexpand />}></Route>
    </Routes>
  </BrowserRouter>
)
