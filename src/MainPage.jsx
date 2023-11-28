import "./App.css";
import React from "react";
import Header from "./components/Header.jsx";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

const Dashboard = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export const MainPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Header />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
