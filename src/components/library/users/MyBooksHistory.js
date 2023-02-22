import React, { useEffect, useState } from "react";
import useHttpGET from "../../../hooks/http/useHttpGET";
import BookCardSmall from "../common/BookCardSmall";

const MyBooksHistory = () => {
  console.log("-----------MyBooksHistory------------");
  const { sendGETReq: getMyBookOrder } = useHttpGET();
  const [myBookOrder, setMyBookOrder] = useState([]);

  const processResp = (statusCode, data) => {
    setMyBookOrder(data);
  };

  const loadData = () => {
    console.log("Loading Data");
    const url = "http://localhost:3000/myBookOrder";
    getMyBookOrder(url, processResp);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">My Order</h3>
        </div>
        <div className="card-body">
          <div className="row-scroll">
            <div className="timeline">
              {myBookOrder.map((month, index) => (
                <div key={month.month}>
                  <strong><i className="fas fa-book mr-1"></i>&nbsp;{month.month}</strong>
                  <ul>
                    {month.books.map((book, index) => (
                      <li key={book.bookTitle}>{book.bookTitle}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBooksHistory;
