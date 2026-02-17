'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
    {
        id: 'projectors',
        title: '4K Projectors',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop',
        href: '/category/projectors',
        count: '24 Products'
    },
    {
        id: 'av-receivers',
        title: 'AV Receivers',
        image: 'https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=1470&auto=format&fit=crop',
        href: '/category/av-receivers',
        count: '18 Products'
    },
    {
        id: 'speakers',
        title: 'Hi-Fi Speakers',
        image: 'https://images.unsplash.com/photo-1545459720-aacaf5090834?q=80&w=1335&auto=format&fit=crop',
        href: '/category/speakers',
        count: '32 Products'
    },
    {
        id: 'home-theater',
        title: 'Home Theater',
        image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1633&auto=format&fit=crop',
        href: '/category/home-theater',
        count: '12 Packages'
    },
];

export function FeaturedCategories() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Shop by Category</h2>
                        <p className="text-slate-600 text-lg">Find the perfect equipment for your setup</p>
                    </motion.div>
                    <Link href="/categories" className="hidden md:flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors gap-1 group">
                        View All Categories <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <Link key={category.id} href={category.href}>
                            <motion.div
                                className="group relative h-[400px] overflow-hidden rounded-2xl shadow-sm cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                                    style={{ backgroundImage: `url(${category.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                        <p className="text-blue-400 text-sm font-medium mb-2 opacity-0 -translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                            {category.count}
                                        </p>
                                        <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                                        <div className="h-1 w-12 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
