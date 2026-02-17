'use client';

import { Button } from '@/components/ui/button';
import { Star, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Rahul Mehta",
        role: "Home Theater Enthusiast",
        content: "TappAV helped me build my dream cinema room. Their recommendation on the Epson projector was spot on!",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
    },
    {
        name: "Priya Sharma",
        role: "Architect",
        content: "Excellent service and genuine products. The installation team was very professional and clean.",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
    },
    {
        name: "Vikram Singh",
        role: "Gamer",
        content: "Got my 4K setup for PS5. The delivery was fast and the packaging was secure. Highly recommended.",
        rating: 4,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram"
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl font-bold text-slate-900 mb-4 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Start Your Journey
                    </motion.h2>
                    <motion.p
                        className="text-slate-600 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Join hundreds of satisfied customers who have elevated their home entertainment.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full bg-slate-100" />
                                <div>
                                    <p className="font-bold text-slate-900">{t.name}</p>
                                    <p className="text-xs text-slate-500">{t.role}</p>
                                </div>
                            </div>
                            <div className="flex gap-1 text-yellow-500 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-4 w-4 ${i < t.rating ? 'fill-current' : 'text-slate-200'}`} />
                                ))}
                            </div>
                            <p className="text-slate-600 italic leading-relaxed">"{t.content}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function NewsletterSection() {
    return (
        <section className="py-24 bg-white border-t border-slate-100 relative">
            <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden relative"
                >
                    {/* Background Gradients */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                        <Mail className="h-12 w-12 text-white mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Join Our Community</h2>
                        <p className="text-slate-300 mb-8 text-lg">
                            Subscribe to our newsletter for the latest AV trends, exclusive offers, and expert tips.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 h-12 px-6 rounded-full border border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 backdrop-blur-sm"
                                required
                            />
                            <Button size="lg" className="rounded-full h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium">Subscribe</Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
