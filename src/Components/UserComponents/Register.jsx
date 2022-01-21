import React, { useState } from "react";
import NavBar from './NavBar';
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
export default function Register() {
  const [register, setRegister] = useState(false);
  const [username, setUsername] = useState(false);
  const [email, setEmail] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    mobile_number: "",
  });

  const sendUserData = async () => {
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/user/registration",
      data: userData,
    });
    return response;
  };
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    return <Registered/>
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendUserData()
      .then((res) => setRegister(true))
      .catch((err) => {
        if (err.response.data === "username already exist") {
          setUsername(true);
        } else if (err.response.data === "email already exist") {
          setEmail(true);
        }
      });
  };

  return (
    <>
    <NavBar/>
      {register ? (
        <Registered />
      ) : (
        <div className="container mt-5 p-5">
          <form
            className="mx-auto col-6 shadow p-3 rounded"
            onSubmit={handleSubmit}
          >
            <h3 className="text-center">Start Playing Today</h3>
            <div className="col-md-12">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={userData.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="username" className="form-label">
                username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={userData.username}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            {username ? (
              <span className="text-danger"> *username already exist</span>
            ) : (
              <></>
            )}
            <div className="col-md-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                name="email"
                value={userData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {email ? (
              <span className="text-danger"> *email already exist</span>
            ) : (
              <></>
            )}
            <div className="col-md-12">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                required
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={userData.password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="mobile_number"
                value={userData.mobile_number}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-md-12 mt-3">
              <button type="submit" className="btn btn-secondary col-12 ">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

const Registered = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        size="sm"
        backdrop="static"
        show={show}
        onHide={() => setShow(false)}
        centered
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-sm">Registerd</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button varient="primary" onClick={()=>navigate("/")}> Sign in </Button>
        </Modal.Body>
      </Modal>
    </>
  );
  // 
  // return (
  //   <div className="container text-center mt-4 m-auto">
  //     <h1> Registerd</h1>
  //     <button className="btn btn-primary" onClick={()=>navigate('/')}>Sign in</button>
  //   </div>
  // )
};
