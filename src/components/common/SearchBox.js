import React, { useState } from "react";
import useHttpGET from "../../hooks/http/useHttpGET";

const SearchBox = ({ pUrl,title, formatData, addSelected }) => {
  const { sendGETReq: getList } = useHttpGET();
  const [dataList, setDataList] = useState([]);

  const processResp = (statusCode, data) => {
    setDataList(formatData(data));
  };
  const onsearch = (key) => {
    const url = pUrl;
    getList(url, processResp);
  };

  const onSelected = (data) => {
    addSelected(data)
    setDataList([])
  };

  return (
    <>
      <div className="form-group">
        <label>{title}</label>
        <input
          className="form-control-flat"
          type="text"
          placeholder="Enter few characters to Start.."
          onChange={onsearch}
        />
        <div className="search-alert-box">
          {dataList.map((data, index) => (
            <div
              className="search-alert"
              role="alert"
              key={data.id}
              onClick={() => {
                onSelected({ id: data.id, val: data.val });
              }}
            >
              {data.val}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBox;
