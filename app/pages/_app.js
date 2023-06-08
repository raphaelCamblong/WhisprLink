import { ChatProvider } from "../provider/chatProvider";
import { I18nextProvider } from "react-i18next";

import "../style/globals.scss";
import i18n from "../i18n";

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ChatProvider>
        <Component {...pageProps} />
      </ChatProvider>
    </I18nextProvider>
  );
}

export default MyApp;