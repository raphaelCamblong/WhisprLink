import { useContext, useEffect } from "react";
import { ChatContext } from "../provider/chatProvider.js";
import { useRouter } from "next/router";

import HomeChat from "./HomeChat";

function Home() {
  const router = useRouter();
  const { isUserLoggedIn, isWalletError } = useContext(ChatContext);

  useEffect(() => {
    // connectWallet();
  }, []);

  useEffect(() => {
    if (isWalletError || !isUserLoggedIn) {
      router.push("/login");
    }
  }, [isWalletError, isUserLoggedIn, router]);

  if (isWalletError || !isUserLoggedIn) {
    return null; // Render nothing while redirecting
  }

  return (
    <div className="bg-gray-200">
      <HomeChat />
    </div>
  );
}

export default Home;
