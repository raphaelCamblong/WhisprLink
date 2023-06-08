import { useContext, useEffect } from "react";
import { ChatContext } from "../provider/chatProvider.js";
import RouteGuard from "../guards/RoutesGuard.js";

import HomeChat from "./homeChat";

function Home() {
  const { isWalletConnected, connectWallet } = useContext(ChatContext);

  useEffect(() => {
    if (!isWalletConnected) connectWallet();
  }, []);

  return (
    <RouteGuard>
      <div className="bg-gray-200">
        <HomeChat />
      </div>
    </RouteGuard>
  );
}

export default Home;
