import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import UserDataComponent from './UserDataComponent';
import PaginationComponent from './PaginationComponent';
import '../App.css';
import RotateLoader from './RotateLoader';

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
        }else{
            setIsLoading(false);
            setUserData({"message": "Please enter a username"});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const getUserData = () => {
        fetch(`https://api.github.com/users/${userName}`,{
            method: 'GET',
            headers: process.env.REACT_APP_TOKEN?{
                'Authorization': `token ${process.env.REACT_APP_TOKEN}`
        }:{}})
          .then(response => response.json())
          .then(data => {
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
        <div className="app-home">
            {isLoading ?
                <RotateLoader message="Loading User Data...."/>:
                <>
                    <UserDataComponent userData={userData} />{
                    userData.public_repos && userData.public_repos!==0 &&
                        <PaginationComponent totalPages={totalPages} userName={userData?.login}/>
                    }
                </>

            }
            {error && <p>{error}</p>}
        </div>
    )
}

export default SearchUser;