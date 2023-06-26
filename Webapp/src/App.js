import React from "react";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import RegistrationScreen from "./pages/RegistrationScreen";
import Navigationbar from "./Navigationbar";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import StatusScreen from "./pages/StatusScreen";
import ReviewScreen from "./pages/ReviewScreen";
import Activated from "./pages/Activated";

function App() {
  return (
    <>
      <Navigationbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/RegistrationScreen" element={<RegistrationScreen />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/StatusScreen" element={<StatusScreen />} />
          <Route path="/ReviewScreen" element={<ReviewScreen />} />
          <Route path="/Activated" element={<Activated />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
