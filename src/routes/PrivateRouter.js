import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Dashboard from "../components/Dashboard";
import Customers from "../components/Customers";

const PrivateRouter = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </Layout>
    </>
  );
};

export default PrivateRouter;
