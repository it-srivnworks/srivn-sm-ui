import React from "react";

const NumberEditor = ({cVal,plus,minus}) => {
  return (
    <>
    <div>
      <nav>
        <ul className="pagination pagination-sm justify-content-center">
          <li className="page-item">
            <a className="page-link" aria-label="minus" onClick={minus}>
              <span aria-hidden="true">-</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link  "> {cVal}</a>
          </li>
          <li className="page-item  ">
            <a className="page-link" aria-label="plus" onClick={plus}>
              <span aria-hidden="true">+</span>
            </a>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
};

export default NumberEditor;
