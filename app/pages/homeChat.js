import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../components/Sidebar";
import RouteGuard from "../guards/RoutesGuard";
import Chat from "../components/Chat";

import { ChatContext } from "../provider/chatProvider.js";

function HomeChat() {
  const { searchUser } = useContext(ChatContext);

  return (
    <RouteGuard>
      <div className="home">
        <div className="container">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </RouteGuard>
  );
}

export default HomeChat;
