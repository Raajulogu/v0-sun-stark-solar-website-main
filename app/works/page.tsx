'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Zap, MapPin, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

// Mock projects data - In production, this would come from Prismic CMS or MongoDB
const projects = [
  {
    id: 1,
    title: 'Residential Solar Installation - 10kW System',
    description: 'Modern villa equipped with premium solar panels and battery backup system',
    location: 'Pondicherry',
    category: 'Residential',
    capacity: '10 kW',
    savings: '₹45,000 annually',
    completion: 'March 2024',
    image: 'Residential Installation',
    details: 'Complete residential solar setup with 25 units of 400W panels, hybrid inverter, and 10kWh battery storage. System includes smart monitoring and real-time performance tracking.'
  },
  {
    id: 2,
    title: 'Commercial Complex - 50kW Solar System',
    description: 'Large office building with comprehensive solar infrastructure',
    location: 'Vanur',
    category: 'Commercial',
    capacity: '50 kW',
    savings: '₹2,50,000 annually',
    completion: 'January 2024',
    image: 'Commercial Complex',
    details: 'Enterprise-grade solar installation for commercial building with 125 units of 400W panels, three-phase inverter system, and advanced monitoring for 24/7 oversight.'
  },
  {
    id: 3,
    title: 'Industrial Rooftop - 100kW Installation',
    description: 'Industrial facility with industrial-grade solar arrays',
    location: 'Tamil Nadu',
    category: 'Industrial',
    capacity: '100 kW',
    savings: '₹5,00,000 annually',
    completion: 'December 2023',
    image: 'Industrial Rooftop',
    details: 'Heavy-duty industrial solar system with 250 units of 400W panels, industrial inverter, advanced predictive maintenance, and round-the-clock monitoring.'
  },
  {
    id: 4,
    title: 'Villa Solar System - 8kW Rooftop',
    description: 'Luxury residential property with sleek solar installation',
    location: 'Pondicherry',
    category: 'Residential',
    capacity: '8 kW',
    savings: '₹35,000 annually',
    completion: 'February 2024',
    image: 'Villa Solar System',
    details: 'Aesthetically designed rooftop solar system with premium bifacial panels, microinverters, and cloud-based monitoring application.'
  },
  {
    id: 5,
    title: 'School Campus Solar Project - 30kW',
    description: 'Educational institution with sustainable solar solution',
    location: 'Pattanur',
    category: 'Commercial',
    capacity: '30 kW',
    savings: '₹1,50,000 annually',
    completion: 'November 2023',
    image: 'School Campus',
    details: 'Community-focused solar installation for educational facility with 75 units of 400W panels, providing sustainable energy for daily operations.'
  },
  {
    id: 6,
    title: 'Factory Complex - 75kW Solar Array',
    description: 'Manufacturing facility with comprehensive renewable energy',
    location: 'Tamil Nadu',
    category: 'Industrial',
    capacity: '75 kW',
    savings: '₹3,75,000 annually',
    completion: 'October 2023',
    image: 'Factory Complex',
    details: 'Advanced manufacturing facility solar installation with integrated energy management system and production data analytics.'
  }
]

export default function Works() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative border-b border-border bg-background overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/works-hero.jpg"
              alt="Aerial view of large solar farm"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
            <div className="space-y-4 sm:space-y-6 max-w-2xl">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">Our Projects</h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Explore our portfolio of successful solar installations transforming properties across South India. From residential homes to industrial facilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="border-b border-border bg-secondary/30 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project) => (
                <Link key={project.id} href={`/works/${project.id}`}>
                  <div className="group h-full overflow-hidden rounded-lg border border-border bg-background hover:border-accent transition-all duration-300 hover:shadow-md">
                    {/* Image */}
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      <Image
                        src={project.category === 'Residential' ? '/images/home-modern.jpg' : project.category === 'Commercial' ? '/images/office-commercial.jpg' : '/images/factory-industrial.jpg'}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                            {project.category}
                          </span>
                          <span className="text-accent font-bold text-xs sm:text-sm">{project.capacity}</span>
                        </div>
                        <h3 className="font-semibold text-foreground text-base sm:text-lg group-hover:text-accent transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm border-t border-border pt-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-3.5 sm:h-4 w-3.5 sm:w-4 flex-shrink-0" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-accent font-semibold mt-2 sm:mt-0">
                          <TrendingUp className="h-3.5 sm:h-4 w-3.5 sm:w-4 flex-shrink-0" />
                          <span>{project.savings}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-xs text-muted-foreground">
                          {project.completion}
                        </span>
                        <span className="text-accent font-semibold group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border bg-background py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 sm:space-y-16">
              <div className="space-y-3 sm:space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Our Impact</h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
                  Real results transforming homes and businesses
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {[
                  { value: '500+', label: 'Projects Installed' },
                  { value: '10MW+', label: 'Total Capacity' },
                  { value: '₹50Cr+', label: 'Customer Savings' },
                  { value: '2500+', label: 'Happy Families' }
                ].map((stat, i) => (
                  <div key={i} className="text-center space-y-2 sm:space-y-3 rounded-lg border border-border bg-secondary/50 p-4 sm:p-6 lg:p-8">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">{stat.value}</div>
                    <div className="text-muted-foreground font-medium text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-b border-border bg-secondary/30 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-accent/15 bg-gradient-to-r from-accent/5 via-accent/2 to-background p-8 sm:p-12 lg:p-16 text-center space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                  Be Part of Our Success Stories
                </h2>
                <p className="mx-auto max-w-3xl text-sm sm:text-base text-muted-foreground">
                  Join hundreds of satisfied customers across South India who have transformed to clean, affordable solar energy.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CMS Integration Note */}
        <section className="border-b border-border bg-background py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-border bg-secondary/50 p-4 sm:p-6 text-center">
              <p className="text-xs sm:text-sm text-muted-foreground">
                <strong>Ready to integrate Prismic CMS?</strong> This page is built with sample data. 
                Connect your Prismic account to manage projects dynamically with image uploads via Cloudinary.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
