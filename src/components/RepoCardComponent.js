import React, {useState, useEffect} from "react";

const RepoCardComponent = (props) => {
    const {repo} = props;

    const [languageList, setLanguageList] = useState([]);

    const getLanguages = () => {
        fetch(repo.languages_url,{
            method: 'GET',
            headers: {
                'Authorization': process.env.REACT_APP_GITHUB_API_KEY
        }})
        .then(response => response.json())
        .then(data => {
            const languages = Object.keys(data);
            setLanguageList(languages);
        });
    }

    useEffect(() => {
        getLanguages();
    },[]);

    return (
        <div className="repo-card">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            {languageList?.map(language => (
                <div className="language" key={language}>{language}</div>
            ))}
        </div>
    );
}

export default RepoCardComponent;