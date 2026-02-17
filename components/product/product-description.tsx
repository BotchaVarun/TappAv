'use client';

import { motion } from 'framer-motion';

export function ProductDescription() {
    return (
        <section className="py-20 border-t border-slate-100 bg-white">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">The Cinema Experience, Reimagined</h2>

                <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed space-y-8">
                    <p>
                        Step into a world where reality fades and imagination takes center stage. The <span className="text-slate-900 font-semibold">Epson Pro Cinema LS12000</span> isn't just a projector; it's a portal to new dimensions. Engineered for the uncompromising enthusiast, this 4K PRO-UHD laser projector delivers an image so crisp, so vibrant, and so lifelike, you'll forget you're sitting in your living room.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Unrivaled Gaming Performance</h3>
                            <p className="text-base text-slate-600">
                                Gain the competitive edge with <span className="font-semibold text-blue-600">HDMI 2.1 support</span>. Experience fluid, lag-free gaming at <span className="font-semibold">4K/120Hz</span> with input lag times below 20ms. Every frame is rendered with precision, ensuring you never miss a beat in fast-paced action.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Master of Light & Shadow</h3>
                            <p className="text-base text-slate-600">
                                With <span className="font-semibold text-blue-600">2,700 ISO lumens</span> of color and white brightness, the LS12000 commands attention even in ambient light. HDR10+ support creates deep optimizations for every scene, revealing details in the darkest shadows and brightest highlights.
                            </p>
                        </div>
                    </div>

                    <p>
                        Powered by a 3-chip 3LCD engine, it displays 100% of the RGB color signal for every frame. No rainbow effect. No color brightness issues. Just pure, unadulterated color that stays true to the director's vision. Whether you're building a dedicated theater cave or upgrading your media room, the LS12000 stands ready to anchor your entertainment sanctuary.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
