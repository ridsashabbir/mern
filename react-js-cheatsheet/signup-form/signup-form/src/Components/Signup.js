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

  // this functionality will run on 'on change'
  const handleInputChange = (event) => {
    console.log("on change");
    setFormData(event.target.value);
  };

  // this will validate all the fields before submitting the from
  const handleSubmit = (event) => {
    // it will prevent form from refreshing
    event.preventDefault();
    // this will contain all the errors while validation
    const newErrors = {};

    // validator for the name
    var regn = /^[a-z ,.'-]+$/i;
    if (!regn.test(formData.fullname)) {
      console.log("Name cannot contain numbers");
      newErrors.fullname = "Name cannot contain numbers";
    }

    // validator for email
    var rege =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!rege.test(formData.email)) {
      console.log("Please Enter a valid email address");
      newErrors.email = "Please Enter a valid email address";
    }

    // validator for password
    if (formData.password.length < 8) {
      console.log("Password must b 8 characters long");
      newErrors.password = "Password must b 8 characters long";
    }

    // validator for confirm password
    if (formData.confirmpassword !== formData.password) {
      console.log("Confirm password should be same as Password");
      newErrors.confirmpassword = "Confirm password should be same as Password";
    }

    // validator for age
    var rega = /^\S[0-9]{0,3}$/;
    if (!rega.test(formData.age)) {
      console.log("Please Enter valid age");
      newErrors.age = "Please Enter valid age";
    }

    // if no error will occur, sthis success message will be shown
    if (Object.keys(newErrors).length === 0) {
      console.log("Signup successful!");
      setSuccessMsg("Signup successful!");
    }

    // here we will set this function and pass errors to it
    setErrors(newErrors);
  };

  return (
    <div>
      <div className="container">
        <h1>Signup Form</h1>
        <form onSubmit={handleSubmit}>
          {/* input field for name */}
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
          </div>

          {/* input field for email */}
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

          {/* input field for password */}
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

          {/* input field for confirmpassword */}
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
          </div>

          {/* input field for age */}
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

          {/* submit button */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {/* if all the inputs are valid, show success message */}
        {successMsg && <div className="success">{successMsg}</div>}
      </div>
    </div>
  );
}
