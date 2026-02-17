'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ProductGalleryProps {
    images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                {/* In a real app, use Next.js Image component */}
                <div
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-300 ease-in-out"
                    style={{ backgroundImage: `url(${images[selectedImage]})` }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-slate-800 shadow-sm">
                    Zoom Enabled
                </div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={cn(
                            "relative h-20 w-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition-all",
                            selectedImage === index
                                ? "border-blue-600 ring-2 ring-blue-600/20"
                                : "border-slate-200 hover:border-slate-300"
                        )}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
