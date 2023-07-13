import { lightTheme } from "@/themes";
import { ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";

const Myapp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default Myapp;
