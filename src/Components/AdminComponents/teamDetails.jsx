import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./Dashboard";

const TeamDetails = () => {
  return (
    <>
    <Dashboard/>
    <div className="container">
      <h1 className="text-center">Create Team</h1>
      <form className="shadow p-3 rounded w-50 mx-auto">
        <div class="mb-3">
          <label htmlFor="mid" class="form-label">
            Team-Name
          </label>
          <input type="text" class="form-control" id="mid" />
        </div>
        <div class="mb-3">
          <label htmlFor="oneid" class="form-label">
            Home-Ground
          </label>
          <input type="text" class="form-control" id="oneid" />
        </div>
        <div class="mb-3">
          <label htmlFor="oneid" class="form-label">
            Team-players
          </label>
          <input type="text" class="form-control" id="oneid" />
        </div>
        <div class="mb-3">
          <label htmlFor="oneid" class="form-label">
            Captain
          </label>
          <input type="text" class="form-control" id="oneid" />
        </div>

        <button type="submit" class="btn btn-primary col-12">
          Submit
        </button>
      </form>
    </div>
    </>
  );
};
export default TeamDetails;
