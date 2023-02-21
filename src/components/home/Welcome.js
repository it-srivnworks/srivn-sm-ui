import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logomd from "../../assets/images/home/srivn.png";
import LibraryHome from "../library/admin/LibraryHome";
import HomePage from "./HomePage";
import Login from "./Login";
import NoPage from "./NoPage";
import RegisterUser from "./RegisterUser";

const Welcome = () => {
  console.log("-Welcome");
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/welcome" element={<HomePage />}>
          <Route path="library" element={<LibraryHome />}></Route>
        </Route>
        <Route path="/registerUser" element={<RegisterUser />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default Welcome;
