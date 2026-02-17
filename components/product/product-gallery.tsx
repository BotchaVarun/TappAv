'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

interface ProductGalleryProps {
    images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-col gap-6">
            <div
                className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 group cursor-zoom-in"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedImage}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{
                            opacity: 1,
                            scale: isHovered ? 1.5 : 1,
                            transition: { duration: 0.5 }
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${images[selectedImage]})`,
                            backgroundPosition: isHovered ? 'center' : 'center' // Could add mouse tracking for advanced zoom
                        }}
                    />
                </AnimatePresence>

                {/* Zoom Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 0 : 1 }}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1.5"
                >
                    <ZoomIn className="h-3 w-3" /> Hover to Zoom
                </motion.div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className="relative group outline-none"
                    >
                        <motion.div
                            className={cn(
                                "relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300",
                                selectedImage === index
                                    ? "border-blue-600 ring-2 ring-blue-600/20"
                                    : "border-slate-200 group-hover:border-slate-300"
                            )}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${image})` }}
                            />
                            {selectedImage !== index && (
                                <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors" />
                            )}
                        </motion.div>
                    </button>
                ))}
            </div>
        </div>
    );
}
