import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

import { ChatContext } from "../provider/chatProvider.js";

function HomeChat() {
  const { searchUser } = useContext(ChatContext);

  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default HomeChat;
