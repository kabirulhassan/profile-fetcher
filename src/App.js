import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

import './App.css';

function App() {

  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);
      if (event.key === 'Enter') {
        handleSubmit();
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  const handleSubmit = () => {
    if(userName){
      return navigate(`/${userName}`);
    }else{
      alert("Please enter a username");
    }
  };
  return (
    <div>
      <input 
      name="username" 
      placeholder="Enter username" 
      onChange={handleUserNameChange}
      />
      <button onClick={handleSubmit}>Get Github Data</button>
    </div>
  );
}

export default App;
