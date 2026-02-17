'use client';

import { Button } from '@/components/ui/button';
import { BadgeCheck, Share2, Heart, Truck, Phone, MessageSquare, Maximize2, Zap, Wifi, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductInfoProps {
    title: string;
    price: string;
    description: string;
    highlights: string[];
}

const highlightIcons: Record<string, any> = {
    "Resolution": Maximize2,
    "Brightness": Zap,
    "Connectivity": Wifi,
    "Warranty": Shield
};

// Start of highlight mapping logic for the new grid layout
// Assuming highlights array comes in specific order or we map by keyword
// For this demo, I will create a static efficient mapping based on the text content

function getIconForHighlight(text: string) {
    if (text.includes("4K") || text.includes("Resolution")) return Maximize2;
    if (text.includes("Lumens") || text.includes("Brightness")) return Zap;
    if (text.includes("HDMI") || text.includes("Gaming")) return Wifi;
    if (text.includes("Warranty")) return Shield;
    return BadgeCheck;
}

export function ProductInfo({ title, price, description, highlights }: ProductInfoProps) {
    return (
        <div className="flex flex-col h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                        In Stock
                    </span>
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        Official Warranty
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight leading-tight">{title}</h1>
                <p className="text-lg text-slate-500 font-medium mb-6">The Ultimate 4K Home Cinema Experience</p>

                <div className="flex items-baseline gap-4 mb-8">
                    <p className="text-4xl font-bold text-blue-600">{price}</p>
                    <p className="text-sm text-slate-400 line-through">₹5,99,999</p>
                    <span className="text-sm font-bold text-emerald-600">Save 18%</span>
                </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
                className="grid grid-cols-2 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {highlights.slice(0, 4).map((highlight, index) => {
                    const Icon = getIconForHighlight(highlight);
                    return (
                        <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                            <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600 shrink-0">
                                <Icon className="h-5 w-5" />
                            </div>
                            <span className="text-sm font-medium text-slate-700 leading-tight">{highlight}</span>
                        </div>
                    )
                })}
            </motion.div>

            <motion.div
                className="flex flex-col gap-4 mt-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="flex gap-4">
                    <Button size="lg" className="flex-1 text-lg h-14 rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all">
                        Add to Cart
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 w-14 rounded-xl border-slate-200 hover:border-red-200 hover:bg-red-50 hover:text-red-500">
                        <Heart className="h-6 w-6" />
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 w-14 rounded-xl border-slate-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-500">
                        <Share2 className="h-6 w-6" />
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button variant="secondary" className="h-12 rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200">
                        <MessageSquare className="mr-2 h-4 w-4" /> Request Demo
                    </Button>
                    <Button variant="ghost" className="h-12 rounded-xl border border-slate-200 hover:bg-slate-50">
                        <Phone className="mr-2 h-4 w-4" /> Talk to Expert
                    </Button>
                </div>

                <p className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-2">
                    <Truck className="h-4 w-4 text-emerald-500" />
                    <span className="font-medium">Free Pan-India Delivery</span> • <span className="font-medium">Ships within 24 Hours</span>
                </p>
            </motion.div>
        </div>
    );
}
