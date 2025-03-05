import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const { id } = useParams(); // Extract ID from the route
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    location: "",
  });

  const { name, email, mobileNumber, location } = user;

  // Fetch the existing user details when the component mounts
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/employee/${id}`);
      setUser(response.data);
    } catch (err) {
      console.error("Error Fetching User Data:", err.response?.data || err.message);
    }
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/employee/UpdateEmployee/${id}`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/"); // Navigate back to the home page after successfull Api Request
    } catch (err) {
      console.error("Error updating employee:", err.response?.data || err.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Employee Details</h2>
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
              Save Changes
            </button>
            <Link className="btn btn-outline-danger ms-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
