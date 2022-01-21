import Dashboard from "./Dashboard";
import React, { useState } from "react";
import axios from "axios";
const ScheduleMatch = () => {
  const [schedule, setSchedule] = useState([]);
  const [register, setRegister] = useState(false);
  
  const SendSchedule = async () => {
    const response = await axios({
      method: "POST",
      url: "http://localhost:8080/admin/match-schedule",
      data: schedule,
    });
    return response;
  };

  const handleChange = (e) => {
    // if(name === "team_1_id" || name === "team_2_id" ){
    //   value = parseInt(value);
    // }
    setSchedule({
      ...schedule,
      [e.target.name]:(e.target.name === "team_1_id" || e.target.name === "team_2_id") ? parseInt(e.target.value):e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(schedule);
    SendSchedule()
      .then((res) => {setRegister(true)
      console.log(res.data)})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Dashboard />
      <div className="container">
        <h2 className="text-center">ScheduleMatch</h2>
        <form className="w-50 mx-auto shadow p-3 rounded" onSubmit={handleSubmit}>
        {register?(<h5 className="text-success">*Match Scheduled Successfully </h5>):(<></>)}
          <div class="mb-3">
            <label htmlFor="oneid" class="form-label">
              Team one Id
            </label>
            <input type="number" class="form-control" id="oneid" 
            value={schedule.team_1_id} onChange= {(e) =>{handleChange(e)}}
            name="team_1_id"            
            />
          </div>
          <div class="mb-3">
            <label htmlFor="twoid" class="form-label">
              Team Two Id
            </label>
            <input type="number" class="form-control" id="twoid"
            
            value={schedule.team_2_id} onChange= {(e) =>{handleChange(e)}}
            name="team_2_id"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Match Date :
            </label>
            <input type="date" id="date" className="form-control" 
            value={schedule.match_date} onChange= {(e) =>{handleChange(e)}} name="match_date"/>
          </div>

          <div className="mb-3">
            <label htmlFor="time1" className="form-label">
              Start Time
            </label>
            <input type="time" id="time1" className="form-control" 
            value={schedule.start_time} onChange= {(e) =>{handleChange(e)}} name="start_time" name="start_time"/>
          </div>

          <div className="mb-3">
            <label htmlFor="time2" className="form-label">
              End Time :
            </label>
            <input type="time" id="time2" className="form-control" value={schedule.end_time} onChange= {(e) =>{handleChange(e)}} name="end_time" name="end_time" />
          </div>

          <button type="submit" class="btn btn-primary col-12">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default ScheduleMatch;
