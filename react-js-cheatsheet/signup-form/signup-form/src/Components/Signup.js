import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullname: " ",
    email: " ",
    password: " ",
    confirmpassword: " ",
    age: " ",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const handleInputChange = (event) => {
    console.log("on change");
    setFormData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!(formData.password === formData.confirmpassword)) {
      console.log("Confirm password should be same as Password");
      newErrors.confirmpassword = "Confirm password should be same as Password";
    }

    if (Object.keys(newErrors).length === 0) {
      setSuccessMsg("Signup successful!");
    }

    setErrors(newErrors);
  };

  return (
    <div>
      <div className="container">
        <h1>Signup Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            {/* <label className="form-label">Full Name</label> */}
            <input
              type="text"
              name="fullname"
              value={formData.fullname || ""}
              placeholder="Full Name"
              onChange={handleInputChange}
              required
            />
            {errors && <div className="errors">{errors.fullname}</div>}
            {/* {error.fullname} */}
          </div>
          <div className="mb-3">
            {/* <label className="form-label">Email</label> */}
            <input
              type="email"
              value={formData.email || ""}
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              required
            />
            {errors && <div className="errors">{errors.email}</div>}
          </div>
          <div className="mb-3">
            {/* <label className="form-label">Password</label> */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password || ""}
              onChange={handleInputChange}
              required
            />
            {errors && <div className="errors">{errors.password}</div>}
            {/* {error.password} */}
          </div>
          <div className="mb-3">
            {/* <label className="form-label">Confirm Password</label> */}
            <input
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword || ""}
              placeholder="Confirm Password"
              onChange={handleInputChange}
              required
            />
            {errors && <div className="errors">{errors.confirmpassword}</div>}
            {/* {error.confirmpassword} */}
          </div>
          <div className="mb-3">
            {/* <label className="form-label">Age</label> */}
            <input
              type="text"
              name="age"
              value={formData.age || ""}
              placeholder="Age"
              onChange={handleInputChange}
              required
            />
            {errors && <div className="errors">{errors.age}</div>}
            {/* {error.age} */}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {successMsg && <div className="success">{successMsg}</div>}
      </div>
    </div>
  );
}
