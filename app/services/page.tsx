
import ServicesPage from '@/components/ServicePage'

export const metadata = {
  title: "Solar Installation Services – Residential, Commercial & Industrial",
  description: "Professional solar installation services including on-grid (subsidy eligible up to 3kW), off-grid, and hybrid systems. Serving Tamil Nadu & Pondicherry.",
  keywords: [
    "solar installation Tamil Nadu",
    "on-grid solar subsidy",
    "off-grid solar",
    "hybrid solar system",
    "solar AMC services",
  ],
  alternates: {
    canonical: "https://www.sunstarksolar.com/services",
  },
  openGraph: {
    title: "Solar Installation Services – Residential, Commercial & Industrial",
    description: "Professional solar installation services including on-grid (subsidy eligible up to 3kW), off-grid, and hybrid systems. Serving Tamil Nadu & Pondicherry.",
    url: "https://www.sunstarksolar.com/services",
  },
};


export default function Services() {
  return (
    <ServicesPage/>
  )
}
