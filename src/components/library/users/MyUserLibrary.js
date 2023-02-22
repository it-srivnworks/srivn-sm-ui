import React, { useEffect, useState } from "react";
import useHttpGET from "../../../hooks/http/useHttpGET";
import BookCardSmall from "../common/BookCardSmall";
import MyBooksHistory from "./MyBooksHistory";
import MyRequestList from "./MyRequestList";
import SingleReqInfo from "./SingleReqInfo";

const MyUserLibrary = () => {
  console.log("-------------MyUserLibrary------------");
  return (
    <>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">My Request</h3>
              </div>
              <div className="card-body">
                <div>
                  <MyRequestList />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <MyBooksHistory />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyUserLibrary;
