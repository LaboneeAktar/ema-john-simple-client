import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./Signup.css";

const Signup = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 6) {
      setError("Passowrd should be 6 Character or More.");
      return;
    }

    if (password !== confirm) {
      setError("Your Password didn't Matched. Please Try Again");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));

    console.log(name, email, password, confirm);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Please SignUp</h1>
      <form onSubmit={handleSubmit}>
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
          <p style={{ color: "red" }}>{error}</p>
        </div>
        <input className="btn-submit" type="submit" value="SignUp" />
      </form>
      <p className="new-account">
        Already Have an Account? <Link to="/login">Login.</Link>
      </p>
    </div>
  );
};

export default Signup;
