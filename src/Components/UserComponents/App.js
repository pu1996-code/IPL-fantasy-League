import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Register from "./Register";
import MatchSchedule from "./MatchSchedule";
import Login from "./Login";
import Error from "../ReusableComponents/Error";

import AdminLogin from "../AdminComponents/AdminLogin";
import Dashboard from '../AdminComponents/Dashboard';
import ScheduleMatch from '../AdminComponents/scheduleMatch';
import ManageTournament from '../AdminComponents/manageTournament';
import MatchDetails from '../AdminComponents/matchDetails';
import TeamDetails from '../AdminComponents/teamDetails';
import ViewBidders from '../AdminComponents/viewBidders';
import ResheduleDetails from '../AdminComponents/rescheduleMatch';

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
