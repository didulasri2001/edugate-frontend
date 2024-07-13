import React from "react";
import "./CSS/Dashboard.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import EventCalendar from "../../Components/EventCalendar/EventCalendar";
import Event from "../../Components/Event/Event";
import ClassCard from "../../Components/ClassCard/ClassCard";
import Attendence from "../../Components/AttendenceGraph/Attendence";
import LineChart from "../../Components/LineChart/Linechart";
function Dashboard() {
  const attendanceData = {
    attendance: [100, 60], // Example attendance data: [total attendance, student attendance]
  };
  const testData = {
    tests: [
      { name: "Test 1", marks: 85 },
      { name: "Test 2", marks: 78 },
      { name: "Test 3", marks: 92 },
      { name: "Test 4", marks: 88 },
      { name: "Test 5", marks: 75 },
    ],
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
            <div className="bottom-Line">
              <div className="AttendenceCon">
                <p>Attendence</p>
                <div className="attendence">
                  <Attendence
                    data={attendanceData}
                    backgroungcolor="rgba(127, 180, 215, 1)"
                    subject="Chemistry"
                  />
                  <Attendence
                    data={attendanceData}
                    backgroungcolor="rgba(166, 187, 170, 1)"
                    subject="Physics"
                  />
                  {/* <Attendence
                    data={attendanceData}
                    backgroungcolor="rgba(206, 195, 126, 1)"
                    subject="Com.Maths"
                  /> */}
                </div>
              </div>
              <div className="PerfermanceCon">
                <p>Performance</p>
                <LineChart data={testData} />
              </div>
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
