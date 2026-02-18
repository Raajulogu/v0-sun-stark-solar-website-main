'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative border-b border-border bg-background overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-company.jpg"
              alt="SunStark Solar team of engineers"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
            <div className="space-y-6 max-w-2xl">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">About SunStark Solar</h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Leading the renewable energy revolution with premium solar solutions and expert installation services across South India. Over 10 years of excellence and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="border-b border-border bg-secondary/30 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-sm sm:text-base leading-relaxed">
                    Founded with a vision to make sustainable energy accessible to everyone, SunStark Solar has been transforming properties across Pondicherry and Tamil Nadu for over a decade.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Our team of certified engineers and installation experts brings unmatched experience in solar technology, delivering solutions that are not just effective but also cost-efficient.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    We believe in the power of the sun to drive a sustainable future, and we're committed to helping our clients reduce their carbon footprint while maximizing their energy independence.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-background p-8 sm:p-10 space-y-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl sm:text-5xl font-bold text-accent">10+</div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium">Years in Business</div>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center space-y-2">
                  <div className="text-4xl sm:text-5xl font-bold text-accent">600+</div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium">Projects Completed</div>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center space-y-2">
                  <div className="text-4xl sm:text-5xl font-bold text-accent">10MW+</div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium">Capacity Installed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="border-b border-border/50 bg-background py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    To provide world-class solar energy solutions that empower individuals and businesses to achieve energy independence while contributing to a sustainable planet.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Deliver exceptional quality in every installation',
                      'Ensure complete customer satisfaction with transparent communication',
                      'Support the transition to clean, renewable energy',
                      'Drive innovation in solar technology'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    To be the most trusted and innovative solar energy provider, recognized for excellence, sustainability, and customer-centric solutions across India.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Pioneering advanced solar technologies',
                      'Building long-term customer relationships',
                      'Creating positive environmental impact',
                      'Advancing the renewable energy sector'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Highlights */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold text-foreground">Why Teams Trust Us</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Our commitment to excellence sets us apart in the industry
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Expert Technicians', desc: 'Certified professionals with extensive training and experience' },
                  { title: 'Quality Assurance', desc: 'Rigorous testing and quality control on every installation' },
                  { title: 'Latest Technology', desc: 'Using cutting-edge solar panels and monitoring systems' },
                  { title: 'Transparent Pricing', desc: 'Clear, upfront costs with no hidden charges' },
                  { title: 'Long-term Support', desc: '10+ year warranties and ongoing maintenance support' },
                  { title: 'Proven Results', desc: '99% customer satisfaction with measurable energy savings' },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-6 space-y-4 hover:border-accent transition-colors">
                    <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-b border-border bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-accent/30 bg-gradient-to-r from-accent/5 to-background p-8 sm:p-12 text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Join Thousands of Happy Customers
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Experience the SunStark Solar difference. Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/works">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
