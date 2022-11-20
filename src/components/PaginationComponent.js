import React from "react";

const PaginationComponent = (props) => {
    const { page, setPage, totalPages } = props;
    return (
        <div className="pagination">
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >Prev</button>
            <span>{page}</span>
            <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
            >Next</button>
        </div>
    );
}

export default PaginationComponent;
