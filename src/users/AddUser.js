import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobileNumber: "", 
    location: "",
  });

  const { name, email, mobileNumber, location } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/employee/addEmployee",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Employee added:", response.data);
      navigate("/");
    } catch (err) {
      console.error("Error adding employee:", err.response?.data || err.message);
    }
  };

  const onCancel = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add New Employee</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3 shadow">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3 shadow">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3 shadow">
              <label htmlFor="mobileNumber" className="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your contact number"
                name="mobileNumber"
                value={mobileNumber}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your location"
                name="location"
                value={location}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Register
            </button>
            <Link
              className="btn btn-outline-danger ms-2"
              to='/'
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
