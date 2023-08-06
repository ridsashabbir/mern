import React from "react";

export default function Signup() {
  return (
    <div>
      <div className="container">
        <h1>Signup Form</h1>
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" name="fullName" />
          </div>
          <div className="mb-3">
            <label className="from-label">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" name="confirmPassword" />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input type="text" name="age" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
