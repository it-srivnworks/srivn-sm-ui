import React from "react";

const DetailsTag = ({openDetailHndlr, id}) => {

   return (
    <>
      <button
        type="button"
        className="btn btn-outline-info btn-sm"
        onClick={() => {openDetailHndlr(id)}}
      >
        View
      </button>
    </>
  );
};

export default DetailsTag;
