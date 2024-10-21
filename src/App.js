import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginSignUp from "./Pages/Students/LoginSignUp";
import Dashboard from "./Pages/Students/Dashboard";
import MyProfile from "./Pages/Students/MyProfile";

import EmailVerify from "./Components/EmailAuth/EmailVerify";
import Courses from "./Pages/Students/Courses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/emailVerify" element={<EmailVerify />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
