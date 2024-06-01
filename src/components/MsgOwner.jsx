import React from 'react'

const MsgOwner = () => {
    const user={sender:"Raman",message:"This is first gysg djshgu sgusy8 shiuh shdiuhd jhgidsuayu hgaiuh jyggsa h hvasu jas djyg sagas dauyydga dagydassiudas asudas dasduasdb asdiuasd asdiuasd  msg",time:"12:00am"};
  return (
    <div className="msg-owner">
      <div className="con-user">
        <p className="con-icon">{user.sender.charAt(0).toUpperCase()}</p>
        <div className="con-title">
          <p className="con-name">{user.sender}</p>
          <p className="user-message">{user.message}</p>
        </div>
      </div>

      <p className="user-time">{user.time}</p>
    </div>
  )
}

export default MsgOwner