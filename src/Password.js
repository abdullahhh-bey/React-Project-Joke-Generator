import React, { useState } from 'react'


function Password() {

  const [password , setPassword] = useState("");
  const [strength, setStrength] = useState('');
  const [tips, setTips] = useState([]);
  const [p , setp] = useState('false')

  const checkPasswordStrength = (pwd) => {
    let score = 0;
    let suggestions = [];

    if (pwd.length >= 8) {
      score++;
    } else {
      suggestions.push("Use at least 8 characters");
    }

    if (/[a-z]/.test(pwd)) {
      score++;
    } else {
      suggestions.push("Add lowercase letters (a-z)");
    }

    if (/[A-Z]/.test(pwd)) {
      score++;
    } else {
      suggestions.push("Add uppercase letters (A-Z)");
    }

    if (/\d/.test(pwd)) {
      score++;
    } else {
      suggestions.push("Add numbers (0-9)");
    }

    if (/[^A-Za-z0-9]/.test(pwd)) {
      score++;
    } else {
      suggestions.push("Add special characters (! @ # etc.)");
    }

    setTips(suggestions);

    if ( score > 0 && score <= 2) {
      setStrength("Weak Password");
    } else if (score === 3 || score === 4) {
      setStrength("You have Moderate Password");
    } else if(score >=5 ){
      setStrength("You have Strong Password");
    } 
  }

  const checkPass = (e) => {
        setPassword(e.target.value);
    if(e.target.value === '')
    {
            setTips([]);
            setStrength('');
            return;
    }

     checkPasswordStrength(e.target.value);
    }

    const showpass = () =>{
      setp(!p);
    }


  return (
    <>
      <div className="container-fluid text-center">
        <h4 className='mt-5 lead'>Password Strength Checker by React & Clients
        </h4>
        <div className="d-flex py-4 flex-column justify-content-center">
          <p className="my-3">Enter your Password</p>

        <div className="d-flex row ">
          <input type={p ? 'text' : 'password'} onChange={checkPass}  placeholder="enter here" className='p-2 col-lg-10'/>
          <button className='col-lg-2 p-0' onClick={showpass}>{ p ? '🙈' : '👁️'}</button>
        </div>


        <div className="my-2">
          <p className='mt-2 mb-1'>{strength}</p>
          
          {tips.length > 0 && (
            <ul>
              {tips.map((tip, i) => (
                <li key={i}> ⚠️ {tip}</li>
              ))}
            </ul>
          )}

        </div>
        </div>
      </div>
    </>
  )
}

export default Password;
