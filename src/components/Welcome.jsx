import React from "react";
import msgImg from "../../src/assets/images/group.png";

const Welcome = () => {
  return (
    <div className="welcome-area">
      <img src={msgImg} alt="Welcome image" />

      <p>Welcome to new world..!!</p>
    </div>
  );
};

export default Welcome;
