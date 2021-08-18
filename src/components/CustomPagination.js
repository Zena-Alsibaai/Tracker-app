import React from 'react';
import Pagination from '@material-ui/lab/Pagination';



const CustomPagination = ({ setPage, numberOfPages = 10 }) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }
    return (
        <div className="pagination">
            <Pagination 
            count={numberOfPages} 
            onChange={(e) => handlePageChange(e.target.textContent)}/>
        </div>
    );
};

export default CustomPagination;