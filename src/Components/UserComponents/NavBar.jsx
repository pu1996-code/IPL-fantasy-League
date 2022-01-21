import React from "react";
import { Link, UseNavigate } from "react-router-dom";
import "../assests/styles/style.css";
export default function NavBar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("auth", "false");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar fixed-top  navbar-expand-lg navbar-dark nav-bg-color">
        <div className="container">
          <Link className="navbar-brand h1" to="/">
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
            <ul className="navbar-nav mb- mb-lg-0">
            <li className="nav-item">
                
                  <Link className="nav-link" to="/">
                   Home
                  </Link>
              </li>
              <li className="nav-item">
                {localStorage.getItem("auth") === "true" ? (
                  <>
                    <Link className="nav-link" to="/matches">
                      Matches
                    </Link>
                  </>
                ) : (
                  <></>
                )}
              </li>
              <li className="nav-item">
                {localStorage.getItem("auth") === "false" ? (
                  <>
                    <Link className="btn btn-success" to="/login">
                      Sign in
                    </Link>
                    <span className="text-light h6 mt-2 mx-1">|</span>
                  </>
                ) : (
                  <></>
                )}
              </li>

              <li className="nav-item">
                {localStorage.getItem("auth") === "false" ? (
                  <Link className="btn btn-secondary" to="/register">
                    Sign up
                  </Link>
                ) : (
                  <></>
                )}
              </li>

              <li className="nav-item">
                {localStorage.getItem("auth") === "true" ? (
                  <button
                    className="btn border  bg-light"
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
          </div>
        </div>
      </nav>
    </div>
  );
}
