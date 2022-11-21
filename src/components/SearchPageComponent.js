import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

const SearchPageComponent = () => {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  const handleSubmit = () => {
    if(userName){
      return navigate(`/${userName}`);
    }else{
      alert("Please enter a username");
    }
  };
  return (
    <div className="search-page col">
      <h1>Get Github Data</h1>
      <div className="search-box row">
        <input 
        name="username" 
        placeholder="Enter username" 
        onChange={handleUserNameChange}
        autoComplete="off"
        />
        <button onClick={handleSubmit}>Get Data</button>
      </div>
    </div>
  );
}

export default SearchPageComponent;