
import { Metadata } from 'next'
import AboutPage from '@/components/AboutPage'

export const metadata = {
  title: "About SunStark Solar – Trusted Solar Experts",
  description: "Learn about SunStark Solar – a trusted solar installation company serving Tamil Nadu and Pondicherry with over 600+ successful projects.",
  alternates: {
    canonical: "https://www.sunstarksolar.com/about",
  },
  openGraph: {
    title: "About SunStark Solar | Solar Experts in Tamil Nadu",
    description: "Discover our mission, vision, and expertise in delivering sustainable solar energy solutions.",
    url: "https://www.sunstarksolar.com/about",
  },
};


export default function About() {
  return (
   <AboutPage/>
  )
}
