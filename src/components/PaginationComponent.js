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
        
        <div className="pagination col">
        <div className="button-list">
            <button
                className="page-button prev"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >&lt;&lt;</button>
            {pageNumbers.map(number => (
                <button
                    className={`page-button ${number === page ? "active-page" : ""}`}
                    key={number} 
                    onClick={() => setPage(number)}>{number}
                </button>
            ))}
            <button
                className="page-button next"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
            >&gt;&gt;</button>
        </div>
        <div className="page-nav">
            <button
                    className="page-nav-button"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
            >
            Older
            </button>
            <button
                className="page-nav-button"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
            >Newer</button>
        </div>
        </div>
        </>
    );
}

export default PaginationComponent;
