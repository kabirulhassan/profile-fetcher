import React,{useState} from "react";
import RepoComponent from "./RepoComponent";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

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
        <div className="button-list row">
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
                    className="page-nav-button row"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
            >
            <FaArrowLeft />
            Older
            </button>
            <button
                className="page-nav-button row"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
            >Newer
            <FaArrowRight/>
            </button>
        </div>
        </div>
        </>
    );
}

export default PaginationComponent;
