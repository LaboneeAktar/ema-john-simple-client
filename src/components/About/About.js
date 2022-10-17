import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h3>Secret about us...</h3>
      <h2>User Email: {user?.email}</h2>
    </div>
  );
};

export default About;
