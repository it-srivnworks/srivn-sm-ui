import React, { useEffect, useState } from "react";
import mdlogo from "../../../assets/images/home/srivn.png";
import useHttpGET from "../../../hooks/http/useHttpGET";
import * as AppConstants from "../../../reduxstore/AppConstants";
import NumberEditor from "../../common/NumberEditor";

const ViewBookDetails = ({ bookID, closeBook }) => {
  const [bookData, setBookData] = useState([]);
  const { sendGETReq: getBookDetails } = useHttpGET();

  const processResp = (statusCode, data) => {
    if (statusCode == AppConstants.HTTP_OK) {
      setBookData(data);
      console.log(bookData);
    } else {
      //TODO  : Code to put error message
    }
  };

  const loadData = () => {
    console.log("Loading Data");
    const url = "http://localhost:3000/books-1/" + bookID;
    getBookDetails(url, processResp);
  };

  const backToParent = () => {
    closeBook(0);
  };

  const updateBookData = () => {
    console.log("updated book Data : " + JSON.stringify(bookData));
  };

  useEffect(() => {
    loadData();
  }, [bookID]);

  const plusNum = () => {
    setBookData({ ...bookData, bookUnits: bookData.bookUnits + 1 });
  };

  const minusNum = () => {
    setBookData({ ...bookData, bookUnits: bookData.bookUnits - 1 });
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="card card-solid">
          <div className="card-header-smaster">
            <h5>View Book Info</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={mdlogo}
                  className="product-image"
                  alt="Product Image"
                />
              </div>
              <div className="col-md-4">
                <div className="row">
                  <h2>{bookData.bookTitle}</h2>
                </div>
                <div className="row">
                  <p className="fs-5">
                    <strong>Author : </strong>
                    {bookData.author}
                  </p>
                  </div>
                <div className="row">  
                  <p className="fs-5">
                    <strong>ISBN : </strong>
                    {bookData.isbn}
                  </p>
                  </div>
                <div className="row">  
                  <p className="fs-5">
                    <strong>Category : </strong>
                    {bookData.category}
                  </p>
                  </div>
                <div className="row"> 
                  <p className="fs-5">
                    <strong>Count : </strong>
                  </p>
                  <NumberEditor
                      cVal={bookData.bookUnits}
                      plus={plusNum}
                      minus={minusNum}
                    />
                </div>
              </div>
              <div className="col-md-4">
                <p className="fs-3">Description</p>
                <p className="fs-5">
                  Lorem ipsum represents a long-held tradition for designers,
                  typographers and the like. Some people hate it and argue for
                  its demise, but others ignore the hate as they create awesome
                  tools to help create filler text for everyone from bacon
                  lovers to Charlie Sheen fans. Share Like
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="card-body text-primary">
              <button
                type="button"
                className="btn btn-primary"
                onClick={updateBookData}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={backToParent}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBookDetails;
