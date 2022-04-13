import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Homepage from './Homepage'
import Nav from './Nav'
import Read from './Read'
import Write from './Write'

const App = () => {
  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/read" element={ <Read /> } />
        <Route path="/write" element={ <Write /> } />
      </Routes>
   </Router>
  )
}

export default App