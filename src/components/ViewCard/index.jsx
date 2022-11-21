import React from "react";
import "./Cardview.css";
import { useLocation, useNavigate } from "react-router-dom";

function CardView() {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  return (
    <div className="Card-view">
      <img src={`https://robohash.org/${state[0]}`} alt="robot.png" />
      <p>Name:{state[1]}</p>
      <p>Email:{state[2]}</p>
      <p>Body:{state[3]}</p>
      <br />
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default CardView;
