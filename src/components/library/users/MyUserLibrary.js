import React, { useEffect, useState } from "react";
import useHttpGET from "../../../hooks/http/useHttpGET";
import BookCardSmall from "../common/BookCardSmall";
import MyBooksHistory from "./MyBooksHistory";
import SingleReqInfo from "./SingleReqInfo";

const MyUserLibrary = () => {
  const { sendGETReq: getMyRequest } = useHttpGET();

  const [myReq, setMyReq] = useState([]);
  const [myReqFltrd, setMyReqFltrd] = useState([]);

  const processReqData = (statusCode, data) => {
    setMyReq(data);
    setMyReqFltrd(data);
  };

  const loadReqData = () => {
    console.log("Loading Data");
    const url = "http://localhost:3000/myRequest";
    getMyRequest(url, processReqData);
  };

  const filterMyReq = (e) => {
    console.log("filter : " + e.target.value);
    if (e.target.value.toUpperCase() == "ALL") {
      setMyReqFltrd(myReq);
    } else {
      setMyReqFltrd(
        myReq.filter((prevItem) => {
          return (
            prevItem.reqStatus.toUpperCase() == e.target.value.toUpperCase()
          );
        })
      );
    }
  };

  useEffect(() => {
    loadReqData();
  }, []);

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
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="exampleInputEmail1">Filter</label>
                    <select className="form-control" onChange={filterMyReq}>
                      <option value="ALL">ALL</option>
                      <option value="COMPLETED">COMPLETED</option>
                      <option value="PENDING">PENDING</option>
                    </select>
                  </div>
                </div>
                <div className="row-scroll">
                  {myReqFltrd.map((req, index) => (
                    <div key={index}>
                    <SingleReqInfo request={req} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
          <MyBooksHistory/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyUserLibrary;
