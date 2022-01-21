import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import axios from "axios";
export default function Login() {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(true);
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    localStorage.getItem("auth") === "true" ? navigate("/matches") : <></>;
  }, []);

  const sendLoginDetails = async () => {
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/user/login",
      data: loginDetails,
    });
    return response;
  };

  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendLoginDetails()
      .then((res) => {
        validate();
        navigate("/matches");
      })
      .catch((err) => {
        setError(false);
      });
  };

  const validate = () => {
    setAuth(true);
    localStorage.setItem("auth", auth);
    console.log(auth, "   hey!");
  };

  return (
    <>
    <NavBar/>
      <div className="container  m-5 p-5">
        <main className=" w-50 m-auto">
          <h1>Play And Earn Reward</h1>
          <h5>Create Team and Earn real cash</h5>
          <form
            className=" shadow px-4 py-3 mb-2 rounded "
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label htmlFor="userName" className="col-sm-2 col-form-label">
                User Name
              </label>
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="username"
                  value={loginDetails.email}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
            </div>
            <div className="mb-">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={loginDetails.password}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
            </div>

            {!error ? (
              <p className="text-danger"> * Incorrect username or password</p>
            ) : (
              <></>
            )}
            <div className="mt-3">
              <button type="submit" className="btn btn-secondary col-12">
                Sign in
              </button>
            </div>
          </form>
          <span>Don't have an account:</span>
          <Link className="text-primary" to="/register">
            Register here
          </Link>
        </main>
      </div>
    </>
  );
}
