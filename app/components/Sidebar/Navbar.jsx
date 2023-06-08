import { useContext } from "react";
import { ChatContext } from "../../provider/chatProvider.js";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const { currentUser, logoutUser } = useContext(ChatContext);

  return (
    <div className="navbar">
      <span className="logo">{t("app.name")}</span>
      <div className="user">
        <img src={currentUser.pictureURL} alt="" />
        <span>{currentUser.name}</span>
        <button onClick={logoutUser}>{t("app.logout")}</button>
      </div>
    </div>
  );
};

export default Navbar;
