'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, TrendingUp, Zap, Shield, Users, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative border-b border-border bg-background overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/process-hero.jpg"
              alt="Professional solar installation team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
            <div className="space-y-6 max-w-2xl">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">Our Process</h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  A transparent, professional approach to delivering your perfect solar solution from consultation to installation and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Process Steps */}
        <section className="border-b border-border/50 bg-card py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 md:order-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                        1
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">Initial Consultation</h2>
                    </div>
                    <p className="text-muted-foreground">The first step towards your solar journey</p>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We begin with a detailed discussion about your energy needs, budget, and goals. Our solar experts will:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Understand your current electricity consumption patterns',
                        'Discuss your long-term energy goals and budget',
                        'Answer all questions about solar technology and benefits',
                        'Provide initial estimates and savings projections',
                        'Schedule a free on-site evaluation'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-background p-0 overflow-hidden order-1 md:order-2">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/consultation-meeting.jpg"
                      alt="Initial consultation meeting"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="text-2xl font-bold text-foreground">Duration</div>
                    <div className="text-muted-foreground">1-2 hours</div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-lg border border-border bg-background p-0 overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/design-phase.jpg"
                      alt="Solar system design and evaluation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center p-6">
                    <div className="text-2xl font-bold text-foreground">Duration</div>
                    <div className="text-muted-foreground">2-3 weeks</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                        2
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">Professional Site Evaluation</h2>
                    </div>
                    <p className="text-muted-foreground">Detailed assessment of your property</p>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our engineers conduct a comprehensive on-site evaluation:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Detailed structural and electrical assessment',
                        '3D solar irradiance mapping and shade analysis',
                        'Roof condition evaluation and load analysis',
                        'Grid connection feasibility study',
                        'Customized system design and energy modeling'
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

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 md:order-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                        3
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">Design & Proposal</h2>
                    </div>
                    <p className="text-muted-foreground">Tailored solution for your needs</p>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We present a detailed, customized proposal including:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Complete system design with equipment specifications',
                        'Detailed financial analysis and ROI projections',
                        'Energy production estimates and savings forecast',
                        'Government incentives and subsidy information',
                        'Multiple financing options and payment plans',
                        'Comprehensive warranty details'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-background p-0 overflow-hidden order-1 md:order-2">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/product-monitoring.jpg"
                      alt="System monitoring and design proposal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center p-6">
                    <div className="text-2xl font-bold text-foreground">Turnaround</div>
                    <div className="text-muted-foreground">5-7 business days</div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-lg border border-border bg-background p-0 overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/product-wiring.jpg"
                      alt="Permits and regulatory approvals"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center p-6">
                    <div className="text-2xl font-bold text-foreground">Duration</div>
                    <div className="text-muted-foreground">2-4 weeks</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                        4
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">Permits & Approvals</h2>
                    </div>
                    <p className="text-muted-foreground">Regulatory compliance and documentation</p>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We handle all regulatory requirements:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Prepare and submit all required permits',
                        'Coordinate with local authorities and agencies',
                        'Obtain building and electrical approvals',
                        'Handle grid connection applications',
                        'Manage all regulatory documentation',
                        'Ensure compliance with local regulations'
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

              {/* Step 5 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 md:order-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                        5
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">Installation</h2>
                    </div>
                    <p className="text-muted-foreground">Professional installation and testing</p>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our certified technicians execute flawless installation:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Structural and electrical preparation',
                        'Solar panel mounting installation',
                        'Inverter and balance of system installation',
                        'Electrical connections and safety checks',
                        'System performance testing and optimization',
                        'Safety certifications and inspections'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-background p-0 overflow-hidden order-1 md:order-2">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/installation-phase.jpg"
                      alt="Professional solar installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center p-6">
                    <div className="text-2xl font-bold text-foreground">Duration</div>
                    <div className="text-muted-foreground">3-7 days</div>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-lg border border-border bg-background p-0 overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/commissioning-phase.jpg"
                      alt="System commissioning and activation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center p-6">
                    <div className="text-2xl font-bold text-foreground">Duration</div>
                    <div className="text-muted-foreground">1-2 weeks</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                        6
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">Activation & Monitoring</h2>
                    </div>
                    <p className="text-muted-foreground">System activation and ongoing support</p>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We activate your system and provide comprehensive support:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Final grid connection and utility coordination',
                        'System activation and performance verification',
                        'User training on monitoring and maintenance',
                        'Installation of monitoring dashboard',
                        'Documentation and warranty registration',
                        'Ongoing performance tracking and support'
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
          </div>
        </section>

        {/* Total Timeline */}
        <section className="border-b border-border bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-accent/30 bg-gradient-to-r from-accent/5 to-background p-8 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Average Total Timeline</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent">8-12</div>
                  <div className="text-muted-foreground">Weeks Total</div>
                  <p className="text-sm text-muted-foreground mt-2">From consultation to activation</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent">3-5</div>
                  <div className="text-muted-foreground">Years Payback</div>
                  <p className="text-sm text-muted-foreground mt-2">Average ROI period</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent">25+</div>
                  <div className="text-muted-foreground">Years Lifespan</div>
                  <p className="text-sm text-muted-foreground mt-2">System performance warranty</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Process */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold text-foreground">Why Our Process Works</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Each step is designed for your success and satisfaction
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Transparency', desc: 'Complete visibility into every step of the process' },
                  { title: 'Expertise', desc: 'Certified professionals handling your project' },
                  { title: 'Quality', desc: 'Rigorous testing and quality assurance throughout' },
                  { title: 'Communication', desc: 'Regular updates and easy access to our team' },
                  { title: 'Support', desc: '24/7 customer support for your peace of mind' },
                  { title: 'Accountability', desc: 'Guaranteed timelines and performance metrics' }
                ].map((item, i) => (
                  <div key={i} className="space-y-4 rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors">
                    <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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
                Ready to Begin Your Solar Journey?
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Contact us today to start the consultation process. It's free and takes just an hour!
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
