import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logomd from "../../assets/images/home/srivn.png";
import HomePage from "./HomePage";
import Login from "./Login";
import NoPage from "./NoPage";

const Welcome = () => {
  console.log("-Welcome");
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/welcome" element={<HomePage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default Welcome;
