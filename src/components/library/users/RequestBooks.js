import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useHttpGET from "../../../hooks/http/useHttpGET";
import SearchBox from "../../common/SearchBox";

const RequestBooks = () => {
  console.log("RequestBooks");
  const [selectedB, setSelectedB] = useState([]);
  const [reqError, setReqError] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const formatBookData = (rawData) => {
    return rawData.map((book) => ({
      id: book.id,
      val: book.bookTitle,
    }));
  };

  const addSelectedBook = (book) => {
    if (selectedB.includes(book.val)) {
      setReqError("Value Already Present.......");
    } else if(selectedB.length >= 5){
      setReqError("Max Limit.....");
    }else {
      setSelectedB([...selectedB, book.val]);
      setReqError(null);
    }
  };

  const removeBook = (book) => {
    setSelectedB((prevState) =>
      prevState.filter((prevItem) => prevItem !== book)
    );
  };

  const removeBookAll = () => {
    setSelectedB([]);
    setReqError(null);
  };

  const onSubmit = (data) => {
    //registerData(JSON.stringify(data))
    console.log(
      "Form Submitted...selectedB............." + JSON.stringify(selectedB)
    );
  };

  return (
    <>
      <div className="col-md-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Request Book</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <SearchBox
                    pUrl="http://localhost:3000/bookTitle"
                    title="Search Book"
                    formatData={formatBookData}
                    addSelected={addSelectedBook}
                  />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-7">
                  {selectedB.length > 0 && (
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title">Selected List</h5>
                        <div className="card-tools">
                          <button
                            type="button"
                            className="alert-close"
                            data-dismiss="alert"
                            aria-hidden="true"
                            onClick={removeBookAll}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        {selectedB.map((selBook, index) => (
                          <div className="list-alert" key={selBook}>
                            <button
                              type="button"
                              className="alert-close"
                              data-dismiss="alert"
                              aria-hidden="true"
                              onClick={() => {
                                removeBook(selBook);
                              }}
                            >
                              ×
                            </button>
                            <h5>
                              {index + 1} : {selBook}
                            </h5>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {reqError != null && (
                <div className="row">
                  <div className="col-md-12">
                    <div className="alert-error">
                      <h2>{reqError}</h2>
                    </div>
                  </div>
                </div>
              )}
              {selectedB.length > 0 && (
                <div className="row">
                  <div className="col-md-12">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="card-footer"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RequestBooks;
