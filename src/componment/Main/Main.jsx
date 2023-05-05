import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div className="flex-1 h-full">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;