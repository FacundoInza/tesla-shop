import { NextScript } from "next/document";

import { Metadata } from "next";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "300", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Page Title",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
