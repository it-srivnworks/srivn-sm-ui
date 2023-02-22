import React, { useEffect, useState } from "react";
import useHttpGET from "../../../hooks/http/useHttpGET";
import BookCardSmall from "../common/BookCardSmall";

const MyBooksHistory = () => {
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

  console.log("-----------------------");
  console.log(myBookOrder);
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
                  <strong><i class="fas fa-book mr-1"></i>&nbsp;{month.month}</strong>
                  <ul>
                    {month.books.map((book, index) => (
                      <li>{book.bookTitle}</li>
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
