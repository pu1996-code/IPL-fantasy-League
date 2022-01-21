import { useState, useEffect } from "react";
import {
  Route,
  BrowserRouter,
  Routes,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import Dashboard from "./Dashboard";

const RescheduleMatch = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const getPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response);
    return response;
  };

  useEffect(() => {
    getPosts()
      .then((data) => {
        console.log(data);
        setPosts(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(posts);

  return (
    <>
    <Dashboard/>
    <div>
      <h1>Reschedule-Match</h1>
      <div className="container">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Matches</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <th scope="row">{post.id}</th>
                <td>{post.title}</td>
                <td>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => navigate(`/posts/${post.id}`)}
                        >
                          RescheduleMatch
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};
export default RescheduleMatch;
