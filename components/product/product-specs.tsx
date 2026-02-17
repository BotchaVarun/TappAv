'use client';

import { motion } from 'framer-motion';

interface SpecItem {
    label: string;
    value: string;
}

interface ProductSpecsProps {
    specs: {
        category: string;
        items: SpecItem[];
    }[];
}

export function ProductSpecs({ specs }: ProductSpecsProps) {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-slate-900 mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Specifications
                </motion.h2>

                <div className="space-y-12">
                    {specs.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
                        >
                            <div className="bg-slate-900 px-8 py-4">
                                <h3 className="font-bold text-white tracking-wide uppercase text-sm">{section.category}</h3>
                            </div>
                            <div className="divide-y divide-slate-100">
                                {section.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-1 md:grid-cols-3 px-8 py-5 hover:bg-slate-50/50 transition-colors"
                                    >
                                        <span className="text-slate-500 font-medium md:col-span-1">{item.label}</span>
                                        <span className="text-slate-900 font-semibold md:col-span-2">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
