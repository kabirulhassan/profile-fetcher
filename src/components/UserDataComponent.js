import React from "react";
import {FaMapMarkerAlt, FaLink} from "react-icons/fa";

const UserDataComponent = (props) => {
    const twitterURL = "https://twitter.com/";
    const { userData } = props;
    return (
        <div className="row user-data">
        {userData.message ? 
        <p>{userData.message}</p> :
        <>
            <div className="col user-img">
                <img src={userData.avatar_url} alt="user avatar" />
                <div className="row">
                    <FaLink/>
                    <a href={userData.html_url} target="blank">{userData.html_url}</a>
                </div>
            </div>
            <div className="col user-info">
                <h1>{userData.name}</h1>
                <p>{userData.bio}</p>
                <p>
                    <FaMapMarkerAlt />{
                    userData.location ?
                        userData.location :
                        <>Location Not Available</>
                }
                </p>
                <p>Twitter: {
                    userData.twitter_username ?
                        <a href = {`${twitterURL}${userData.twitter_username}`} target="blank">{`${twitterURL}${userData.twitter_username}`}</a> :
                        <>Not Available</>
                }
                </p>
            </div>
        </>
        }
        </div>
    );
}

export default UserDataComponent;