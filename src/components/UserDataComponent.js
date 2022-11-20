import React from "react";

const UserDataComponent = (props) => {
    const { userData } = props;
    return (
        <div className="user-data">
        {userData.message ? 
        <p>{userData.message}</p> :
        <>
            <h1>{userData.name}</h1>
            <p>{userData.bio}</p>
            <p>{
                userData.location ?
                    userData.location :
                    <span>Location Not Available</span>
            }
            </p>
            <p>Twitter: {
                userData.twitter_username ?
                    userData.twitter_username :
                    <span>Not Available</span>
            }
            </p>

            <img src={userData.avatar_url} alt="user avatar" />
            <a href={userData.html_url}>{userData.html_url}</a>
        </>
        }
        </div>
    );
}

export default UserDataComponent;