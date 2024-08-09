import { Noto_Sans } from 'next/font/google';
import '@/app/styles/globals.css';
// import Footer from '@/app/components/layout/Footer';
import { siteMetadata, siteViewport } from '@/lib/metadata';
// import { PortalProvider } from '@/app/context/PortalContext'
// import { GoogleTagManager from '@next/third-parties/google'; if you need npm i @next/third-parties
// import { GoogleAnalytics } from '@next/third-parties/google'; if you need npm i @next/third-parties

const noto = Noto_Sans({ subsets: ['latin'] });

export const viewport = siteViewport;

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <GoogleTagManager gtmId="youID" />
        <GoogleAnalytics gaId="youID" /> */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={noto.className}>
        <main>{children}</main>
        <div id="portal-root" />
        {/* if need PopUp
                 <PortalProvider>

        <Header/>
        <main>

        {children}
        </main>
      <Footer/>
      <div id="portal-root" />
         </PortalProvider>
          */}
      </body>
    </html>
  );
}
