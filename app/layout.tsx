"use client";

import { lightTheme } from "@/themes";
import { ThemeProvider } from "@emotion/react";

import "@/styles/globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <ThemeProvider theme={lightTheme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
