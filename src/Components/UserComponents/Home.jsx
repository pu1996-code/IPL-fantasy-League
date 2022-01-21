import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assests/styles/style.css";
import NavBar from './NavBar';
export default function Home() {
  const [MatchStats, setMatchStats] = useState([]);
  const [teamStats, setTeamStats] = useState([]);

  const getMatchStats = async () => {
    const response = await axios.get("http://localhost:8080/match-stats");
    return response;
  };
  const getTeamStats = async () => {
    const response = await axios.get("http://localhost:8080/team-stats");
    return response;
  };

  useEffect(() => {
    localStorage.setItem("authAdmin",false);
    localStorage.setItem("auth",false);
    getMatchStats()
      .then((data) => {
        // console.log(data.data);
        setMatchStats(data.data);
      })
      .catch((err) => console.log(err));

      getTeamStats()
      .then((data) => {
        // console.log(data.data);
        setTeamStats(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <NavBar/>
      <div className="home-img"></div>
      <h1 className="text-center">Matches Hightlights</h1>
      <div className="table-responsive container ">
        <table className="table table-borderless table-hover w-75 mx-auto shadow p-3 mb-5 bg-light rounded text-center ">
          <thead className="table-dark">
            <tr className="text-center">
              {/* <th scope="col">Id</th> */}
              <th scope="col">Team 1</th>
              <th scope="col">Team 2</th>
              <th scope="col">Place</th>
              <th scope="col">Winner</th>
            </tr>
          </thead>
          <tbody>
            {MatchStats.map((match) => (
              <tr key={match.match_id}>
                {/* <th scope="row">{match.match_id}</th> */}
                <td>{match.teamdetails.team_name}</td>
                <td>{match.teamdetails2.team_name}</td>
                <td>{match.match_stadium}</td>
                <td>{match.winner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1 className="text-center">Teams Statistics</h1>
      <div className="table-responsive container ">
        <table className="table table-borderless table-hover w-75 mx-auto shadow p-3 mb-5 bg-light rounded text-center ">
          <thead className="table-dark">
            <tr className="text-center">
              <th scope="col">Team</th>
              <th scope="col">Match Played</th>
              <th scope="col">Won</th>
              <th scope="col">Lose</th>
              <th scope="col">Points</th>
              <th scope="col">Draw</th>
            </tr>
          </thead>
          <tbody>
            {teamStats.map((match) => (
              <tr key={match.match_id}>
                {/* <th scope="row">{match.match_id}</th> */}
                <td>{match.team_name}</td>
                <td>{match.matches_played}</td>
                <td>{match.matches_won}</td>
                <td>{match.matches_lost}</td>
                <td>{match.points}</td>
                <td>{match.match_drawn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
