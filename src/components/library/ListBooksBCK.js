import React, { useEffect, useState } from "react";
import CustomPaginationBCK from "../common/CustomPaginationBCK";
import CustomTableBCK from "../common/CustomTableBCK";

const ListBooksBCK = () => {
  const [pageData, setPageData] = useState({
    rowData: [],
    isLoading: false,
    totalPages: 0,
    totalPassengers: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      Header: "Passenger name",
      accessor: "name",
    },
    {
      Header: "Total trips",
      accessor: "trips",
    },
    {
      Header: "Current flight",
      accessor: "flightName",
    },
  ];

  const formatRowData = (rawData) =>
  rawData.map((info) => ({
    name: info.name,
    trips: info.trips,
    flightName: info.airline?.name,
  }));

  const getData = async (pageNo = 1) => {
    const response = await fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${pageNo}&size=15`
    );
    return await response.json();
  };

  useEffect(() => {
    setPageData((prevState) => ({
      ...prevState,
      rowData: [],
      isLoading: true,
    }));
    getData(currentPage).then((info) => {
      const { totalPages, totalPassengers, data } = info;
      setPageData({
        isLoading: false,
        rowData: formatRowData(data),
        totalPages,
        totalPassengers: 1000,
      });
    });
  }, [currentPage]);

  return (
    <>
      <div>
        <p>Total Passengers: {pageData.totalPassengers || "Loading..."}</p>
        <div style={{ height: "600px" }}>
          <CustomTableBCK
            columns={columns}
            data={pageData.rowData}
            isLoading={pageData.isLoading}
          />
        </div>
        <CustomPaginationBCK
          totalRows={pageData.totalPassengers}
          pageChangeHandler={setCurrentPage}
          rowsPerPage={10}
        />
      </div>
    </>
  );
};

export default ListBooksBCK;
