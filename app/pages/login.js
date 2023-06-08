import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ChatContext } from "../provider/chatProvider.js";
import { useRouter } from "next/router";
import RouteGuard from "../guards/RoutesGuard.js";

const Login = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { loginUser } = useContext(ChatContext);
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    await loginUser();
    router.push({
      pathname: "/homeChat",
    });
  };

  return (
    <RouteGuard>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">{t("app.name")}</span>
          <span className="title">{t("login.title")}</span>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder={t("login.emailPlaceholder")}
            />
            <input
              required
              type="password"
              placeholder={t("login.passwordPlaceholder")}
            />
            <button>{t("login.SignIn")}</button>
            {err && <span>{t("app.SomethingWentWrong")}</span>}
          </form>
          <p onClick={() => router.push("/register")}>{t("login.noAccount")}</p>
        </div>
      </div>
    </RouteGuard>
  );
};

export default Login;
