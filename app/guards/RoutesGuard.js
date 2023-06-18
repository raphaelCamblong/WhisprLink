import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { ChatContext } from "../provider/chatProvider.js";

function RouteGuard({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const { isUserLoggedIn, isWalletConnected } = useContext(ChatContext);

  useEffect(() => {
    authCheck(router.asPath);
    router.events.on("routeChangeComplete", authCheck);

    return () => {
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [isUserLoggedIn, isWalletConnected]);

  function authCheck(url) {
    const publicPaths = ["/login", "/register", "/connectWallet"];
    const path = url.split("?")[0];

    if (publicPaths.includes(path) || (isWalletConnected && isUserLoggedIn)) {
      setAuthorized(true);
      return;
    }

    setAuthorized(false);
    if (!isWalletConnected) {
      router.push("/connectWallet");
      return;
    }
    if (!isUserLoggedIn) {
      router.push("/login");
      return;
    }
  }

  return authorized && children;
}

export default RouteGuard;
