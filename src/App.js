import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginSignUp from "./Pages/Students/LoginSignUp";
import Dashboard from "./Pages/Students/Dashboard";
import MyProfile from "./Pages/Students/MyProfile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<MyProfile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
