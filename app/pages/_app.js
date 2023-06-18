import { ChatProvider } from "../provider/chatProvider";
import { I18nextProvider } from "react-i18next";
import RouteGuard from "../guards/RoutesGuard.js";

import "../public/style/globals.scss";
import i18n from "../i18n";

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ChatProvider>
        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>
      </ChatProvider>
    </I18nextProvider>
  );
}

export default MyApp;
