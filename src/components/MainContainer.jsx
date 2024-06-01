import React from 'react'
import "./myStyle.css"
import SideBar from './SideBar';
import ChatContainer from './ChatContainer';
import Welcome from './Welcome';
import NewGroup from './NewGroup';


const MainContainer = () => {
  return (
    <div className='main-container'>
      <SideBar/>
      {/* <NewGroup/> */}
      {/* <Welcome/> */}
      <ChatContainer/>
    </div>
  )
}

export default MainContainer;