import React from "react";
import "./myStyle.css";

const ConversationItem = ({user}) => {
  return (
    <div className="conversationItem-container">
      <div className="con-user">
        <p className="con-icon">{user.name.charAt(0).toUpperCase()}</p>
        <div className="con-title">
          <p className="con-name">{user.name}</p>
          <p className="con-lastmsg">{user.lastMsg}</p>
        </div>
      </div>

      <p className="con-timestamp">{user.timeStamp}</p>
    </div>
  );
};

export default ConversationItem;
