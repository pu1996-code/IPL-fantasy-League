import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
const ManageTournament = () => {
  const [tournamentData, setData] = useState({});
  const [register, setRegister] = useState(false);


  const sendTournamentData = async () => {
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/admin/create-tournament",
      data: tournamentData,
    });
    return response;
  };
  const handleChange = (e) => {
    setData({
      ...tournamentData,
     [e.target.name]:(e.target.name === "match_id") ? parseInt(e.target.value):e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tournamentData);
    sendTournamentData()
      .then((res) => {setRegister(true)
      console.log(res.data)
      })
      .catch((err) => {console.log(err)
      });
  };
  return (
    <>
    <Dashboard/>
    <div className="container ">
      <h2 className="text-center">Create Tournament</h2>
      <form className="w-50 mx-auto shadow p-3 rounded" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlFor="oneid" class="form-label">
            Number of Qualifiers
          </label>
          <input type="text" class="form-control" id="oneid"
          value={tournamentData.number_of_qualifiers} onChange= {(e) =>{handleChange(e)}}
          name="number_of_qualifiers"  />
        </div>
        <div class="mb-3">
          <label htmlFor="twoid" class="form-label">
            Number of Teams
          </label>
          <input type="text" class="form-control" id="twoid"
           value={tournamentData.number_of_teams} onChange= {(e) =>{handleChange(e)}}
           name="number_of_teams"  />
        </div>

        <div class="mb-3">
          <label htmlFor="twoid" class="form-label">
            Number of Matches Completed
          </label>
          <input type="text" class="form-control" id="twoid"
          value={tournamentData.number_of_matches_completed} onChange= {(e) =>{handleChange(e)}}
          name="number_of_matches_completed" />
        </div>

        <div class="mb-3">
          <label htmlFor="twoid" class="form-label">
            Match-Id
          </label>
          <input type="text" class="form-control" id="twoid" 
          value={tournamentData.match_id} onChange= {(e) =>{handleChange(e)}}
          name="match_id"
          />
        </div>
        <div className="text-center">
        <button type="submit" class="btn btn-primary col-12">
          Submit
        </button>
        </div>
        
      </form>
    </div>
    </>
  );
};
export default ManageTournament;
