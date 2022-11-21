import React, {useState, useEffect} from "react";
import ElipsisLoader from "./ElipsisLoader";

const RepoCardComponent = (props) => {
    const {repo} = props;

    const [languageList, setLanguageList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getLanguages = () => {
        fetch(repo.languages_url,{
            method: 'GET',
            headers: {
                'Authorization': process.env.REACT_APP_GITHUB_API_KEY
        }})
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(data => {
            const languages = Object.keys(data);
            setLanguageList(languages);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    useEffect(() => {
        getLanguages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="lang-div">
                {isLoading ?
                    <ElipsisLoader/>
                    :
                    <div className="row lang-list">
                        {languageList?.map(language => (
                            <div className="language" key={language}>{language}</div>
                        ))}
                    </div>
                }
            </div>
        </>
    );
}

export default RepoCardComponent;