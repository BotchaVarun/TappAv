'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const products = [
    {
        id: 'sony-vpl-xw5000es',
        name: 'Sony VPL-XW5000ES',
        price: '₹5,50,000',
        image: 'https://images.unsplash.com/photo-1623945199859-0097a829142f?q=80&w=2670&auto=format&fit=crop',
        href: '/product/sony-vpl-xw5000es',
    },
    {
        id: 'kef-ls50-wireless-ii',
        name: 'KEF LS50 Wireless II',
        price: '₹2,25,000',
        image: 'https://images.unsplash.com/photo-1558525091-a67bfe304122?q=80&w=2670&auto=format&fit=crop',
        href: '/product/kef-ls50-wireless-ii',
    },
    {
        id: 'marantz-cinema-40',
        name: 'Marantz Cinema 40',
        price: '₹2,49,900',
        image: 'https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=1470&auto=format&fit=crop',
        href: '/product/marantz-cinema-40',
    },
    {
        id: 'denon-avc-x3800h',
        name: 'Denon AVC-X3800H',
        price: '₹1,59,900',
        image: 'https://images.unsplash.com/photo-1545459720-aacaf5090834?q=80&w=1335&auto=format&fit=crop',
        href: '/product/denon-avc-x3800h',
    }
];

export function RelatedProducts() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4">
                <motion.div
                    className="flex justify-between items-end mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Complete Your Setup</h2>
                    <Link href="/store" className="text-blue-600 font-medium hover:underline">View All</Link>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative aspect-square overflow-hidden bg-slate-100">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${product.image})` }}
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center pb-6">
                                    <Button size="sm" className="bg-white text-slate-900 hover:bg-blue-600 hover:text-white border-none shadow-lg rounded-full px-6">
                                        Quick View
                                    </Button>
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <h3 className="text-lg font-bold text-slate-900 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="font-bold text-slate-700">{product.price}</span>
                                    <Link href={product.href}>
                                        <Button variant="ghost" size="sm" className="h-8 text-xs hover:bg-slate-100 text-slate-500">Details</Button>
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
