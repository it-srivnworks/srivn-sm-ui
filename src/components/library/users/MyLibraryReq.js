import React, { useEffect, useState } from "react";
import useHttpGET from "../../../hooks/http/useHttpGET";

const MyLibraryReq = () => {
  const { sendGETReq: getMyRequest } = useHttpGET();
  const [myReq, setMyReq] = useState([]);

  const processReqData = (statusCode, data) => {
    setMyReq(data);
  };

  const loadReqData = () => {
    console.log("Loading Data");
    const url = " http://localhost:3000/myRequest";
    getMyRequest(url, processReqData);
  };

  useEffect(() => {
    loadReqData();
  }, []);

  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">My Request</h3>
          </div>
          <div className="card-body-scroll">
            <div className="row">
              {myReq.map((req, index) => (
                <div className="callout" key={req.requestNo}>
                  <p>
                    <button
                      type="button"
                      className="btn btn-block btn-danger btn-sm"
                      style={{textTransform :"uppercase"}}
                    >
                      {req.reqStatus}
                    </button>
                  </p>
                  <p>
                  {req.requestNo} : <small>{req.requestDate}</small>
                  </p>  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyLibraryReq;
