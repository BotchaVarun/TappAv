'use client';

import { ShieldCheck, Truck, Headphones, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Wrench,
        title: 'Expert Installation',
        description: 'Professional setup and calibration by our certified specialized team.',
    },
    {
        icon: ShieldCheck,
        title: 'Premium Warranty',
        description: 'Official manufacturer warranty on all products plus our support.',
    },
    {
        icon: Truck,
        title: 'Pan-India Delivery',
        description: 'Secure and insured shipping to over 15,000 pin codes across India.',
    },
    {
        icon: Headphones,
        title: 'Expert Consultation',
        description: 'Get free advice from our AV experts to choose the right gear.',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function USPSection() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Why Choose TappAV?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        We don't just sell equipment; we craft experiences.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group flex flex-col items-center text-center p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/80 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="mb-6 p-4 bg-blue-600/10 rounded-full text-blue-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
