import { useContext, useEffect } from "react";
import { ChatContext } from "../provider/chatProvider.js";

import HomeChat from "./homeChat";

function Home() {
  const { isWalletConnected, connectWallet } = useContext(ChatContext);

  // useEffect(() => {
  //   if (!isWalletConnected) connectWallet();
  // }, []);

  return (
    <div className="bg-gray-200">
      <HomeChat />
    </div>
  );
}

export default Home;
