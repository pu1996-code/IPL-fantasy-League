import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";

const ViewBidders = () => {
  const [posts, setPosts] = useState([]);
  // const navigate = useNavigate();

  const getPosts = async () => {
    const response = await axios.get(
      "http://localhost:8080/admin/biddings"
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
      <div className="container">
      <h1 className="text-center">Bidders Details</h1>
        <table className="table w-75 mx-auto table-light table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">User Id</th>
              <th scope="col">Match Id</th>
              <th scope="col">user opinion 1</th>
              <th scope="col">user opinion 2</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
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
};
export default ViewBidders;
