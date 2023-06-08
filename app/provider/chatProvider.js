import { useState, createContext } from "react";
import User from "../models/User";
import { ethers } from "ethers";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [isWalletError, setIsWalletError] = useState(false);
  let currentUser = new User();

  const registerUser = async (event) => {
    console.log("registerUser", event);
  };

  const loginUser = async (event) => {
    console.log("loginUser", event);
    setIsUserLoggedIn(false);
  };

  const logoutUser = async (event) => {
    console.log("logoutUser", event);
    setIsUserLoggedIn(true);
  };

  const searchUser = async (event) => {
    console.log("logoutUser", event);
  };

  return (
    <ChatContext.Provider
      value={{
        isUserLoggedIn,
        isWalletError,
        registerUser,
        loginUser,
        logoutUser,
        searchUser,
        currentUser,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
