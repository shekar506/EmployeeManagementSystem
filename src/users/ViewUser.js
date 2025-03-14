import axios from 'axios';
import React, { use, useDebugValue, useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

export default function ViewUser() {

    const [user,setUser]=useState({
        name: "",
        email: "",
        mobileNumber: "",
        location: "",
    })

    const {id}=useParams();

    useEffect(()=>{
        loadUser();

    },[]);

    const loadUser= async ()=>{
        const result=await axios.get(`http://localhost:8080/api/employee/${id}`)
        setUser(result.data)
    }

  return (
    
      <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Employee Details </h2>
<div className='"card'>
    <div className='card-header'>
        Details of the employee id:{user.id}
        <ul className='list-group list-group-flush'>
            
            <li className='list-group-item'>
                <b>name:</b>
                {user.name}
            </li>
            <li className='list-group-item'>
                <b>email:</b>
                {user.email}
            </li> 
            <li className='list-group-item'>
                <b>number:</b>
                {user.mobileNumber}
            </li> 
            <li className='list-group-item'>
                <b>location:</b>
                {user.location}
            </li> 


        </ul>

    </div>

</div>
<Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>

          </div>
          </div>
          </div>
  )
}
