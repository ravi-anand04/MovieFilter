import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // setTimeout(() => {
    navigate("/movies");
    // }, 5000);
  }, []);

  return (
    <div>
      <h1>HOME</h1>
      <b>Redirecting in 5 sec ...</b>
    </div>
  );
};

export default Home;
