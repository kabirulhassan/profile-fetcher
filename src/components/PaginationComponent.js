import React from "react";

const PaginationComponent = (props) => {
    const { page, setPage, totalPages } = props;
    const pageNumbers = [];
    for(let i = 1; i <= totalPages; i++){
        pageNumbers.push(i);
    }
    return (
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
    );
}

export default PaginationComponent;
