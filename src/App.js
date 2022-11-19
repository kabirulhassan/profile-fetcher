import {React, useState} from 'react';
import './App.css';

function App() {

  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({});

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const getUserData = () => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUserData(data);
      })
      .catch(error => {
        console.log(error);
        setError(error);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div>
      <input 
      name="username" 
      placeholder="Enter username" 
      onChange={handleUserNameChange}
      />
      <button onClick={getUserData}>Get Github Data</button>
      {isLoading ? 
      <p>Loading...</p> : 
      <div className="user-data">
        <h1>{userData.name}</h1>
        <p>{userData.bio}</p>
        <p>{
          userData.location ? 
          userData.location: 
          <span>Location Not Available</span>
        }
        </p>
        <p>Twitter: {
          userData.twitter_username ? 
          userData.twitter_username:
          <span>Not Available</span>
          }
        </p>
        
        <img src={userData.avatar_url} alt="user avatar" />
        <a href={userData.html_url}>{userData.html_url}</a>
      </div>
      }
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default App;
