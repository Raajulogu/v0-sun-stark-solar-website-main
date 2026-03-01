'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Battery, Monitor, Wrench, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useEffect, useState } from 'react'
import { getAllProducts } from '@/lib/prismic'

// Utility function to generate WhatsApp message for products
function getProductWhatsAppUrl(productName: string) {
  const message = `Hello Sunstark Solar, I am interested in the product: ${productName}. Please share more details, pricing, and installation support.`
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/919360260195?text=${encodedMessage}`
}

interface ProductType {
  uid: string;
  data: {
    name: string;
    category: string;
    image: {
      url: string;
    };
    description: string;
    specs: string[];
    highlight: string;
  };
}

export default function ProductsPage() {

  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data: any = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative border-b border-border bg-background overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/product-solar-panels.jpg"
              alt="SunStark Solar Products"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
            <div className="space-y-6 max-w-2xl">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">Our Premium Products</h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Industry-leading solar components and systems engineered for maximum performance, reliability, and longevity. Every product is carefully selected and tested.
                </p>
              </div>
              <Button asChild size="lg" className="w-fit gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Request Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="border-b border-border bg-secondary/30 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 sm:space-y-16">
              <div className="space-y-3 sm:space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Complete Solar Solutions</h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
                  Everything you need for a high-performance, reliable solar energy system
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {products?.map((product: any) => (
                  <div key={product?.uid} className="group overflow-hidden rounded-lg border border-border bg-background hover:border-accent transition-all hover:shadow-md flex flex-col h-full">
                    {/* Product Image */}
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      <Image
                        src={product?.data?.image?.url || "/placeholder.svg"}
                        alt={product?.data?.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Content */}
                    <div className="p-6 sm:p-8 space-y-4 sm:space-y-6 flex flex-col flex-grow">
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-2">
                          {product?.data?.category}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                          {product?.data?.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {product?.data?.description}
                        </p>
                      </div>

                      {/* Specifications */}
                      <div className="space-y-2">
                        <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wide">Key Features</h4>
                        <ul className="space-y-1">
                          {product?.data?.specs?.map((data: any, i: any) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                              <Zap className="h-3 sm:h-4 w-3 sm:w-4 text-accent flex-shrink-0 mt-0.5" />
                              <span>{data.spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Highlight */}
                      <div className="pt-2 border-t border-border">
                        <p className="text-xs sm:text-sm text-accent font-semibold">
                          {product?.data?.highlight}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <Button asChild className="w-full gap-2 mt-auto bg-[#25D366] hover:bg-[#20BA5A] text-white">
                        <Link href={getProductWhatsAppUrl(product?.data?.name)} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4" />
                          Enquire Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="border-b border-border bg-background py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 sm:space-y-16">
              <div className="space-y-3 sm:space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Product Categories</h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
                  Browse our comprehensive range of solar components and systems
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { title: 'Solar Panels', desc: 'High-efficiency monocrystalline and polycrystalline options', icon: Zap },
                  { title: 'Inverters & Chargers', desc: 'Smart hybrid and grid-tie inverter systems', icon: Monitor },
                  { title: 'Battery Storage', desc: 'Lithium and lead-acid energy storage solutions', icon: Battery },
                  { title: 'Monitoring Systems', desc: 'Real-time performance tracking and analytics', icon: Monitor },
                  { title: 'Mounting & Hardware', desc: 'Premium structural components and installation hardware', icon: Wrench },
                  { title: 'Electrical Components', desc: 'Professional-grade wiring and safety devices', icon: Zap }
                ].map((category, i) => {
                  const Icon = category.icon
                  return (
                    <div key={i} className="rounded-lg border border-border bg-secondary/50 p-6 sm:p-8 hover:border-accent transition-all space-y-4">
                      <div className="inline-flex items-center justify-center h-12 sm:h-14 w-12 sm:w-14 rounded-lg bg-accent/10">
                        <Icon className="h-6 sm:h-7 w-6 sm:w-7 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground text-base sm:text-lg">{category.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{category.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="border-b border-border bg-secondary/30 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 sm:space-y-16">
              <div className="space-y-3 sm:space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Quality Standards</h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
                  Every product meets international standards and undergoes rigorous testing
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  { title: 'International Certification', desc: 'All products certified by international standards bodies including ISO, UL, and IEC.' },
                  { title: 'Rigorous Testing', desc: 'Every component tested for safety, performance, and durability before delivery.' },
                  { title: 'Warranty Protection', desc: '10-25 year comprehensive warranties covering performance and manufacturing defects.' },
                  { title: 'Expert Support', desc: 'Dedicated technical support team for installation guidance and troubleshooting.' },
                  { title: 'Performance Monitoring', desc: 'Lifetime monitoring and performance tracking with real-time alerts.' },
                  { title: 'Sustainable Choice', desc: 'Eco-friendly materials and responsible manufacturing practices throughout.' }
                ].map((standard, i) => (
                  <div key={i} className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-full bg-accent/10 flex-shrink-0 mt-0.5">
                        <Zap className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base sm:text-lg">{standard.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{standard.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="border-b border-border bg-secondary/30 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Disclaimer: Some products listed may be sourced from third-party manufacturers and distributed by Sunstark Solar.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-b border-border bg-background py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-accent/15 bg-gradient-to-r from-accent/5 via-accent/2 to-background p-8 sm:p-12 lg:p-16 text-center space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                  Ready to Get Premium Solar Products?
                </h2>
                <p className="mx-auto max-w-3xl text-sm sm:text-base text-muted-foreground">
                  Contact our team for product specifications, pricing, and custom installation solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">Request A Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">View Services</Link>
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
