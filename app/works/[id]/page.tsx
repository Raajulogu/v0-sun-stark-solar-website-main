'use client'

import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, Zap, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

// Mock project data
const projectsData: Record<string, any> = {
  '1': {
    title: 'Residential Solar Installation - 10kW System',
    category: 'Residential',
    location: 'Pondicherry',
    capacity: '10 kW',
    savings: '₹45,000 annually',
    completion: 'March 2024',
    shortDesc: 'Modern villa equipped with premium solar panels and battery backup system',
    fullDesc: `This residential installation transformed a modern villa by providing complete energy independence. 
    The system was custom-designed to meet the household's peak demand while maximizing self-consumption.`,
    details: [
      '25 units of 400W monocrystalline panels',
      'Hybrid inverter with 5kW capacity',
      '10kWh lithium battery storage',
      'Real-time monitoring via mobile app',
      'Smart load management system',
      '25-year performance warranty'
    ],
    benefits: [
      'Reduced electricity bills by 85%',
      'Grid-independent during power cuts',
      'Increased property value',
      'Environmental impact: 15 tons CO2 saved annually',
      'Payback period: 4-5 years',
      'System lifespan: 25+ years'
    ],
    timeline: [
      { phase: 'Consultation & Design', duration: '1-2 weeks' },
      { phase: 'Approvals & Permits', duration: '2-4 weeks' },
      { phase: 'Equipment Procurement', duration: '1-2 weeks' },
      { phase: 'Installation & Testing', duration: '3-5 days' },
      { phase: 'Grid Connection', duration: '1 week' }
    ]
  },
  '2': {
    title: 'Commercial Complex - 50kW Solar System',
    category: 'Commercial',
    location: 'Vanur',
    capacity: '50 kW',
    savings: '₹2,50,000 annually',
    completion: 'January 2024',
    shortDesc: 'Large office building with comprehensive solar infrastructure',
    fullDesc: `Enterprise-grade solar installation designed for peak operational efficiency. 
    The system provides 60% of the building's annual energy needs.`,
    details: [
      '125 units of 400W commercial panels',
      'Three-phase 50kW inverter',
      'SCADA monitoring system',
      'Real-time production analytics',
      'Predictive maintenance alerts',
      'Industrial-grade mounting structure'
    ],
    benefits: [
      'Reduced operating costs by 60%',
      'Corporate sustainability goals met',
      'Tax benefits and depreciation',
      'Enhanced brand value',
      'Payback period: 5-6 years',
      'Long-term energy security'
    ],
    timeline: [
      { phase: 'Site Assessment', duration: '1 week' },
      { phase: 'Engineering & Design', duration: '2-3 weeks' },
      { phase: 'Regulatory Approvals', duration: '4-6 weeks' },
      { phase: 'Equipment Delivery', duration: '2 weeks' },
      { phase: 'Installation', duration: '10-15 days' },
      { phase: 'Testing & Commission', duration: '1 week' }
    ]
  },
  '3': {
    title: 'Industrial Rooftop - 100kW Installation',
    category: 'Industrial',
    location: 'Tamil Nadu',
    capacity: '100 kW',
    savings: '₹5,00,000 annually',
    completion: 'December 2023',
    shortDesc: 'Industrial facility with industrial-grade solar arrays',
    fullDesc: `Advanced industrial solar system designed for 24/7 monitoring and predictive maintenance. 
    Provides 70% of facility's annual energy consumption.`,
    details: [
      '250 units of 400W bifacial panels',
      'Industrial three-phase inverter',
      'Advanced monitoring with AI analytics',
      'Round-the-clock performance tracking',
      'Predictive maintenance system',
      'Heavy-duty structural mounting'
    ],
    benefits: [
      'Operational cost reduction: 65%',
      'Peak load shaving',
      'Energy cost predictability',
      'Carbon footprint reduction: 125 tons/year',
      'Payback period: 4-5 years',
      'System efficiency: 98%+'
    ],
    timeline: [
      { phase: 'Facility Analysis', duration: '2 weeks' },
      { phase: 'System Design', duration: '3-4 weeks' },
      { phase: 'Permits & Approvals', duration: '4-8 weeks' },
      { phase: 'Supply Chain', duration: '3-4 weeks' },
      { phase: 'Installation', duration: '15-20 days' },
      { phase: 'Commissioning', duration: '1-2 weeks' }
    ]
  },
  '4': {
    title: 'Villa Solar System - 8kW Rooftop',
    category: 'Residential',
    location: 'Pondicherry',
    capacity: '8 kW',
    savings: '₹35,000 annually',
    completion: 'February 2024',
    shortDesc: 'Luxury residential property with sleek solar installation',
    fullDesc: `Aesthetically designed solar installation for luxury villa combining performance with visual appeal.`,
    details: [
      '20 units of 400W bifacial panels',
      'String inverter 8kW capacity',
      'Microinverter options available',
      'Cloud-based monitoring',
      'Premium mounting hardware',
      'Aesthetic panel arrangement'
    ],
    benefits: [
      'Reduced bills by 80%',
      'Premium property addition',
      'Eco-friendly living',
      'Future-proof investment',
      'Payback: 5 years',
      'Maintenance-free operation'
    ],
    timeline: [
      { phase: 'Design Consultation', duration: '1 week' },
      { phase: 'System Design', duration: '1 week' },
      { phase: 'Approvals', duration: '2 weeks' },
      { phase: 'Equipment Arrival', duration: '1 week' },
      { phase: 'Installation', duration: '2-3 days' },
      { phase: 'Activation', duration: '3-5 days' }
    ]
  },
  '5': {
    title: 'School Campus Solar Project - 30kW',
    category: 'Commercial',
    location: 'Pattanur',
    capacity: '30 kW',
    savings: '₹1,50,000 annually',
    completion: 'November 2023',
    shortDesc: 'Educational institution with sustainable solar solution',
    fullDesc: `Community-focused solar installation supporting sustainable education and reduced operational costs.`,
    details: [
      '75 units of 400W educational-grade panels',
      '30kW three-phase inverter',
      'Educational monitoring dashboard',
      'Real-time data API for learning',
      'Expandable architecture',
      'Institutional mounting system'
    ],
    benefits: [
      'Operational budget reduction',
      'Educational value for students',
      'Sustainability commitment',
      'Long-term energy cost savings',
      'Community leadership example',
      'Government incentive eligibility'
    ],
    timeline: [
      { phase: 'Educational Alignment', duration: '2 weeks' },
      { phase: 'Campus Design', duration: '3 weeks' },
      { phase: 'Institutional Approvals', duration: '3-4 weeks' },
      { phase: 'Supply', duration: '2 weeks' },
      { phase: 'Installation', duration: '7-10 days' },
      { phase: 'Inauguration', duration: '1 week' }
    ]
  },
  '6': {
    title: 'Factory Complex - 75kW Solar Array',
    category: 'Industrial',
    location: 'Tamil Nadu',
    capacity: '75 kW',
    savings: '₹3,75,000 annually',
    completion: 'October 2023',
    shortDesc: 'Manufacturing facility with comprehensive renewable energy',
    fullDesc: `Advanced manufacturing facility installation with integrated energy management and production analytics.`,
    details: [
      '187 units of 400W panels',
      'Industrial hybrid inverter 75kW',
      'IoT energy management system',
      'Production data integration',
      'Scalable battery storage option',
      'Industrial-grade infrastructure'
    ],
    benefits: [
      'Manufacturing cost reduction',
      'Production efficiency boost',
      'Energy independence',
      'ESG reporting capability',
      'Competitive advantage',
      'Long-term cost savings'
    ],
    timeline: [
      { phase: 'Factory Audit', duration: '2-3 weeks' },
      { phase: 'Design & Engineering', duration: '4 weeks' },
      { phase: 'Permitting', duration: '4-6 weeks' },
      { phase: 'Procurement', duration: '3 weeks' },
      { phase: 'Installation', duration: '12-15 days' },
      { phase: 'Integration & Testing', duration: '1-2 weeks' }
    ]
  }
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData[params.id] || projectsData['1']

  return (
    <>
      <Header />
      <main>
        {/* Back Button */}
        <div className="border-b border-border bg-background sticky top-16 z-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/works" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-background to-card py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                    {project.category}
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{project.title}</h1>
                </div>
              </div>

              {/* Hero Image */}
              <div className="rounded-lg border border-border bg-gradient-to-br from-accent/20 to-background flex items-center justify-center aspect-video">
                <Zap className="h-32 w-32 text-accent/30" />
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="rounded-lg border border-border bg-card p-4 space-y-1">
                  <div className="text-xs text-muted-foreground">Capacity</div>
                  <div className="text-2xl font-bold text-accent">{project.capacity}</div>
                </div>
                <div className="rounded-lg border border-border bg-card p-4 space-y-1">
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="flex items-center gap-2 text-lg font-bold text-foreground">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-card p-4 space-y-1">
                  <div className="text-xs text-muted-foreground">Annual Savings</div>
                  <div className="flex items-center gap-2 text-lg font-bold text-accent">
                    <TrendingUp className="h-4 w-4" />
                    {project.savings}
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-card p-4 space-y-1">
                  <div className="text-xs text-muted-foreground">Completion</div>
                  <div className="flex items-center gap-2 text-lg font-bold text-foreground">
                    <Calendar className="h-4 w-4" />
                    {project.completion}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.fullDesc}</p>
            </div>
          </div>
        </section>

        {/* System Details & Benefits */}
        <section className="border-b border-border bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">System Specifications</h2>
                <ul className="space-y-3">
                  {project.details.map((detail: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Key Benefits</h2>
                <ul className="space-y-3">
                  {project.benefits.map((benefit: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <h2 className="text-2xl font-bold text-foreground">Project Timeline</h2>
              <div className="space-y-4">
                {project.timeline.map((item: any, i: number) => (
                  <div key={i} className="flex gap-6 pb-8 border-b border-border last:border-0">
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center font-bold text-accent">
                        {i + 1}
                      </div>
                      {i < project.timeline.length - 1 && (
                        <div className="w-1 h-12 bg-accent/20 mt-2" />
                      )}
                    </div>
                    <div className="py-1 space-y-1 flex-1">
                      <h3 className="font-semibold text-foreground">{item.phase}</h3>
                      <p className="text-sm text-muted-foreground">{item.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-border bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-accent/30 bg-gradient-to-r from-accent/5 to-background p-8 sm:p-12 text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Ready to Start Your Project?
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Contact our team today to discuss your solar energy needs and get a custom quote.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
