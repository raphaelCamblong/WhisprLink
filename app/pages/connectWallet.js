import { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChatContext } from "../provider/chatProvider.js";
import { useRouter } from "next/router";

const ConnectWallet = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { connectWallet, isWalletConnected } = useContext(ChatContext);
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (isWalletConnected) router.push("/login");
  }, [isWalletConnected]);

  const handleSubmit = async (e) => {
    await connectWallet();
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">{t("app.name")}</span>
        <span className="title">{t("connectWallet.title")}</span>
        <form onSubmit={handleSubmit}>
          <button>{t("connectWallet.boutton")}</button>
          {err && <span>{t("app.SomethingWentWrong")}</span>}
        </form>
      </div>
    </div>
  );
};

export default ConnectWallet;
