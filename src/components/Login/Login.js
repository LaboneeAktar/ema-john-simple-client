import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Please Login</h1>
      <form>
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
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p className="new-account">
        New to Ema John? <Link to="/signup">Create a New Account.</Link>
      </p>
    </div>
  );
};

export default Login;
