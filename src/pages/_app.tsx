import AppContextProvider from "@/common/store/app.context";
import Layout from "@/layout/layout";
import "@/styles/globals.sass";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}
