import type { Metadata } from "next";
import "@/globals.scss";
import React from "react";
import { Navbar } from "@/components/navbar/navbar.component";
import {Footer} from "@/components/footer/footer.component";

export const metadata: Metadata = {
  title: "Teste",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
