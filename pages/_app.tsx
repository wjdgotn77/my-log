import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
// 글로벌 css 여기

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
