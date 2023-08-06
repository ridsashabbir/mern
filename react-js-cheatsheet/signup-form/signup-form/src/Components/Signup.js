import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
    age: "",
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

    var regn = /^[a-z ,.'-]+$/i;
    if (!regn.test(formData.fullname)) {
      console.log("Name cannot contain numbers");
      newErrors.fullname = "Name cannot contain numbers";
    }

    var rege =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!rege.test(formData.email)) {
      console.log("Please Enter a valid email address");
      newErrors.email = "Please Enter a valid email address";
    }

    if (formData.password.length < 8) {
      console.log("Password must b 8 characters long");
      newErrors.password = "Password must b 8 characters long";
    }

    if (formData.confirmpassword !== formData.password) {
      console.log("Confirm password should be same as Password");
      newErrors.confirmpassword = "Confirm password should be same as Password";
    }

    var rega = /^\S[0-9]{0,3}$/;
    if (!rega.test(formData.age)) {
      console.log("Please Enter valid age");
      newErrors.age = "Please Enter valid age";
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
            <input
              type="text"
              name="fullname"
              //   value={formData.fullname || ''}
              value={formData.fullname}
              placeholder="Full Name"
              onChange={handleInputChange}
              required
            />
            {errors && <div className="errors">{errors.fullname}</div>}
            {/* {error.fullname} */}
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={formData.email}
              //   value={formData.email || ""}
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              required
            />
            {errors && <div className="errors">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              //   value={formData.password || ""}
              onChange={handleInputChange}
              required
            />
            {errors && <div className="errors">{errors.password}</div>}
            {/* {error.password} */}
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              //   value={formData.confirmpassword || ""}
              placeholder="Confirm Password"
              onChange={handleInputChange}
              required
            />
            {errors && <div className="errors">{errors.confirmpassword}</div>}
            {/* {error.confirmpassword} */}
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="age"
              value={formData.age}
              //   value={formData.age || ""}
              placeholder="Age"
              onChange={handleInputChange}
              required
            />
            {errors && <div className="errors">{errors.age}</div>}
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
