import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Top from './components/top';
import One from './components/one';
import Two from './components/two';
import Three from './components/three';
import Signup from './components/auth/Signup.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import './App.css'

function App() {

  const [extractedData, setExtractedData] = useState([])

  const handleDataExtracted = (data) => {
    const dataArray = Array.isArray(data) ? data : [data]
    setExtractedData(dataArray)
  }

  return (
    <Router >
      <Routes>

        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={
          <PrivateRoute>
            <One onExtracted={handleDataExtracted} />
          </PrivateRoute>
        } />
        <Route path="/chat" element={
          <PrivateRoute>
            <Two />
          </PrivateRoute>
        } />

        <Route path="/receipts" element={
          <PrivateRoute>
            <Three extractedData={extractedData} />
          </PrivateRoute>
        } />

      </Routes>
    </Router> 
    
  )
}

export default App
