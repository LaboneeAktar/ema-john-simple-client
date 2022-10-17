import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./Login.css";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Please Login</h1>
      <form onSubmit={handleSubmit}>
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
