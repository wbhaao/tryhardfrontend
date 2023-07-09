import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import { 
  BrowserRouter as Router, 
  Routes,
  Route 
} from "react-router-dom";
import Main from "./routes/Main";
import Exam from "./routes/Exam";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/exam' element={<Exam/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
