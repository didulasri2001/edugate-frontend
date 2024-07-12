import React from "react";
import "./CSS/Dashboard.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
function Dashboard() {
  return (
    <div className="dash">
      <Navbar />
      <div className="right">
        <Header />
        <div className="right-left">
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
