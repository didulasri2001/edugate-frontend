import React from "react";
import "./CSS/Dashboard.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import EventCalendar from "../../Components/EventCalendar/EventCalendar";
import Event from "../../Components/Event/Event";
import ClassCard from "../../Components/ClassCard/ClassCard";
import Attendence from "../../Components/AttendenceGraph/Attendence";
function Dashboard() {
  const attendanceData = {
    attendance: [100, 60], // Example attendance data: [total attendance, student attendance]
  };
  return (
    <div className="dash">
      <Navbar />

      <div className="right">
        <Header />
        <div className="rights">
          <div className="right-left">
            <Banner />
            <p>Enrolled Courses</p>
            <div className="courses">
              <ClassCard />
              <ClassCard />
              <ClassCard />
            </div>
            <p>Attendence</p>
            <div className="attendence">
              <Attendence data={attendanceData} />
              <Attendence data={attendanceData} />
              <Attendence data={attendanceData} />
            </div>
          </div>
          <div className="right-right">
            <p>Calendar</p>
            <EventCalendar />
            <p>Upcoming Events</p>
            <Event />
            <Event />
            <Event />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
