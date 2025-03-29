import "@/utils/fontAwesome"; // アイコンをグローバル登録
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
