import { useState, createContext } from "react";
import User from "../models/User";
import { ethers } from "ethers";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(true);
  const [walletError, setwalletError] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  let currentUser = new User();

  const registerUser = async (event) => {
    console.log("registerUser", event);
    setIsUserLoggedIn(true);
    console.log(isUserLoggedIn);
  };

  const loginUser = async (event) => {
    console.log("loginUser");
    setIsUserLoggedIn(true);
    console.log(isUserLoggedIn);
  };

  const logoutUser = async (event) => {
    console.log("logoutUser", event);
    setIsUserLoggedIn(false);
    console.log(isUserLoggedIn);
  };

  const searchUser = async (event) => {
    console.log("searchUser", event);
  };

  const connectWallet = async (event) => {
    console.log("connectWallet", event);
  };

  return (
    <ChatContext.Provider
      value={{
        isUserLoggedIn,
        isWalletConnected,
        walletError,
        currentUser,
        registerUser,
        loginUser,
        logoutUser,
        searchUser,
        connectWallet,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
