import React, { useEffect, useState } from "react";

const PaginationC01 = ({ pageChangeHandler, totalRows, rowsPerPage }) => {
  // Calculating max number of pages
  const noOfPages = Math.ceil(totalRows / rowsPerPage);
  // Creating an array with length equal to no.of pages
  const pagesArr = [...new Array(noOfPages)];
  // State variable to hold the current page. This value is
  // passed to the callback provided by the parent
  const [currentPage, setCurrentPage] = useState(1);

  // Navigation arrows enable/disable state
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  // Onclick handlers for the butons
  const onNextPage = () => setCurrentPage(currentPage + 1);
  const onPrevPage = () => setCurrentPage(currentPage - 1);
  const onPageSelect = (pageNo) => setCurrentPage(pageNo);

  // Disable previous and next buttons in the first and last page
  // respectively
  useEffect(() => {
    if (noOfPages === currentPage) {
      setCanGoNext(false);
    } else {
      setCanGoNext(true);
    }
    if (currentPage === 1) {
      setCanGoBack(false);
    } else {
      setCanGoBack(true);
    }
  }, [noOfPages, currentPage]);

  // To set the starting index of the page
  useEffect(() => {
    const skipFactor = (currentPage - 1) * rowsPerPage;
    // Some APIs require skip for paginaiton. If needed use that instead
    // pageChangeHandler(skipFactor);
    pageChangeHandler(currentPage);
  }, [currentPage]);

  return (
    <>
      {noOfPages > 1 && (
        <nav>
          <ul className="pagination pagination-sm justify-content-center">
            <li 
            className={`page-item  ${
              currentPage < 2 ? "disabled" : ""
            }`}>
              <a className="page-link" onClick={onPrevPage} aria-label="Previous">
                <span aria-hidden="true">Prev</span>
              </a>
            </li>
            {pagesArr.map((num, index) => (
              <li className="page-item" key={index + 1}>
                <a
                  className={`page-link  ${
                    index + 1 === currentPage ? "active" : ""
                  }`}
                  onClick={() => onPageSelect(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
           <li 
           className={`page-item  ${
              currentPage === noOfPages ? "disabled" : ""
            }`}>
              <a className="page-link" onClick={onNextPage} aria-label="Next">
              <span aria-hidden="true">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default PaginationC01;
