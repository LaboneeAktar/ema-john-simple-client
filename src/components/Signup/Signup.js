import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Please SignUp</h1>
      <form>
        <div className="form-control">
          <label htmlFor="name">User Name</label>
          <input
            type="name"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter Email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            placeholder="Enter Password"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="SignUp" />
      </form>
      <p className="new-account">
        Already Have an Account? <Link to="/login">Please Login.</Link>
      </p>
    </div>
  );
};

export default Signup;
