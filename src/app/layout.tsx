import { Baloo_2 } from 'next/font/google';
import '@/app/styles/globals.css';
import FloatingCircle from '@/app/components/layout/FloatingCircle';
import { siteMetadata, siteViewport } from '@/lib/metadata';
// import { PortalProvider } from '@/context/PortalContext'
// import { GoogleTagManager from '@next/third-parties/google'; if you need npm i @next/third-parties
// import { GoogleAnalytics } from '@next/third-parties/google'; if you need npm i @next/third-parties

const noto = Baloo_2({ subsets: ['latin'] });

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
        <FloatingCircle />
        {/* <div id="portal-root" /> */}
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
