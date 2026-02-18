'use client'

import React from "react"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useToast } from '@/hooks/use-toast'

export default function Contact() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: 'Success!',
          description: 'Your message has been sent. We will contact you soon.',
        })
        setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' })
      } else {
        toast({
          title: 'Error',
          description: 'Failed to send message. Please try again.',
          variant: 'destructive',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again later.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative border-b border-border bg-background overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact-hero.jpg"
              alt="Solar showroom and consultation space"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
            <div className="space-y-6 max-w-2xl">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">Get in Touch</h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Have questions about solar energy? Contact our expert team today for a free consultation and personalized guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="border-b border-border bg-secondary/30 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Phone */}
              <div className="rounded-lg border border-border/50 bg-background p-8 space-y-6">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="text-sm text-muted-foreground">Call us during business hours</p>
                  <a href="tel:+919360260195" className="text-accent hover:text-accent/80 transition-colors font-medium text-sm">
                    +91 9360260195
                  </a>
                  <a href="tel:+919600642600" className="text-accent hover:text-accent/80 transition-colors font-medium text-sm block">
                    +91 9600642600
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-lg border border-border/50 bg-background p-8 space-y-6">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  <a href="mailto:sunstarksolarstark@gmail.com" className="text-accent hover:text-accent/80 transition-colors font-medium text-sm break-all">
                    sunstarksolarstark@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="rounded-lg border border-border/50 bg-background p-8 space-y-6">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p className="text-sm text-muted-foreground">Visit our office</p>
                  <p className="text-sm text-accent font-medium">
                    Plot 5 & 6, Muthamizh Nagar<br />
                    Vanur, Pattanur<br />
                    Pondicherry 605111
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-lg border border-border/50 bg-background p-8 space-y-6">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Hours</h3>
                  <p className="text-sm text-muted-foreground">Mon - Fri: 9AM - 6PM</p>
                  <p className="text-sm text-accent font-medium">Sat: 10AM - 4PM</p>
                  <p className="text-sm text-muted-foreground">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="border-b border-border/50 bg-background py-20 sm:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold text-foreground">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <label htmlFor="serviceType" className="block text-sm font-medium text-foreground">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a service type</option>
                    <option value="residential">Residential Solar</option>
                    <option value="commercial">Commercial Solar</option>
                    <option value="industrial">Industrial Solar</option>
                    <option value="maintenance">System Maintenance</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your solar energy needs..."
                    rows={6}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll use your contact information to respond to your inquiry and provide you with the best service.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-b border-border/50 bg-card py-20 sm:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  Have a question? We've got answers
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    q: 'How long does a solar installation take?',
                    a: 'The total timeline from consultation to activation typically takes 8-12 weeks. The actual installation usually takes 3-7 days depending on system size and complexity.'
                  },
                  {
                    q: 'What is the cost of a solar system?',
                    a: 'System costs vary based on size and requirements. Residential systems typically range from ₹2-6 lakhs, while commercial and industrial systems are customized based on energy needs. We offer multiple financing options.'
                  },
                  {
                    q: 'Will solar panels work if there\'s no sun?',
                    a: 'Solar panels work even on cloudy days as they use ambient light. However, they\'re most efficient in direct sunlight. For continuous power, battery backup systems are available.'
                  },
                  {
                    q: 'What is the warranty on solar systems?',
                    a: 'Our systems come with 25-30 year performance warranties on panels and 10-15 year warranties on inverters and other equipment.'
                  },
                  {
                    q: 'Can I add battery storage later?',
                    a: 'Yes! Our systems are designed to be scalable. You can add battery storage at any time in the future.'
                  },
                  {
                    q: 'What government incentives are available?',
                    a: 'Depending on your location, you may be eligible for subsidies, tax credits, and accelerated depreciation benefits. We help you navigate these incentives.'
                  }
                ].map((item, i) => (
                  <div key={i} className="rounded-lg border border-border/50 bg-background p-8 space-y-3">
                    <h3 className="font-semibold text-foreground">{item.q}</h3>
                    <p className="text-muted-foreground text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-b border-border/50 bg-background py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-accent/20 bg-gradient-to-r from-accent/5 via-background to-background p-12 sm:p-16 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                  Still Have Questions?
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                  Our team is here to help. Call us or visit our office to discuss your solar energy needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="tel:+919360260195">Call Us Now</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/process">Learn Our Process</Link>
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
