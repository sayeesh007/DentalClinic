'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'

export function HeroSection() {
    return (
        <div data-no-cursor="true">
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
                        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-md text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <h1 className="mt-8 max-w-3xl text-balance text-5xl md:text-7xl lg:mt-16 xl:text-8xl font-black italic tracking-tighter text-primary">
                                    Your Smile<br /> Redefined.
                                </h1>
                                <p className="mt-8 max-w-2xl text-balance text-lg text-foreground/60">
                                    Experience the "Antigravity" effect in modern dentistry. 
                                    Tailored treatments with precision tech for a perfect, painless outcome.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-14 rounded-full pl-8 pr-4 text-lg bg-primary shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                                        <Link href="#book">
                                            <span className="text-nowrap font-bold">Start Transformation</span>
                                            <ChevronRight className="ml-2" />
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-14 rounded-full px-8 text-lg font-bold hover:bg-zinc-950/5 dark:hover:bg-white/5 border border-primary/10">
                                        <Link href="#results">
                                            <span className="text-nowrap">View Results</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="size-full object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                                src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"></video>
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-2 border-t border-primary/5">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6 border-primary/10 py-4">
                                <p className="text-end text-sm font-bold text-primary italic uppercase tracking-widest">Trusted by Patients</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)] px-4">
                                <InfiniteSlider
                                    durationOnHover={20}
                                    duration={40}
                                    gap={112}>
                                    <div className="flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity whitespace-nowrap px-8">
                                        <div className="flex text-yellow-500">★★★★★</div>
                                        <span className="font-black text-sm">GOOGLE REVIEWS</span>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity whitespace-nowrap px-8">
                                        <span className="font-black text-sm">ISO 9001 CERTIFIED</span>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity whitespace-nowrap px-8">
                                        <span className="font-black text-sm italic">FDA APPROVED TECH</span>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity whitespace-nowrap px-8">
                                        <span className="font-black text-sm tracking-tighter uppercase">5,000+ Happy Smiles</span>
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'Before & After', href: '#results' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-[100] w-full pt-4 px-6 md:px-12">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-500 lg:px-12 border border-white/10', scrolled ? 'bg-background/80 backdrop-blur-3xl shadow-2xl py-2' : 'bg-transparent py-4')}>
                    <motion.div
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 duration-300')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto text-primary">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <span className="text-xl font-black tracking-tighter">PARAM<span className="text-accent italic">CLINIC</span></span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-foreground/70 hover:text-primary font-bold uppercase tracking-widest text-xs transition-colors block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-background/90 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base font-bold">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-foreground/70 hover:text-primary transition-colors block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit italic">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="rounded-xl font-bold uppercase tracking-widest text-xs h-10 px-6">
                                    <Link href="#">
                                        <span>Portal</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className="rounded-xl font-bold uppercase tracking-widest text-xs h-10 px-6 bg-accent shadow-xl shadow-accent/20">
                                    <Link href="#book">
                                        <span>Book Now</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
