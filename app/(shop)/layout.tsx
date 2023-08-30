"use client";

import Navbar from "@/components/ui/Navbar";
import SideMenu from "@/components/ui/Sidemenu";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <SideMenu />

      <main
        style={{
          margin: "80px auto",
          maxWidth: 1440,
          padding: "0px 30px",
        }}
      >
        {children}
      </main>

      <footer>{/* Footer */}</footer>
    </div>
  );
}
