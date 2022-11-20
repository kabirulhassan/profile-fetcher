import React,{useEffect, useState} from "react";
import RepoCardComponent from "./RepoCardComponent";

const RepoComponent = (props) => {
    const {pageNumber, userName} = props;
    const [repoList, setRepoList] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${userName}/repos?page=${pageNumber}&per_page=6`,{
            method: 'GET',
            headers: {
                'Authorization': process.env.REACT_APP_GITHUB_API_KEY
        }})
        .then(response => response.json())
        .then(data => {
            setRepoList(data);
        });
    },[pageNumber]);
    
    return(
        <div className="repo-list">
            {repoList?.map(repo => (
                <div className="repo" key={repo.id}>
                    <RepoCardComponent repo={repo} />
                </div>
            ))}
        </div>
    );
}

export default RepoComponent;