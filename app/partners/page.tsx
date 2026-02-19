
import PartnersPage from '@/components/PartnersPage'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Trusted Partners | Solar Technology & Equipment Providers",
  description: "SunStark Solar partners with leading solar panel manufacturers and technology providers to deliver high-performance, reliable solar energy systems across Tamil Nadu and Pondicherry.",
  keywords: [
    "solar partners Tamil Nadu",
    "solar panel suppliers India",
    "solar manufacturers",
    "trusted solar brands",
    "solar equipment providers",
    "solar inverter brands",
    "renewable energy partners",
  ],
  alternates: {
    canonical: "https://www.sunstarksolar.com/partners",
  },
  openGraph: {
    title: "SunStark Solar Partners | Trusted Solar Brands & Technology",
    description:
      "We collaborate with top solar manufacturers and technology providers to ensure quality, efficiency, and long-term performance for every installation.",
    url: "https://www.sunstarksolar.com/partners",
    siteName: "SunStark Solar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.sunstarksolar.com/og/partners-og.jpg",
        width: 1200,
        height: 630,
        alt: "SunStark Solar – Trusted Solar Technology Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SunStark Solar | Trusted Solar Partners",
    description:
      "Discover the trusted brands and manufacturers behind SunStark Solar’s reliable solar installations.",
    images: ["https://www.sunstarksolar.com/og/partners-og.jpg"],
  },
};


export default function Partners() {
  return (
    <PartnersPage/>
  )
}
