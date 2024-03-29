import React from "react";
import '../css/Card.css'

const Card = ({name, email, id}) => {
  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow  bw2 shadow-5 green">
      <img alt = "robot" src={`https://robohash.org/${id}?200x200`}></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;