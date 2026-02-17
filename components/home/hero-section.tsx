'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y, opacity }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900" />
            </motion.div>

            {/* Content */}
            <div className="container relative z-10 px-4 text-center mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
                        Next-Gen Home Cinema
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Elevate Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                        entertainment.
                    </span>
                </motion.h1>

                <motion.p
                    className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300/90 mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Transform your living space with TappAV's premium collection of
                    projectors, audio systems, and smart home solutions.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link href="/category/projectors">
                        <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700 shadow-[0_0_30px_-5px_var(--color-blue-600)] transition-all hover:scale-105">
                            Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg text-white border-white/20 hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all hover:scale-105 group">
                            <PlayCircle className="mr-2 h-5 w-5 text-blue-400 group-hover:text-white transition-colors" /> Book Consultation
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Light Beam */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-500/5 blur-[120px] pointer-events-none" />

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent" />
            </motion.div>
        </section>
    );
}
