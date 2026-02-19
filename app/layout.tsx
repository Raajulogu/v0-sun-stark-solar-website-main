import React from "react";
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { WhatsAppButton } from '@/components/whatsapp-button';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sunstarksolar.com"),

  applicationName: "SunStark Solar",
  title: {
    default: "SunStark Solar | Solar Energy Solutions in Tamil Nadu & Pondicherry",
    template: "%s | SunStark Solar",
  },

  description:
    "SunStark Solar provides premium residential, commercial, and industrial solar energy solutions across Tamil Nadu and Pondicherry. 600+ projects completed with government subsidy support for on-grid systems.",

  keywords: [
    "SunStark Solar",
    "solar company Tamil Nadu",
    "solar installation Pondicherry",
    "residential solar Tamil Nadu",
    "on-grid solar subsidy",
    "rooftop solar installation",
    "solar panel installation",
    "solar energy solutions India",
  ],

  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },

  openGraph: {
    siteName: "SunStark Solar",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },

  category: "Renewable Energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
