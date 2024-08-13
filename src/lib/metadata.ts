import { Metadata, Viewport } from 'next';

export const siteViewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};
export const siteMetadata: Metadata = {
  title: 'LUNA',
  description: 'LUNA is the embodiment of tenderness and love.',
  keywords: ['LUNA', 'Coin', 'meme coin', 'web-3', 'eth20', 'etherscan'],
  openGraph: {
    title: '',
    description: 'LUNA is the embodiment of tenderness and love.',
    images: ['https://res.cloudinary.com/dwgk0dtrp/image/upload/v1723234350/LUNA/dx3wukexkaa3rsng9bdp.png'],

    type: 'website',
  },
  twitter: {
    title: '',
    description: 'LUNA is the embodiment of tenderness and love.',
    images: ['https://res.cloudinary.com/dwgk0dtrp/image/upload/v1723234350/LUNA/dx3wukexkaa3rsng9bdp.png'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.lunameme.com/',
  },
  icons: {
    icon: ['/favicon.ico'],
    shortcut: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
  },
};
