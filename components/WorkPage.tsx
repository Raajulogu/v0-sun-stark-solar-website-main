'use client';

import Link from 'next/link'
import Image from 'next/image'
import { Zap, MapPin, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getAllWorks } from '@/lib/prismic'
import { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider';
import { useRouter } from 'next/navigation';

// benefits: [{benefit: 'Save Cost'}]
// capacity: "10KW"
// category: "Residential"
// completion: "Jan, 2026"
// details: [{details:""}]
// full_desc:[{text:"",type:"paragraph"}]
// images: [{image:{url:""}}]
// location:"Chennai, OMR"
// savings: "40,000 annually"
// shortdesc:"10 kw on grid solar system installed in OMR"
// timeline:[{phase:"", duration:""}]
// title:"Hope school foundation."


const WorksPage = () => {
    const [works, setWorks] = useState<any[]>([]);
    const router = useRouter()

    useEffect(() => {
        const fetchWorks = async () => {
            const data = await getAllWorks();
            setWorks(data);
        }
        fetchWorks();
    }, []);

    const handleRoute=(url="/")=>{
        router.push(url)
    }
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
                            {works.map((project) => (
                                <div
                                    key={project.id}
                                    className="group h-full overflow-hidden rounded-lg border border-border bg-background hover:border-accent transition-all duration-300 hover:shadow-md"
                                    onClick={() => handleRoute(`/works/${project?.uid}`)}
                                >
                                    {/* Image */}
                                    <div className="aspect-video relative overflow-hidden bg-muted">
                                        <ImageSlider
                                            images={
                                                project?.data?.images?.length
                                                    ? project.data.images.map((item: any) => ({
                                                        url: item.image?.url,
                                                        alt: project?.data?.title,
                                                    }))
                                                    : [
                                                        {
                                                            url:
                                                                project?.data?.category === "Residential"
                                                                    ? "/images/home-modern.jpg"
                                                                    : project?.data?.category === "Commercial"
                                                                        ? "/images/office-commercial.jpg"
                                                                        : "/images/factory-industrial.jpg",
                                                            alt: project?.data?.title,
                                                        },
                                                    ]
                                            }
                                            autoSlide={false} // optional: disable auto for list page
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                                        <div className="space-y-2 sm:space-y-3">
                                            <div className="flex items-center justify-between gap-2">
                                                <span className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                                                    {project?.data?.category}
                                                </span>
                                                <span className="text-accent font-bold text-xs sm:text-sm">{project?.data?.capacity}</span>
                                            </div>
                                            <h3 className="font-semibold text-foreground text-base sm:text-lg group-hover:text-accent transition-colors line-clamp-2">
                                                {project?.data?.title}
                                            </h3>
                                        </div>

                                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                            {project?.data?.shortdesc}
                                        </p>

                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm border-t border-border pt-4">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <MapPin className="h-3.5 sm:h-4 w-3.5 sm:w-4 flex-shrink-0" />
                                                <span>{project?.data?.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-accent font-semibold mt-2 sm:mt-0">
                                                <TrendingUp className="h-3.5 sm:h-4 w-3.5 sm:w-4 flex-shrink-0" />
                                                <span>{project?.data?.savings}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-border">
                                            <span className="text-xs text-muted-foreground">
                                                {project?.data?.completion}
                                            </span>
                                            <span className="text-accent font-semibold group-hover:translate-x-1 transition-transform">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </div>
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
                                <strong>Ready to integrate Prismic CMS?</strong> This page is built with sample data?.
                                Connect your Prismic account to manage projects dynamically with image uploads via Cloudinary.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default WorksPage;
