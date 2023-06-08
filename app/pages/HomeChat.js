import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../components/Sidebar";

import { ChatContext } from "../provider/chatProvider.js";

function HomeChat() {
  const { searchUser } = useContext(ChatContext);

  return (
    <div className="home">
      <div className="container">
        <Sidebar />
      </div>
    </div>
  );
}

export default HomeChat;
