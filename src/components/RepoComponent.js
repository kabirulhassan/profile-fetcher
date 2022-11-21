import React,{useEffect, useState} from "react";
import RepoCardComponent from "./RepoCardComponent";
import RotateLoader from "./RotateLoader";

const RepoComponent = (props) => {
    const {pageNumber, userName} = props;
    const [repoList, setRepoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.github.com/users/${userName}/repos?page=${pageNumber}&per_page=6`,{
            method: 'GET',
            headers: {
                'Authorization': process.env.REACT_APP_GITHUB_API_KEY
        }})
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(data => {
            setRepoList(data);
        })
        .finally(() => {
            setIsLoading(false);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pageNumber]);
    
    return(
        <>
        {isLoading ?
            <RotateLoader message="Loading Repository Data...."/>:
            <div className="repo-list row">
                {repoList?.map(repo => (
                    <div className="repo-card col" key={repo.id}>
                        <RepoCardComponent repo={repo} />
                    </div>
                ))}
            </div>
        }
        </>
    );
}

export default RepoComponent;