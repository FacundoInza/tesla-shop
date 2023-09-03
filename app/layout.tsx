"use client";

import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import { UIProvider } from "@/context";

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
      <body>
        <UIProvider>
          <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
        </UIProvider>
      </body>
    </html>
  );
}
