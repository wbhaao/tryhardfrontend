import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
  const [backendData, setBackendData] = useState([{}])
  useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (
    <div>
      {
        (typeof backendData.user === undefined) ? 
        (<p>Loading</p>) : 
        (<p>{backendData.user}</p>)
      }
    </div>
  );
}

export default App;
