import { useContext } from "react";
import { ChatContext } from "../../provider/chatProvider.js";

import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  const { currentUser, logoutUser } = useContext(ChatContext);

  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
