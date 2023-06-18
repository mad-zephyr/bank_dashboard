import AppContextProvider from "@/common/store/app.context";
import { CardsContextProvider } from "@/common/store/wallet.context";
import Layout from "@/layout/layout";
import "@/styles/globals.sass";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <CardsContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CardsContextProvider>
    </AppContextProvider>
  );
}
