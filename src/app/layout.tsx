import '@/globals.scss';

import type { Metadata } from 'next';
import React from 'react';

import { Footer } from '@/components/footer/footer.component';
import { Navbar } from '@/components/navbar/navbar.component';

export const metadata: Metadata = {
  title: 'Teste',
  description: ''
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'pt-br'}>
      <Navbar />
      {children}
      <Footer />
    </html>
  );
}
