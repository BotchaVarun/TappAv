import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const footerLinks = {
    shop: [
        { name: 'Projectors', href: '#' },
        { name: 'Home Theater', href: '#' },
        { name: 'Audio Systems', href: '#' },
        { name: 'Accessories', href: '#' },
    ],
    support: [
        { name: 'Contact Us', href: '#' },
        { name: 'FAQs', href: '#' },
        { name: 'Shipping & Returns', href: '#' },
        { name: 'Warranty', href: '#' },
    ],
    company: [
        { name: 'About TappAV', href: '#' },
        { name: 'Our Projects', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
    ],
};

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-200 pt-20 pb-10 border-t border-slate-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                                T
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                TappAV
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                            Elevating home entertainment with premium audio-visual solutions.
                            We bring the cinema experience directly to your living room with world-class brands and expert installation.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all duration-300">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white transition-all duration-300">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all duration-300">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Shop</h3>
                        <ul className="space-y-4">
                            {footerLinks.shop.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                                        <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Support</h3>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                                        <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Company</h3>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                                        <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-slate-400 group cursor-pointer">
                                <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <span>123 AV Avenue, Tech Park,<br />Mumbai, Maharashtra 400001</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400 group cursor-pointer">
                                <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Phone className="h-4 w-4" />
                                </div>
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400 group cursor-pointer">
                                <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <span>support@tappav.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} TappAV. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
