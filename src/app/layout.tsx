import '@/globals.scss';

import type { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';

import { Footer } from '@/components/footer/footer.component';
import { Navbar } from '@/components/navbar/navbar.component';
import { WhatsappButton } from '@/components/whatsapp-button/whatsapp-button.component';

export const metadata: Metadata = {
  title: 'Dr. Jefferson André Bauer',
  description:
    'Otorrinolaringologista com mais de 5 anos de experiência especializado em Otologia Cirúrgica, Otologia Clínica, Otoneurologia.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'pt-br'}>
      <body>
        <Script strategy={'beforeInteractive'} id={'google-tag'}>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KHLM7NS3');
        `}
        </Script>
        <noscript>
          <iframe
            src={'https://www.googletagmanager.com/ns.html?id=GTM-KHLM7NS3'}
            height={'0'}
            width={'0'}
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        <WhatsappButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
