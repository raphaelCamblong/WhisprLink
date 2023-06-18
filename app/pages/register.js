import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ChatContext } from "../provider/chatProvider.js";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { registerUser } = useContext(ChatContext);

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const addAvatarImage = async (e) => {
    console.log("addAvatarImage");
  };

  const handleSubmit = async (e) => {
    setLoading(true);

    await registerUser();
    router.push({
      pathname: "/homeChat",
    });
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">{t("app.name")}</span>
        <span className="title">{t("register.title")}</span>
        <form onSubmit={handleSubmit}>
          <input
            // required
            type="text"
            placeholder={t("register.displayNamePlaceholder")}
          />
          <input
            // required
            type="email"
            placeholder={t("register.emailPlaceholder")}
          />
          <input
            // required
            type="password"
            placeholder={t("register.passwordPlaceholder")}
          />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={addAvatarImage} alt="" />
            <span>{t("register.addAvatar")}</span>
          </label>
          <button disabled={loading}>{t("register.signUp")}</button>
          {loading && t("register.uploadingImage")}
        </form>
        {err && <span>{t("app.SomethingWentWrong")}</span>}
        <p className="cursor-pointer" onClick={() => router.push("/login")}>
          {t("register.haveAccount")}
        </p>
      </div>
    </div>
  );
};

export default Register;
