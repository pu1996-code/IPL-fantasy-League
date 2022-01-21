import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from './Dashboard';
import axios from 'axios';
export default function AdminLogin() {
    const navigate = useNavigate();
    const [loginDetails, setLoginDetails] = useState({
      username: "",
      password: "",
    });
    const [error, setError] = useState(true);
    // const [authAdmin, setAuthAdmin] = useState(false);
  
    // useEffect(() => {
    // //   localStorage.getItem("auth") === "true" ? navigate("/matches") : <></>;
    // // setAuthAdmin(true);
    // localStorage.setItem("authAdmin", true);
    // }, []);
  
    const sendLoginDetails = async () => {
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/admin/login",
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
          navigate("/matchdetails");
        })
        .catch((err) => {
          setError(false);
        });
    };
  
    const validate = () => {
      // setAuthAdmin(true);
      localStorage.setItem("authAdmin", true);
      // console.log(authAdmin, "   hey!");
    };

  return (
    <div>
      <Dashboard/>
      <div className="container">
        <h1 className="text-center">Admin Login</h1>
        <main className=" w-50 m-auto">
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
         
        </main>
      </div>
    </div>
  );
}
