import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/UserComponents/NavBar";
import Home from "./Components/UserComponents/Home";
import Register from "./Components/UserComponents/Register";
import MatchSchedule from "./Components/UserComponents/MatchSchedule";
import Login from "./Components/UserComponents/Login";
import Error from "./Components/ReusableComponents/Error";

import AdminLogin from "./Components/AdminComponents/AdminLogin";
import Dashboard from './Components/AdminComponents/Dashboard';
import ScheduleMatch from './Components/AdminComponents/scheduleMatch';
import ManageTournament from './Components/AdminComponents/manageTournament';
import MatchDetails from './Components/AdminComponents/matchDetails';
import TeamDetails from './Components/AdminComponents/teamDetails';
import ViewBidders from './Components/AdminComponents/viewBidders';
import ResheduleDetails from './Components/AdminComponents/rescheduleMatch';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/matches" element={<MatchSchedule />} />
          <Route path="/*" element={<Error />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/schedulematch" element={<ScheduleMatch />} />
          <Route path="/managetournament" element={<ManageTournament />} />
          <Route path="/matchdetails" element={<MatchDetails />} />
          <Route path="/teamdetails" element={<TeamDetails />}/>
          <Route path="/posts/:id" element={<ResheduleDetails />} />
          <Route path="/ViewBidders" element={<ViewBidders />} />
          
        </Routes>
      </Router>
    </>
  );
}
