import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/item/:id' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
