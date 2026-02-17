import { Button } from '@/components/ui/button';
import { BadgeCheck, Share2, Heart, Truck } from 'lucide-react';

interface ProductInfoProps {
    title: string;
    price: string;
    description: string;
    highlights: string[];
}

export function ProductInfo({ title, price, description, highlights }: ProductInfoProps) {
    return (
        <div className="flex flex-col h-full">
            <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{title}</h1>
                <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        In Stock
                    </span>
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        Official Warranty
                    </span>
                </div>
                <p className="text-3xl font-bold text-blue-600 mb-4">{price}</p>
                <p className="text-slate-600 leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            <div className="mb-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                    {highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                            <BadgeCheck className="h-5 w-5 text-blue-500 shrink-0" />
                            <span>{highlight}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col gap-4 mt-auto">
                <div className="flex gap-4">
                    <Button size="lg" className="flex-1 text-lg h-12">
                        Add to Cart
                    </Button>
                    <Button variant="outline" size="lg" className="px-4">
                        <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="px-4">
                        <Share2 className="h-5 w-5" />
                    </Button>
                </div>
                <div className="flex gap-4">
                    <Button variant="secondary" className="flex-1">
                        Request a Demo
                    </Button>
                    <Button variant="ghost" className="flex-1 border border-slate-200">
                        Talk to Expert
                    </Button>
                </div>
                <p className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-4">
                    <Truck className="h-4 w-4" /> Free Pan-India Delivery
                </p>
            </div>
        </div>
    );
}
