import React, { useContext } from "react";
import { ChatContext } from "../../provider/chatProvider.js";

const Navbar = () => {
  const { currentUser } = useContext(ChatContext);

  return (
    <div className="navbar">
      <span className="logo">Whispr Link</span>
      <div className="user">
        <img src={currentUser.name} alt="" />
        <span>{currentUser.name}</span>
        <button onClick={() => console.log("logout")}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
