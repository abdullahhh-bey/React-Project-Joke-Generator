import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Joke from './Joke';
import jokeList from './coding_jokes.json';
import Password from './Password';



function App() {

  const [joke, setJoke] = useState("");

  const generateJoke = () => {  
    const data = Math.floor(Math.random() * jokeList.length);
    setJoke(jokeList[data].joke);
  }

  return (
    <>
      <div className="container-fluid" style={{backgroundColor: "#004225", height:"100vh", width:"100%", color:"#F69E0B", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <h5 className='fw-light'>Joke Generator by React & Clients</h5>
      <button onClick={generateJoke} className="new-btn mt-4 px-4 py-3"> Generate a Joke </button>

      <div className='my-5 fst-italic lead'>
        <Joke joke={joke} />
      </div>
      
      <div className="mt-4 pt-4">
            <Password />
      </div>
      </div>
    </>
  )
}

export default App;
