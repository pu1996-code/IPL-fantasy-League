import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
export default function MactSchedule() {
  const [matchDetails, setMatchDetails] = useState([]);
  const [bidDetails, setBidDetails] = useState({
    match_id: "",
    user_opinion1: "",
    user_opinion2: "",
  });
  const [show, setShow] = useState(false);
  const [showBid, setShowBid] = useState(false);
  const [isBidDone, setBidDone] = useState(false);
  const navigate = useNavigate();
  const [bidders, setBidders] = useState([]);

  const getBidders = async () => {
    const response = await axios.get("http://localhost:8080/admin/biddings");
    console.log(response);
    return response;
  };

  const getMatches = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8080/user/matches-schedule",
    });
    return response;
  };
  useEffect(() => {
    localStorage.getItem("auth") === "false"
      ? navigate("/")
      : getMatches()
          .then((data) => {
            setMatchDetails(data.data);
          })
          .catch((err) => console.log(err));
    getBidders()
      .then((data) => {
        console.log(data);
        setBidders(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const detailsModal = () => {
    return (
      <Modal
        show={show}
        onHide={() => setShow(false)}
        // fullscreen={true}
        // dialogClassName="modal-100w"
        centered
        aria-labelledby="example-custom-modal-styling-title"
      >
       <span className="bg-secondary"> <Modal.Header closeButton /></span>
        <Modal.Title
          // id="example-custom-modal-styling-title"
          bsPrefix="text-center"
        >
          Team Details
        </Modal.Title>
        <Modal.Body>
          <Table bsPrefix="table table-light  w-100 mx-auto">
            <thead>
              <tr>
                <th>Team id</th>
                <th>Team Name</th>
                <th>Home ground</th>
                <th>Captain</th>
                <th>players</th>
              </tr>
            </thead>
            <tbody>
              {matchDetails.slice(0,2).map((data) => (
                <tr key={data.match_id}>
                  <th>{data.teamdetails.match_id}</th>
                  <td>{data.teamdetails.team_name}</td>
                  <td>{data.teamdetails.home_ground}</td>
                  <td>{data.teamdetails.captain}</td>
                  <td>{data.teamdetails.team_players}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    );
  };

  const sendBidDetails = async () => {
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/user/bid",
      data: bidDetails,
    });
    return response;
  };

  const handleChange = (e) => {
    setBidDetails({
      ...bidDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendBidDetails()
      .then((res) => {
        setShowBid(false);
        console.log(res.data);
      })
      .catch((err) => {
        // setError(false);
        console.log(err);
      });
    setBidDone(true);
    console.log(bidDetails);
  };
  const biddingModal = () => {
    return (
      <>
        <Modal
          show={showBid}
          onHide={() => setShowBid(false)}
          centered
          aria-labelledby="example-custom-modal-styling-title"
        >
         <span className="bg-success container-fluid w-100"> <Modal.Header closeButton/></span>
          <Modal.Title bsPrefix="text-center">Bid Now</Modal.Title>
          <Modal.Body bsPrefix="container mx-auto">
            <form className=" mx-4 p-3" onSubmit={handleSubmit}>
              <div className="col-md-12">
                <label htmlFor="match_id" className="form-label">
                  <h6>Match Id</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="match_id"
                  name="match_id"
                  value={matchDetails.match_id}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="opinion1" className="form-label">
                  <h6>Your pridication for team 1</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="opinion1"
                  name="user_opinion1"
                  value={matchDetails.user_opinion1}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="opinion2" className="form-label">
                  <h6>Your pridication for team 2</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="opinion2"
                  name="user_opinion2"
                  value={matchDetails.user_opinion2}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-dark btn-block col-3">
                  Bid
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  const bidderForm = (matchId) => {
    setShowBid(true);
  };
  return (
    <>
      <NavBar />
      {detailsModal()}
      {biddingModal()}

      <div className="container mt-5 p-4">
        <h1 className="text-center">Schedule Matches</h1>
        <table className="table  p-3 mt-3 table-bordere  mx-auto shadow p-3 mb-5 bg-light rounded ">
          <thead className="table-dark">
            <tr className="text-center">
              <th scope="col">Id</th>
              <th scope="col">Start</th>
              <th scope="col">End</th>
              <th scope="col">date</th>
              <th scope="col">Team 1</th>
              <th scope="col">Team 2</th>
              <th scope="col">Result</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {matchDetails.map((match) => (
              <tr key={match.match_id}>
                <th scope="row">{match.match_id}</th>
                <td>{match.start_time}</td>
                <td>{match.end_time}</td>
                <td>{match.match_date}</td>
                <td>{match.teamdetails.team_name}</td>
                <td>{match.teamdetails2.team_name}</td>
                <td>{match.result}</td>
                <td className="row w-100  ">
                  <button
                    className="btn btn-success mb-2"
                    onClick={() => bidderForm(match.match_id)}
                  >
                    Bid Now
                  </button>
                  <button
                    className="btn btn-secondary  "
                    onClick={() => setShow(true)}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1 className="text-center"> My biddings</h1>
        <div className="container">
          <table className="table  mx-auto table-light table-striped">
            <thead className="table-dark">
              <tr>
                <th scope="col">User Id</th>
                <th scope="col">Match Id</th>
                <th scope="col">user opinion 1</th>
                <th scope="col">user opinion 2</th>
              </tr>
            </thead>
            <tbody>
              {bidders.map((post) => (
                <tr key={post.user_id}>
                  <th scope="row">{post.user_id}</th>
                  <td>{post.match_id}</td>
                  <td>{post.user_opinion1}</td>
                  <td>{post.user_opinion2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
