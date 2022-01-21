import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../assests/styles/style.css";
export default function Dashboard() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("authAdmin", "false");
    navigate("/admin");
  };

  return (
    <div>
      <nav className="navbar   navbar-expand-lg navbar-dark nav-bg-color">
        <div className="container">
          <Link className="navbar-brand h1 nav-link" to="">
            <img
              src="/images/logo1.png"
              alt=""
              width="30"
              height="28"
              className="d-inline-block align-text-top mx-2"
            />
            Fantasy League
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            {localStorage.getItem("authAdmin") === "true" ? (
              <ul className="navbar-nav mb- mb-lg-0">
                <li className="nav-item ">
                  <Link className="nav-link" to="/matchdetails">
                    Match Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/managetournament">
                    Manage Torunament
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/schedulematch">
                    Schedule Match
                  </Link>
                </li>
                {/* <li className="nav-item">
                <Link className="nav-link" to="/posts">
                  RescheduleMatch
                </Link>
              </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/teamdetails">
                    Team Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ViewBidders">
                    View Bidders
                  </Link>
                </li>

                <li className="nav-item">
                  {localStorage.getItem("authAdmin") === "true" ? (
                    <button
                      className="btn border  bg-light text-b"
                      aria-current="page"
                      onClick={() => logout()}
                    >
                      Logout
                    </button>
                  ) : (
                    <></>
                  )}
                </li>
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
