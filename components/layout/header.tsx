'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const navLinks = [
    { name: 'Projectors', href: '/category/projectors' },
    { name: 'Home Theater', href: '/category/home-theater' },
    { name: 'Audio', href: '/category/audio' },
    { name: 'Accessories', href: '/category/accessories' },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-7xl transition-all duration-300 ease-in-out",
                    isScrolled ? "top-2" : "top-6"
                )}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div
                    className={cn(
                        "relative flex items-center justify-between rounded-full border px-6 py-3 shadow-lg backdrop-blur-md transition-all duration-300",
                        isScrolled
                            ? "bg-white/70 border-white/20 shadow-xl"
                            : "bg-white/50 border-white/10 shadow-sm"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                            T
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                            TappAV
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors group"
                            >
                                {link.name}
                                <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 text-slate-600 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100/50"
                        >
                            <Search className="h-5 w-5" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden sm:inline-flex p-2 text-slate-600 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100/50"
                        >
                            <User className="h-5 w-5" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative p-2 text-slate-600 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100/50"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                                0
                            </span>
                        </motion.button>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:block"
                        >
                            <Button size="sm" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-md">
                                Get Started
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-0 top-24 z-40 mx-auto w-[90%] rounded-2xl border border-white/20 bg-white/90 p-6 shadow-xl backdrop-blur-md md:hidden"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center justify-between border-b border-slate-100 pb-2 text-lg font-medium text-slate-900 hover:text-blue-600"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="mt-4 w-full rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                                Get Started
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
