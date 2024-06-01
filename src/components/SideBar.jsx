import React, { useState } from "react";
import "./myStyle.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ConversationItem from "./ConversationItem";

const SideBar = () => {
    const [conversation,setConversation]=useState([
        {
            name:"name1",
            lastMsg:"How are you",
            timeStamp:"today"
        },
        {
            name:"Ganesh",
            lastMsg:"How are you",
            timeStamp:"today"
        },
        {
            name:"Tanu",
            lastMsg:"How are you",
            timeStamp:"today"
        },
        {
            name:"Ramesh",
            lastMsg:"How are you",
            timeStamp:"today"
        },
        {
          name:"name1",
          lastMsg:"How are you",
          timeStamp:"today"
      },
      {
          name:"Ganesh",
          lastMsg:"How are you",
          timeStamp:"today"
      },
      {
          name:"Tanu",
          lastMsg:"How are you",
          timeStamp:"today"
      },
      {
          name:"Ramesh",
          lastMsg:"How are you",
          timeStamp:"today"
      }
    ])
  return (
    <div className="sidebar">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input className="search-box" placeholder="search" type="text" />
      </div>
      <div className="sb-conversationList">
        {conversation.map(user=>{
          return <ConversationItem user={user} key={user.name}/>
        })}
      </div>
    </div>
  );
};

export default SideBar;
