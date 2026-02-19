
import { Metadata } from 'next'
import AboutPage from '@/components/AboutPage'

export const metadata: Metadata = {
  title: 'About Lumiwaves Automation | India’s Trusted Smart Home & Solar Solutions Company',
  description:
    'Discover Lumiwaves Automation – a leading Indian smart home automation and solar solutions company. Founded by Guna, we design future-ready homes with intelligent automation, clean energy, and premium smart living solutions across India.',

  applicationName: 'Lumiwaves Automation',
  generator: 'Lumiwaves Automation Platform',
  referrer: 'origin-when-cross-origin',
  creator: 'Lumiwaves Automation',
  publisher: 'Lumiwaves Automation',

  keywords: [
    'Lumiwaves Automation',
    'about lumiwaves automation',
    'home automation company in India',
    'smart home solutions India',
    'solar installation company India',
    'home automation services',
    'smart living India',
    'energy efficient homes India',
    'smart lighting systems',
    'home automation for villas',
    'automation solutions India',
    'best home automation company India',
    'future smart homes',
    'solar energy solutions India',
  ],

  metadataBase: new URL('https://www.lumiwaves.in'),

  alternates: {
    canonical: 'https://www.lumiwaves.in/about',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/logo.png', media: '(prefers-color-scheme: light)' },
      { url: '/logo.png', media: '(prefers-color-scheme: dark)' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo.png',
    shortcut: '/logo.png',
  },

  openGraph: {
    title: 'About Lumiwaves Automation | Smart Homes & Solar Solutions for India',
    description:
      'Lumiwaves Automation is redefining smart living in India with premium home automation and solar energy solutions. Learn our story, vision, and mission to build future-ready homes.',
    url: 'https://www.lumiwaves.in/about',
    siteName: 'Lumiwaves Automation',
    images: [
      {
        url: 'https://www.lumiwaves.in/og/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumiwaves Automation – Smart Home & Solar Solutions in India',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About Lumiwaves Automation | Smart Living for India',
    description: 'Discover Lumiwaves Automation – building future-ready smart homes and solar-powered living for India.',
    images: ['https://www.lumiwaves.in/og/about-og.jpg'],
    creator: '@lumiwaves',
  },

  category: 'Technology',
}

export default function About() {
  return (
   <AboutPage/>
  )
}
