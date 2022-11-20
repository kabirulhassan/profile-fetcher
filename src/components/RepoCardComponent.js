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
        <>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="row lang-list">
                {languageList?.map(language => (
                    <div className="language" key={language}>{language}</div>
                ))}
            </div>
        </>
    );
}

export default RepoCardComponent;