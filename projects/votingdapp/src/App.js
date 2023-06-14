import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Participant from './components/ParticipantPage'
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/participant' element={<Participant/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App