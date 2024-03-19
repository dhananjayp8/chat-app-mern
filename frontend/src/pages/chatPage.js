import React from 'react'
import {useState,useEffect } from 'react';
import axios from 'axios';
import { ChatState } from '../context/ChatProvider';
import { Box } from '@chakra-ui/react';
import SideDrawer from '../components/miscallaneous/SideDrawer';
const ChatPage = () => {
const {user}=ChatState();

  return (
    <div style={{width:"100%"}}>
      {
       user && <SideDrawer/> 
      }
      <Box>
        {/* {user && <MyChats/>} */}
        {/* {user && <ChatBox/>} */}
      </Box>
    </div>
  )
}

export default ChatPage;