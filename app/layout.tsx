"use client";
import Navbar from "@/components/ui/Navbar";
import Sidemenu from "@/components/ui/Sidemenu";
import { lightTheme } from "@/themes";
import { ThemeProvider } from "@emotion/react";

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
        <body>
          <nav>
            <Navbar />
          </nav>

          <Sidemenu />

          <main
            style={{ margin: "80px auto", maxWidth: 1440, padding: "0px 30px" }}
          >
            {children}
          </main>

          <footer>{/* Footer */}</footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
