'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';

const products = [
    {
        id: 'epson-ls12000',
        name: 'Epson Pro Cinema LS12000',
        description: '4K PRO-UHD Laser Projector',
        price: '₹4,89,999',
        image: 'https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?q=80&w=2664&auto=format&fit=crop',
        href: '/product/epson-ls12000',
        tag: 'Best Seller'
    },
    {
        id: 'sony-vpl-xw5000es',
        name: 'Sony VPL-XW5000ES',
        description: 'Native 4K SXRD Laser Projector',
        price: '₹5,50,000',
        image: 'https://images.unsplash.com/photo-1623945199859-0097a829142f?q=80&w=2670&auto=format&fit=crop',
        href: '/product/sony-vpl-xw5000es',
        tag: 'New Arrival'
    },
    {
        id: 'kef-ls50-wireless-ii',
        name: 'KEF LS50 Wireless II',
        description: 'Ultimate Wireless HiFi Speakers',
        price: '₹2,25,000',
        image: 'https://images.unsplash.com/photo-1558525091-a67bfe304122?q=80&w=2670&auto=format&fit=crop',
        href: '/product/kef-ls50-wireless-ii',
        tag: 'Audiophile Choice'
    },
    {
        id: 'marantz-cinema-40',
        name: 'Marantz Cinema 40',
        description: '9.4 Channel AV Receiver',
        price: '₹2,49,900',
        image: 'https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=1470&auto=format&fit=crop',
        href: '/product/marantz-cinema-40',
        tag: null
    },
];

export function FeaturedProducts() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 translate-x-32 z-0" />

            <div className="container relative z-10 mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        className="text-4xl font-bold text-slate-900 mb-4 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Featured Collection
                    </motion.h2>
                    <motion.p
                        className="text-slate-600 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Discover our hand-picked selection of top-tier audio-visual equipment for the ultimate home cinema experience.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group flex flex-col h-full bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative aspect-square overflow-hidden bg-slate-100">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                                    style={{ backgroundImage: `url(${product.image})` }}
                                />

                                {/* Overlay Actions */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                    <Button size="icon" className="rounded-full bg-white text-slate-900 hover:bg-blue-600 hover:text-white border-none shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                                        <ShoppingBag className="h-4 w-4" />
                                    </Button>
                                    <Button size="icon" variant="outline" className="rounded-full bg-white text-slate-900 hover:bg-red-500 hover:text-white border-none shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                        <Heart className="h-4 w-4" />
                                    </Button>
                                </div>

                                {product.tag && (
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                        {product.tag}
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-lg font-bold text-slate-900 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                                <p className="text-sm text-slate-500 mb-4 line-clamp-1">{product.description}</p>
                                <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-4">
                                    <span className="text-xl font-bold text-slate-900">{product.price}</span>
                                    <Link href={product.href} className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
