
import ProcessPage from '@/components/ProcessPage'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Solar Installation Process | Step-by-Step Execution",
  description: "Learn how SunStark Solar executes residential, commercial, and industrial solar projects — from site inspection and design to installation, subsidy support, and 3-year AMC coverage across Tamil Nadu and Pondicherry.",
  keywords: [
    "solar installation process",
    "solar project steps",
    "solar installation Tamil Nadu",
    "on-grid solar subsidy process",
    "solar system installation steps",
    "solar inspection and commissioning",
    "solar AMC services",
  ],
  alternates: {
    canonical: "https://www.sunstarksolar.com/process",
  },
  openGraph: {
    title: "SunStark Solar Installation Process | Professional & Transparent",
    description:
      "From consultation to commissioning, explore our structured solar installation process with subsidy support and quality assurance.",
    url: "https://www.sunstarksolar.com/process",
    siteName: "SunStark Solar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.sunstarksolar.com/og/process-og.jpg",
        width: 1200,
        height: 630,
        alt: "SunStark Solar Installation Process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SunStark Solar | Step-by-Step Solar Installation Process",
    description:
      "Understand how SunStark Solar delivers 600+ successful installations across Tamil Nadu and Pondicherry.",
    images: ["https://www.sunstarksolar.com/og/process-og.jpg"],
  },
};


export default function Process() {
  return (
    <ProcessPage/>
  )
}
