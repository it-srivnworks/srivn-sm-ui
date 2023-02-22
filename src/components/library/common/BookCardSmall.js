import React from "react";
import mdlogo from "../../../assets/images/home/srivn.png";

const BookCardSmall = ({pBook}) => {
  return (
    <>
      <div className="list-alert-md">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4">
              <img src={mdlogo} className="product-image-small" alt="Product Image" />
            </div>
            <div className="col-md-8">
              <p>{pBook.bookTitle}</p>
              <small>{pBook.date}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCardSmall;
