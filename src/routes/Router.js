import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PrivateRouter />} />

        <Route path="/" element={<Login />} exact />
        <Route path="/signup" element={<SignUp />} exact />
      </Routes>
    </>
  );
};

export default Router;
