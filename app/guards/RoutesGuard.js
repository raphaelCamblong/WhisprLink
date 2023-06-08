import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { ChatContext } from "../provider/chatProvider.js";

function RouteGuard({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const { isUserLoggedIn, isWalletConnected } = useContext(ChatContext);

  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);
    router.events.on("routeChangeComplete", authCheck);

    console.log(isUserLoggedIn, isWalletConnected);
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [isUserLoggedIn, isWalletConnected]);

  function authCheck(url) {
    const publicPaths = ["/login", "/register"];
    const path = url.split("?")[0];

    if (
      (!isUserLoggedIn || !isWalletConnected) &&
      !publicPaths.includes(path)
    ) {
      setAuthorized(false);
      router.push({
        pathname: "/login",
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  }

  return authorized && children;
}

export default RouteGuard;
