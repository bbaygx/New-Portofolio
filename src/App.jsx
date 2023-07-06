import React from 'react'
import {Routes, Route} from 'react-router-dom'

// pages
import { Profile } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Profile/>}/>
    </Routes>
  )
}

export default App