import React from 'react'
import ReactPaginate from 'react-paginate';
 const Pagination = ({total,perPage,handlePageClick}) => {
    return (
        console.log("total",{total,perPage,handlePageClick}),
        <div>
              <ReactPaginate
                                                            containerClassName="Pagination"
                                                            pageClassName="paginate_button page-item"
                                                            pageLinkClassName="page-link"
                                                            activeClassName="active"
                                                            previousClassName="page-item previous"
                                                            previousLinkClassName="page-link"
                                                            nextClassName=" page-item next"
                                                            nextLinkClassName="page-link"
                                                            activeLinkClassName="active"
                                                            previousLabel={'previous'}
                                                            nextLabel={'next'}
                                                            breakLabel={'...'}
                                                            breakClassName={'break-me'}
                                                            pageCount={total?total:null}
                                                            marginPagesDisplayed={2}
                                                            pageRangeDisplayed={perPage?perPage:null}
                                                            onPageChange={handlePageClick}
                                                            containerClassName={'pagination'}
                                                            subContainerClassName={'pages pagination'}
                                                            activeClassName={'active'}
                                                        />
        </div>
    )
}
export default Pagination