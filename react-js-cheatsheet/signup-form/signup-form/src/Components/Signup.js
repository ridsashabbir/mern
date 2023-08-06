import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
    age: "",
  });

  const [error, setErrors] = useState();
  const [successMsg, setSuccessMsg] = useState();
  const handleInputChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div>
      <div className="container">
        <h1>Signup Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            {/* <label className="form-label">Full Name</label> */}
            <input
              type="text"
              name="fullName"
              value={formData.text}
              placeholder="Full Name"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            {/* <label className="form-label">Email</label> */}
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="mb-3">
            {/* <label className="form-label">Password</label> */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            {/* <label className="form-label">Confirm Password</label> */}
            <input
              type="password"
              name="confirmPassword"
              value={formData.password}
              placeholder="Confirm Password"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            {/* <label className="form-label">Age</label> */}
            <input
              type="text"
              name="age"
              value={formData.text}
              placeholder="Age"
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
