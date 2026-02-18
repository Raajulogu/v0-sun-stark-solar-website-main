'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Zap, Wrench, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const services = [
  {
    id: 'residential',
    title: 'Residential Solar Solutions',
    description: 'Transform your home with clean, affordable solar energy',
    benefits: [
      'Reduce electricity bills by up to 80%',
      'Increase home value significantly',
      'Environmental benefit for your family',
      'Low maintenance systems',
      'Government incentives and subsidies',
      ' 25-30 year system lifespan'
    ],
    specs: ['1kW to 15kW systems', 'On-roof or ground-mounted', 'Battery backup options', 'Smart monitoring included'],
    icon: 'home',
    residentialSubtypes: [
      {
        title: 'Ongrid Solar',
        description: 'Subsidy eligible up to 3kW (as per current Tamil Nadu policies)',
        subsidy: 'Eligible'
      },
      {
        title: 'Offgrid Solar',
        description: 'Standalone system with battery backup for energy independence',
        subsidy: 'Not applicable'
      },
      {
        title: 'Hybrid Solar',
        description: 'Combined grid and battery system for optimal flexibility',
        subsidy: 'Not applicable'
      }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Solar Systems',
    description: 'Reduce operational costs with enterprise-scale solar',
    benefits: [
      'Significant reduction in operational expenses',
      'Enhanced corporate sustainability image',
      'Tax incentives and depreciation benefits',
      'Energy independence for your business',
      'Scalable solutions for growth',
      'Expert project management'
    ],
    specs: ['10kW to 500kW systems', 'Rooftop or ground mount', 'Advanced monitoring systems', 'Customized financing options'],
    icon: 'building'
  },
  {
    id: 'industrial',
    title: 'Industrial Solar Solutions',
    description: 'Power heavy-duty operations with renewable energy',
    benefits: [
      'Dramatic reduction in energy costs',
      'Enhanced operational efficiency',
      'ESG compliance and reporting',
      'Protection against energy price fluctuations',
      'Heavy-duty system design',
      ' 24/7 professional support'
    ],
    specs: ['500kW+ systems', 'Industrial-grade equipment', 'Real-time monitoring', 'Predictive maintenance'],
    icon: 'factory'
  },
  {
    id: 'maintenance',
    title: 'System Maintenance & Support',
    description: 'Keep your solar system running at peak efficiency',
    benefits: [
      'Regular cleaning and inspections',
      'Performance optimization',
      'Component repairs and replacements',
      'Extended system lifespan',
      'Warranty support included',
      'Emergency 24/7 service'
    ],
    specs: ['Annual maintenance plans', 'Quarterly inspections', 'Software updates', 'Professional diagnostics'],
    icon: 'wrench'
  }
]

export default function Services() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative border-b border-border bg-background overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/services-hero.jpg"
              alt="Solar system diagnostics and maintenance"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
            <div className="space-y-4 sm:space-y-6 max-w-2xl">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">Our Services</h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Comprehensive solar solutions designed for residential, commercial, and industrial properties across South India. Expert installation, reliable support, and lasting results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {services.map((service, idx) => (
                <div key={service.id} id={service.id} className="scroll-mt-20 space-y-8">
                  {/* Residential Solar Subtypes */}
                  {service.id === 'residential' && service.residentialSubtypes && (
                    <div className="rounded-lg border border-accent/20 bg-accent/5 p-8 space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Residential Solar Solutions</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">Choose the perfect solar solution for your home:</p>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        {service.residentialSubtypes.map((subtype, i) => (
                          <div key={i} className="space-y-3">
                            <h4 className="font-semibold text-foreground text-lg">{subtype.title}</h4>
                            <p className="text-sm text-muted-foreground">{subtype.description}</p>
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${subtype.subsidy === 'Eligible' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                              {subtype.subsidy}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 3-Year Free AMC Offer */}
                  {service.id === 'residential' && (
                    <div className="rounded-lg border border-accent/20 bg-gradient-to-r from-accent/10 via-accent/5 to-background p-8 space-y-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">3-Year Free AMC Offer</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        SunStark Solar provides <span className="font-semibold text-foreground">3 Years Free AMC (Annual Maintenance Contract)</span> only if the complete solar project — including product purchase, installation, and commissioning — is executed entirely by SunStark Solar.
                      </p>
                      <div className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                        <span>Covers regular maintenance, cleaning, and performance optimization</span>
                      </div>
                    </div>
                  )}

                  {/* Government Solar Subsidy Support Section */}
                  {service.id === 'residential' && (
                    <div className="space-y-6 border-t border-border pt-8">
                      <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                          Government Solar Subsidy Support – Tamil Nadu & Pondicherry
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          We help residential customers navigate government solar subsidy programs to make solar energy more affordable.
                        </p>
                      </div>

                      {/* Eligibility Overview */}
                      <div className="rounded-lg border border-accent/20 bg-accent/5 p-8 space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Eligibility Overview</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                            <span className="text-sm text-muted-foreground">On-grid rooftop solar systems up to 3kW capacity are typically eligible for subsidies in Tamil Nadu</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                            <span className="text-sm text-muted-foreground">Eligible for residential buildings in Tamil Nadu and Pondicherry</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                            <span className="text-sm text-muted-foreground">Potential subsidy coverage up to 40% of total installation cost</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                            <span className="text-sm text-muted-foreground">System must be installed by an approved vendor/installer</span>
                          </li>
                        </ul>
                      </div>

                      {/* Regional Coverage */}
                      <div className="rounded-lg border border-border bg-secondary/30 p-8 space-y-3">
                        <h4 className="text-lg font-semibold text-foreground">Regional Coverage</h4>
                        <p className="text-sm text-muted-foreground">
                          SunStark Solar is an approved solar installer serving customers across Tamil Nadu and Pondicherry. We are well-versed with both MNRE (Ministry of New and Renewable Energy) subsidies and state-specific incentive programs.
                        </p>
                      </div>

                      {/* Assistance by SunStark Solar */}
                      <div className="rounded-lg border border-green-200 bg-green-50 p-8 space-y-4">
                        <h4 className="text-lg font-semibold text-green-900">Assistance by SunStark Solar</h4>
                        <p className="text-sm text-green-800">
                          We provide complete support throughout the subsidy process:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3 text-sm text-green-800">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0 mt-1.5" />
                            <span>Pre-subsidy consultation and eligibility assessment</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm text-green-800">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0 mt-1.5" />
                            <span>Documentation and application support</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm text-green-800">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0 mt-1.5" />
                            <span>Site survey and technical feasibility study</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm text-green-800">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0 mt-1.5" />
                            <span>Professional installation and commissioning as per government standards</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm text-green-800">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0 mt-1.5" />
                            <span>Post-installation support and monitoring system setup</span>
                          </li>
                        </ul>
                      </div>

                      {/* Important Disclaimer */}
                      <div className="rounded-lg border border-amber-200 bg-amber-50 p-8 space-y-3">
                        <h4 className="text-lg font-semibold text-amber-900">Important Disclaimer</h4>
                        <p className="text-xs sm:text-sm text-amber-800">
                          Subsidy eligibility, application procedures, and subsidy amounts are subject to change based on government policies. The information provided here is based on current Tamil Nadu and Pondicherry government solar subsidy schemes as of 2025. We recommend contacting your local authorities or SunStark Solar for the most current and accurate information regarding subsidy eligibility and application procedures. SunStark Solar acts as a facilitator and is not responsible for subsidy approvals or denials by government authorities.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className={`grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="space-y-4 sm:space-y-6 order-2 md:order-none" style={{ order: idx % 2 === 1 ? 1 : 2 }}>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium">
                          Service {idx + 1}
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{service.title}</h2>
                        <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
                      </div>

                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="font-semibold text-foreground text-sm sm:text-base">Key Benefits</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 sm:gap-3">
                              <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6 order-1 md:order-none" style={{ order: idx % 2 === 1 ? 2 : 1 }}>
                      <div className="rounded-lg border border-border bg-background p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">
                        <div className="text-4xl sm:text-5xl">
                          {service.icon === 'home' && '🏠'}
                          {service.icon === 'building' && '🏢'}
                          {service.icon === 'factory' && '🏭'}
                          {service.icon === 'wrench' && '🔧'}
                        </div>
                        
                        <div className="space-y-3 sm:space-y-4">
                          <h3 className="font-semibold text-foreground text-sm sm:text-base">Specifications</h3>
                          <div className="space-y-2">
                            {service.specs.map((spec, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                                <Zap className="h-3 sm:h-4 w-3 sm:w-4 text-accent flex-shrink-0" />
                                <span className="text-muted-foreground">{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href="/contact">Get a Quote</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="border-b border-border bg-background py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 sm:space-y-16">
              <div className="space-y-3 sm:space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Our Service Process</h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
                  We follow a systematic approach to ensure quality and customer satisfaction
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { step: '1', title: 'Consultation', desc: 'Free site analysis and requirements assessment' },
                  { step: '2', title: 'Design', desc: 'Customized system design for your needs' },
                  { step: '3', title: 'Installation', desc: 'Professional installation by certified technicians' },
                  { step: '4', title: 'Support', desc: 'Ongoing monitoring and maintenance' }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="rounded-lg border border-border bg-secondary/50 p-6 sm:p-8 text-center space-y-3 sm:space-y-4 h-full">
                      <div className="inline-flex items-center justify-center h-12 sm:h-14 w-12 sm:w-14 rounded-full bg-accent text-accent-foreground font-bold text-base sm:text-lg">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-foreground text-base sm:text-lg">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    {i < 3 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/20 transform -translate-y-1/2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="border-b border-border bg-secondary/30 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 sm:space-y-16">
              <div className="space-y-3 sm:space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Why Choose Our Services</h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
                  Industry-leading quality and customer-centric approach
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { icon: Wrench, title: 'Expert Installation', desc: 'Certified professionals with proven track record' },
                  { icon: Clock, title: 'Timely Completion', desc: 'Projects completed on schedule every time' },
                  { icon: Zap, title: 'Maximum Efficiency', desc: 'Optimized systems for best performance' },
                  { icon: CheckCircle2, title: 'Quality Guarantee', desc: '10+ year comprehensive warranties' },
                  { icon: Wrench, title: '24/7 Support', desc: 'Round-the-clock customer support available' },
                  { icon: Zap, title: 'Best ROI', desc: 'Fastest payback periods in the industry' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="space-y-3 sm:space-y-4">
                      <div className="inline-flex items-center justify-center h-11 sm:h-12 w-11 sm:w-12 rounded-lg bg-accent/10">
                        <Icon className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground text-base sm:text-lg">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-b border-border bg-background py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-accent/15 bg-gradient-to-r from-accent/5 via-accent/2 to-background p-8 sm:p-12 lg:p-16 text-center space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-3xl text-sm sm:text-base text-muted-foreground">
                  Contact our team today for a free consultation and discover the perfect solar solution for you.
                </p>
              </div>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Schedule Your Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
