import React, { useEffect, useState } from "react";
import useHttpGET from "../../hooks/http/useHttpGET";
import DetailsTag from "../common/DetailsTag";
import PaginationC01 from "../common/PaginationC01";
import TableCustom01 from "../common/TableCustom01";
import ViewBookDetails from "./ViewBookDetails";
const ListBooks = () => {
  const { sendGETReq: getBookList } = useHttpGET();
  //const [bookListNav, setBookListNav] = useState(1);

  const [pageData, setPageData] = useState({
    rowData: [],
    isLoading: false,
    totalRows: 1,
    rowsPerPage: 10,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [bookID, setBookID] = useState(0);

  const openCloseBook = (bookID) => {
    setBookID(bookID);
  };

  const columns = [
    {
      Header: "Book Title",
      accessor: "title",
    },
    {
      Header: "Author",
      accessor: "author",
    },
    {
      Header: "Publication",
      accessor: "publication",
    },
    {
      Header: "No of Units",
      accessor: "units",
    },
    {
      Header: "Details",
      accessor: "id",
      Cell: (cellProp) => {
        return (
          <DetailsTag openDetailHndlr={openCloseBook} id={cellProp.cell.value} />
        );
      },
    },
  ];

  const formatRowData = (rawData) =>
    rawData.map((book) => ({
      id: book.id,
      title: book.bookTitle,
      author: book.author,
      publication: book.publication,
      units: book.bookUnits,
    }));

  const processResp = (statusCode, data) => {
    setPageData({
      isLoading: false,
      rowData: formatRowData(data),
      totalRows: data.length,
      rowsPerPage: 10,
    });
  };

  const loadData = async (pageNo = 1) => {
    console.log("Loading Data");
    const url = "http://localhost:3000/books-" + currentPage;
    //const url = "https://api.instantwebtools.net/v1/passenger?page=1&size=15";
    getBookList(url, processResp);
  };

  useEffect(() => {
    setPageData((prevState) => ({
      ...prevState,
      rowData: [],
      isLoading: true,
    }));

    loadData(currentPage);
  }, [currentPage]);

  return (
    <>
      {bookID == 0 && (
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Book List</h3>
            </div>
            <div className="card-body">
              <TableCustom01
                columns={columns}
                data={pageData.rowData}
                isLoading={pageData.isLoading}
              />
            </div>
            <div className="card-footer">
              <PaginationC01
                pageChangeHandler={setCurrentPage}
                totalRows={pageData.totalRows}
                rowsPerPage={pageData.rowsPerPage}
              />
            </div>
          </div>
        </div>
      )}
      {bookID != 0 && <ViewBookDetails bookID={bookID} closeBook={openCloseBook}/>}
    </>
  );
};

export default ListBooks;
