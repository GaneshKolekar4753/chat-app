import React from "react";

const MsgOther = () => {
  const user = {
    sender: "Raman",
    message: "This is first suhd sdh dksd sdijsd sdhsdn akdjaiu msg",
    time: "12:00am",
  };
  return (
    <div className="msg-other">
      <div className="con-user">
        <p className="con-icon">{user.sender.charAt(0).toUpperCase()}</p>
        <div className="con-title">
          <p className="con-name">{user.sender}</p>
          <p className="user-message">{user.message}</p>
        </div>
      </div>

      <p className="user-time">{user.time}</p>
    </div>
  );
};

export default MsgOther;
