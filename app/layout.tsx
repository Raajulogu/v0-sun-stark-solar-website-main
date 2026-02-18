import React from "react";
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { WhatsAppButton } from '@/components/whatsapp-button';
import './globals.css';

export const metadata: Metadata = {
  title: 'SunStark Solar | Solar Energy Solutions in Tamil Nadu & Pondicherry',
  description: 'SunStark Solar - Premium solar energy solutions for residential, commercial, and industrial properties. Government subsidy support for on-grid solar systems. 600+ projects completed. Installation, maintenance, and support across Tamil Nadu and Pondicherry.',
  keywords: 'solar energy, solar panels, residential solar, commercial solar, solar installation, solar subsidy Tamil Nadu, on-grid solar, rooftop solar',
  openGraph: {
    title: 'SunStark Solar | Premium Solar Energy Solutions',
    description: 'Transform your energy with professional solar solutions. Government subsidies available. 600+ successful installations.',
    type: 'website',
    locale: 'en_IN',
  },
  icons: {
    icon: [
      {
        url: '/app-icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/app-icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/app-icon.png',
        type: 'image/png',
      },
    ],
    apple: '/app-icon.png',
  },
}

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
