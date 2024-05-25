import type { Metadata } from "next";
import "@/globals.scss";
import React from "react";

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
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
