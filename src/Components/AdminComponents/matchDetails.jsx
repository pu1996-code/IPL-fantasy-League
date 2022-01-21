import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
const MatchDetails = () => {
  const [teamData, setTeamData] = useState({});
  const [register, setRegister] = useState(false);


  const sendMatchData = async () => {
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/admin/match-details",
      data: teamData,
    });
    return response;
  };
  const handleChange = (e) => {
    setTeamData({
      ...teamData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(teamData);
    sendMatchData()
      .then((res) => {setRegister(true)
      console.log(res.data)
      })
      .catch((err) => {console.log(err)
      });
  };
  return (
    <>
      <Dashboard />
      <div className="container">
        <h2 className="text-center">Match Details</h2>
        <form className="w-50 mx-auto shadow p-3 rounded" onSubmit={handleSubmit}>
        {register?(<h5 className="text-success">*Team Details Submitted.. </h5>):(<></>)}
          <div class="mb-3">
            <label htmlFor="mid" class="form-label">
              Team one
            </label>
            <input type="text" class="form-control" id="mid" name="team_one" value={teamData.team_one}
            onChange={(e)=>handleChange(e)}/>
          </div>
          <div class="mb-3">
            <label htmlFor="oneid" class="form-label">
              Team two
            </label>
            <input type="text" class="form-control" id="oneid" name="team_two" value={teamData.team_two}
            onChange={(e)=>handleChange(e)}/>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">Match Date</label>
            <input class="form-control" type="date" id="date" name="match_date" value={teamData.match_date}
            onChange={(e)=>handleChange(e)}/>
          </div>

          <div className="mb-3">
            <label htmlFor="appt" class="form-label">Match Time</label>
            <input class="form-control" type="text" id="appt" name="match_time" value={teamData.match_time}
            onChange={(e)=>handleChange(e)}/>
          </div>

          <div class="mb-3">
            <label htmlFor="oneid" class="form-label">
              Match-Stadium
            </label>
            <input type="text" class="form-control" id="oneid" name="match_stadium" value={teamData.match_stadium}
            onChange={(e)=>handleChange(e)}/>
          </div>

          <div class="mb-3">
            <label htmlFor="oneid" class="form-label">
              Winner
            </label>
            <input type="text" class="form-control" id="oneid" name="winner" value={teamData.winner}
            onChange={(e)=>handleChange(e)} />
          </div>

          <div class="mb-3">
            <label htmlFor="oneid" class="form-label">
              Status
            </label>
            <input type="text" class="form-control" id="oneid" name="status" value={teamData.status}
            onChange={(e)=>handleChange(e)}/>
          </div>

          <div class="mb-3">
            <label htmlFor="oneid" class="form-label">
              Delay
            </label>
            <input type="text" class="form-control" id="oneid" name="delay" value={teamData.delay}
            onChange={(e)=>handleChange(e)} />
          </div>

          <button type="submit" class="btn btn-primary col-12">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default MatchDetails;
