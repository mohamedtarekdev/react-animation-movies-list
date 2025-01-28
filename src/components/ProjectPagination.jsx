import React from 'react';
import ReactPaginate from 'react-paginate';

const ProjectPagination = ({ totalPages, getMoviesByPage }) => {
    const pageCount = totalPages;
    const handlePageClick = (data) => {
        const { selected } = data;
        getMoviesByPage(selected + 1);
    };
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالي"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="السابق"
            renderOnZeroPageCount={null}
            containerClassName="pagination my-5"
            pageClassName="page-item pagination-item"
            pageLinkClassName="page-link pagination-item"
            previousClassName="page-item prev-pagination pagination-item"
            previousLinkClassName="page-link prev-pagination pagination-item"
            nextClassName="page-item nexr-pagination pagination-item"
            nextLinkClassName="page-link nexr-pagination pagination-item"
            breakClassName="page-item pagination-item"
            breakLinkClassName="page-link pagination-item"
            activeClassName="active-pagination"
            activeLinkClassName="active-pagination"
        />
    );
};

export default ProjectPagination;
