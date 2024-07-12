import React from "react";
import "./CSS/Dashboard.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import EventCalendar from "../../Components/EventCalendar/EventCalendar";
function Dashboard() {
  return (
    <div className="dash">
      <Navbar />

      <div className="right">
        <Header />
        <div className="rights">
          <div className="right-left">
            <Banner />
          </div>
          <div className="right-right">
            <p>Calendar</p>
            <EventCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
