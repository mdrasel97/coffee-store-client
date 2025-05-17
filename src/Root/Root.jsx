import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Root = () => {
  const { state } = useNavigation();
  return (
    <div className="lg:container mx-auto">
      <Navbar />
      <div className="min-h-screen">
        {state == "loading" ? <Loading /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default Root;
