import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import Home from './pages/Home'
const App = () => {
  return (
    <div>  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apply-jobs/:id' element={<ApplyJob/>}/>
        <Route path='/applications' element={<Applications/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
