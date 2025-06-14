import { CountProvider } from "@/context/CountContext";
import "@/styles/globals.css";
import Layout from "@/components/layouts/Layout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  );
}
