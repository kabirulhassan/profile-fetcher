import React,{useState} from "react";
import RepoComponent from "./RepoComponent";

const PaginationComponent = (props) => {
    const [page, setPage] = useState(1);
    const { totalPages, userName } = props;
    const pageNumbers = [];
    for(let i = 1; i <= totalPages; i++){
        pageNumbers.push(i);
    }
    return (
        <>
        <RepoComponent pageNumber={page} userName={userName} />
        
        <div className="pagination">
        <nav>
            <ul>
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >Prev</button>
            {pageNumbers.map(number => (
                <li key={number}>
                    <a onClick={() => setPage(number)}>{number}</a>
                </li>
            ))}
            <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
            >Next</button>
            </ul>
        </nav>
        </div>
        </>
    );
}

export default PaginationComponent;
