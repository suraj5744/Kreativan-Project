import { useState } from 'react'

import './App.css'
import Navbar from './components/header/Navbar'
import BNavbar from './components/bottom/BNavbar'
import Categories from './components/categories/Categories'
import BigCard from './components/cards/BigCard'

function App() {
  

  return (
    <>
      
        <Navbar />
       <div className='mt-3'> <Categories/> </div>
       <BigCard/>
        <div><BNavbar/></div>
        
      
    </>
  )
}

export default App
