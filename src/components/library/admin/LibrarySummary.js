import React, { useEffect, useState } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
import PieChart from "../../common/charts/PieChart";
import useHttpGET from "../../../hooks/http/useHttpGET";
import BarChart from "../../common/charts/BarChart";

const LibrarySummary = () => {
  const { sendGETReq: getSummary } = useHttpGET();

  const [data, setData] = useState();

  const formatRowData = (rawData) =>
    rawData.map((sum) => ({
      y: sum.count,
      label: sum.publisher,
    }));

  const processResp = (statusCode, data) => {
    setData(formatRowData(data));
  };

  const loadData = async (pageNo = 1) => {
    console.log("Loading Data");
    const url = "http://localhost:3000/publicationSummary";
    //const url = "https://api.instantwebtools.net/v1/passenger?page=1&size=15";
    getSummary(url, processResp);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Summary Chart</h3>
          </div>
          <div className="card-body">
            <PieChart title="Book Publisher" chartData={data} />
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Summary Chart</h3>
          </div>
          <div className="card-body">
            <BarChart titleHeader="Book Publisher" xaxis="Publisher" yaxis="Count" chartData={data}/>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </>
  );
};

export default LibrarySummary;
