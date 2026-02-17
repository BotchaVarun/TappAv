'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function PremiumCTASection() {
    return (
        <section className="py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500 to-transparent rotate-12 blur-[100px]" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-indigo-500 to-transparent -rotate-12 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.h2
                    className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Experience Cinema at Home.
                </motion.h2>
                <motion.p
                    className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto font-light"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Let us design the perfect audio-visual sanctuary for you.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link href="/contact">
                        <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-blue-900 hover:bg-blue-50 transition-all font-semibold shadow-2xl hover:shadow-white/20 hover:-translate-y-1">
                            Talk to an Expert
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
