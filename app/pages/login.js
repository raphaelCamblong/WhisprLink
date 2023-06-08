import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Login = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    console.log("Submit");
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">{t("app.name")}</span>
        <span className="title">{t("login.title")}</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder={t("login.emailPlaceholder")} />
          <input type="password" placeholder={t("login.passwordPlaceholder")} />
          <button>{t("login.SignIn")}</button>
          {err && <span>{t("app.SomethingWentWrong")}</span>}
        </form>
        <p onClick={() => router.push("/login")}>{t("login.noAccount")}</p>
      </div>
    </div>
  );
};

export default Login;
