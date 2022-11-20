import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import UserDataComponent from './UserDataComponent';
import PaginationComponent from './PaginationComponent';
import '../App.css';

const SearchUser = ()=>{
    const {userName} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({});
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
  
    
    useEffect(() => {
        setIsLoading(true);
        if(userName){
            getUserData();
            console.log("userName: ", userName);
        }else{
            setIsLoading(false);
            setUserData({"message": "Please enter a username"});
        }
    },[]);

    const getUserData = () => {
        fetch(`https://api.github.com/users/${userName}`,{
            method: 'GET',
            headers: {
                'Authorization': process.env.REACT_APP_GITHUB_API_KEY
        }})
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setUserData(data);
            if(data.public_repos){
                setTotalPages(Math.ceil(data.public_repos/6));
            }
          })
          .catch(error => {
            console.log(error);
            setError(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
    }

    return(
        <div>
            {isLoading ?
                <p>Loading...</p> :
                <>
                    <UserDataComponent userData={userData} />
                    <PaginationComponent totalPages={totalPages} userName={userData?.login}/>
                </>

            }
            {error && <p>{error}</p>}
        </div>
    )
}

export default SearchUser;