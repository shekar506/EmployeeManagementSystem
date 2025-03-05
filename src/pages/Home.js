import React, { use, useDebugValue, useEffect, useState } from 'react'
import axios from 'axios';
import { Link, unstable_setDevServerHooks, useParams } from 'react-router-dom';

export default function Home() {

    const [users,setUsers]=useState([]);
    const {id} = useParams()

    useEffect(()=> {
        loadUsers(); 
        
    },[]);   

    const loadUsers=async()=>{
        const result =await axios.get("http://localhost:8080/api/employee");
        setUsers(result.data);
    };

    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8080/api/employee/deleteEmployee/${id}`)
      loadUsers()
    } 

  return (
    <div className='container'>
      <div className='py-4'>

        <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">mobileNumber</th>
      <th scope='col'>location</th>
      <th scope='col'>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.mobileNumber}</td>
      <td>{user.location}</td>
      <td>
        <Link className="btn btn-primary mx-2" to={`/${user.id}`}>view</Link>
        <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Edit</Link>
        <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>
      </td>
    </tr>
    
        ))
    }
    
  </tbody>
</table>
      </div>
    </div>
  )
}
