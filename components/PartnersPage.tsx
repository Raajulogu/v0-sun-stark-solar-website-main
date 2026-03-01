'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import getYearsOfEXP from '@/hooks/getYearsOfEXP'

export default function PartnersPage() {
  const { yearsOfExcellence } = getYearsOfEXP()
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-background to-card py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 max-w-3xl">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Our Partners & Clients</h1>
                <p className="text-xl text-muted-foreground">
                  Trusted by leading organizations across residential, commercial, and industrial sectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-2xl font-bold text-foreground">Equipment & Technology Partners</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  We partner with world-leading manufacturers to ensure superior quality
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Premium Solar Panels', type: 'Equipment' },
                  { name: 'Advanced Inverters', type: 'Equipment' },
                  { name: 'Battery Systems', type: 'Equipment' },
                  { name: 'Monitoring Solutions', type: 'Technology' },
                  { name: 'Electrical Components', type: 'Equipment' },
                  { name: 'Installation Hardware', type: 'Equipment' },
                  { name: 'Safety Systems', type: 'Equipment' },
                  { name: 'IoT Platforms', type: 'Technology' },
                  { name: 'Grid Management', type: 'Technology' },
                  { name: 'Data Analytics', type: 'Technology' },
                  { name: 'Smart Controls', type: 'Technology' },
                  { name: 'Cloud Services', type: 'Technology' }
                ].map((partner, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-6 flex items-center justify-center text-center hover:border-accent transition-colors group cursor-pointer">
                    <div className="space-y-2">
                      <div className="inline-block px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        {partner.type}
                      </div>
                      <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        {partner.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Client Categories */}
        <section className="border-b border-border bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-2xl font-bold text-foreground">Client Categories</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Serving diverse sectors with customized solar solutions
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    category: 'Residential',
                    count: '2500+',
                    desc: 'Homeowners and families',
                    examples: ['Individual homes', 'Villas and apartments', 'Housing complexes', 'Residential colonies']
                  },
                  {
                    category: 'Commercial',
                    count: '350+',
                    desc: 'Businesses and institutions',
                    examples: ['Office buildings', 'Shopping malls', 'Hotels and resorts', 'Educational institutions']
                  },
                  {
                    category: 'Industrial',
                    count: '150+',
                    desc: 'Manufacturing and production',
                    examples: ['Manufacturing plants', 'Factories', 'Warehouses', 'Processing facilities']
                  }
                ].map((client, i) => (
                  <div key={i} className="rounded-lg border border-border bg-background p-8 space-y-6 hover:border-accent transition-colors">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-accent">{client.category}</h3>
                      <p className="text-3xl font-bold text-foreground">{client.count}</p>
                      <p className="text-muted-foreground">{client.desc}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-foreground text-sm">Typical clients:</p>
                      <ul className="space-y-1">
                        {client.examples.map((example, j) => (
                          <li key={j} className="text-sm text-muted-foreground">• {example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold text-foreground">Client Success Stories</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Hear from our satisfied clients about their solar journey
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Raj Kumar',
                    role: 'Homeowner, Pondicherry',
                    quote: 'SunStark Solar transformed our home. We reduced our electricity bills by 85% within the first year. The team was professional and the installation was seamless.',
                    saved: '₹45,000/year'
                  },
                  {
                    name: 'ABC Manufacturing Ltd',
                    role: 'Factory Owner, Tamil Nadu',
                    quote: 'The 75kW system has been game-changing for our operations. Our production costs are down, and we have predictable energy expenses now.',
                    saved: '₹3,75,000/year'
                  },
                  {
                    name: 'Bright Future School',
                    role: 'Educational Institution',
                    quote: 'Not only did the solar installation reduce our operational costs, but it also became an excellent learning tool for our students about renewable energy.',
                    saved: '₹1,50,000/year'
                  }
                ].map((story, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-8 space-y-6">
                    <div className="space-y-2">
                      <p className="text-foreground italic">"{story.quote}"</p>
                    </div>

                    <div className="space-y-1 border-t border-border pt-4">
                      <p className="font-semibold text-foreground">{story.name}</p>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                      <p className="text-sm text-accent font-medium">Annual Savings: {story.saved}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="border-b border-border bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold text-foreground">Why Choose SunStark as Your Partner</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Industry-leading commitment to quality, reliability, and customer success
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Proven Track Record',
                    desc: 'Over 500 successful installations with 99% customer satisfaction rating'
                  },
                  {
                    title: 'Premium Quality',
                    desc: 'Using only certified, high-efficiency solar equipment from trusted manufacturers'
                  },
                  {
                    title: 'Expert Team',
                    desc: `Certified engineers and technicians with ${yearsOfExcellence}+ years of industry experience`
                  },
                  {
                    title: 'Comprehensive Support',
                    desc: '24/7 customer support with dedicated relationship managers'
                  },
                  {
                    title: 'Financial Flexibility',
                    desc: 'Multiple payment plans, financing options, and subsidy assistance'
                  },
                  {
                    title: 'Long-term Partnership',
                    desc: 'Ongoing maintenance, monitoring, and support for system lifespan'
                  }
                ].map((item, i) => (
                  <div key={i} className="space-y-3 rounded-lg border border-border bg-background p-6 hover:border-accent transition-colors">
                    <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Stats */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold text-foreground">By The Numbers</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Our commitment to excellence reflected in results
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { metric: '500+', label: 'Projects Completed' },
                  { metric: '99%', label: 'Customer Satisfaction' },
                  { metric: `${yearsOfExcellence}+`, label: 'Years in Business' },
                  { metric: '10MW+', label: 'Total Capacity Installed' }
                ].map((item, i) => (
                  <div key={i} className="text-center space-y-2 rounded-lg border border-border bg-card p-6">
                    <div className="text-3xl sm:text-4xl font-bold text-accent">{item.metric}</div>
                    <div className="text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="border-b border-border bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-accent/30 bg-gradient-to-r from-accent/5 to-background p-8 sm:p-12 text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Interested in Partnership?
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                We're always looking to collaborate with equipment manufacturers, installers, and service providers who share our commitment to quality and customer success.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
