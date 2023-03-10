import React from "react";
import AddNewBook from "./AddNewBook";
import ListBooks from "./ListBooks";

const LibraryHome = () => {
  console.log("-LibraryHome");  
  return (
    <>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Library</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-2">
              <div className="info-box">
                <div className="info-box-content">
                  <span className="info-box-text">Add New</span>
                  <span className="info-box-number">
                    10
                    <small>%</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2">
              <div className="info-box">
                <div className="info-box-content">
                  <span className="info-box-text">List</span>
                  <span className="info-box-number">
                    10
                    <small>%</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <AddNewBook />
            {/*<ListBooks />*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default LibraryHome;
