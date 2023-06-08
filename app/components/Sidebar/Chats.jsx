import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChatContext } from "../../provider/chatProvider.js";

const Chats = () => {
  const { t } = useTranslation();
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(ChatContext);

  useEffect(() => {
    console.log("getChats");
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    console.log("CHANGE_USER");
  };

  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
