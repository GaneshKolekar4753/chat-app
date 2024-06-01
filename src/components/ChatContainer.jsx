import React from "react";
import "./myStyle.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MsgOwner from "./MsgOwner";
import MsgOther from "./MsgOther";

const ChatContainer = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="con-user">
          <p className="con-icon">T</p>
          <div className="con-title">
            <p className="con-name">Team</p>
            <p className="con-seen">today</p>
          </div>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>

      <div className="chat-msg-container">
        <MsgOwner/>
        <MsgOther/>
        <MsgOwner/>
        <MsgOther/>
        <MsgOwner/>
        <MsgOther/>
        <MsgOwner/>
        <MsgOther/>
      </div>
      <div className="input-msg-area">
        <input type="text" placeholder="Type a message" className="search-box"/>
        <IconButton>
          <SendIcon/>
        </IconButton>
      </div>
    </div>
  );
};

export default ChatContainer;
