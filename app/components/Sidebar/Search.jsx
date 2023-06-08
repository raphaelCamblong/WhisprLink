import React, { useContext, useState } from "react";
import { ChatContext } from "../../provider/chatProvider.js";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(ChatContext);

  const handleSearch = async () => {};

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    // const combinedId =
    //   currentUser.uid > user.uid
    //     ? currentUser.uid + user.uid
    //     : user.uid + currentUser.uid;
    // try {
    //   const res = await getDoc(doc(db, "chats", combinedId));

    //   if (!res.exists()) {
    //     //create a chat in chats collection
    //     await setDoc(doc(db, "chats", combinedId), { messages: [] });

    //     //create user chats
    //     await updateDoc(doc(db, "userChats", currentUser.uid), {
    //       [combinedId + ".userInfo"]: {
    //         uid: user.uid,
    //         displayName: user.displayName,
    //         photoURL: user.photoURL,
    //       },
    //       [combinedId + ".date"]: serverTimestamp(),
    //     });

    //     await updateDoc(doc(db, "userChats", user.uid), {
    //       [combinedId + ".userInfo"]: {
    //         uid: currentUser.uid,
    //         displayName: currentUser.displayName,
    //         photoURL: currentUser.photoURL,
    //       },
    //       [combinedId + ".date"]: serverTimestamp(),
    //     });
    //   }
    // } catch (err) {}

    setUser(null);
    setUsername("");
  };
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && (
        <span>
          <FormattedMessage id="search.userNotFound" />
        </span>
      )}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
