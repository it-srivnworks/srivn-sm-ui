import React, { useEffect, useState } from "react";
import useHttpGET from "../../../hooks/http/useHttpGET";
import SingleReqInfo from "./SingleReqInfo";

const MyRequestList = () => {
  console.log("-------------MyRequestList------------");
  const { sendGETReq: getMyRequest } = useHttpGET();
  const [myReq, setMyReq] = useState([]);
  const [myReqFltrd, setMyReqFltrd] = useState([]);

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

  const processReqData = (statusCode, data) => {
    setMyReq(data);
    setMyReqFltrd(data);
  };

  const loadReqData = () => {
    console.log("Loading Data");
    const url = "http://localhost:3000/myRequest";
    getMyRequest(url, processReqData);
  };

  useEffect(() => {
    loadReqData();
  }, []);

  return (
    <>
      <div className="col-md-6">
        <label htmlFor="exampleInputEmail1">Filter</label>
        <select className="form-control" onChange={filterMyReq}>
          <option value="ALL">ALL</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="PENDING">PENDING</option>
        </select>
      </div>
      {myReqFltrd.map((req, index) => (
        <div key={index}>
          <SingleReqInfo request={req} />
        </div>
      ))}
    </>
  );
};

export default MyRequestList;
