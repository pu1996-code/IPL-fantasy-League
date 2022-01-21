import React,{useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ResheduleDetails=()=>{

    const[details,setDetails]=useState({});
    const[updatedPost,setUpdatedpost]=useState({});
    const params=useParams();

    const navigate =useNavigate();
    console.log(params);

    const PostData=async()=>{
      const res= await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
      // setDetails(res.data);
      return res;  
  };


    const PostDetail =async()=>{
        const res= await axios.put(`https://jsonplaceholder.typicode.com/posts/${params.id}`,updatedPost);
        return res;
    };
    useEffect(()=>{

      PostData().then(data=>setDetails(data.data)).catch(err=>console.log(err));

    },[]);


    const handleChange=(e)=>{
            setDetails({
            ...details,
            [e.target.name]:e.target.value,
        });
    };

    console.log(details);
    useEffect(()=>{

        PostDetail().then(data=>console.log(data,"Api call")).catch(err=>console.log(err));
  
      },[updatedPost]);


      const handleSubmit=(e)=>{
          
          e.preventDefault();
          setUpdatedpost({
            ...details,
          })

      };

      console.log(updatedPost);

    return (
       
    <div>
    <form onSubmit={handleSubmit}>
    <div class="container">
    <div class="row mb-3">
      <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
      <div class="col-sm-10">
        <input type="text" className="form-control" id="inputId" name="id" value={details.id} onChange={(e)=>handleChange(e) } />
      </div>
    </div>
    <div class="row mb-3">
      <label htmlFor="inputTitle" className="col-sm-2 col-form-label">Matches</label>
      <div class="col-sm-10">
        <input type="text" className="form-control" id="inputTitle" name="title" value={details.title} onChange={(e)=>handleChange(e)} />
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Reshedule-Match</button>
    </div>
  </form>
  </div>
    )
  
}
export default ResheduleDetails;