import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
        <section className="py-16 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">You May Also Like</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="group flex flex-col bg-white rounded-lg border border-slate-100 overflow-hidden transition-shadow hover:shadow-md">
                            <div className="relative aspect-square overflow-hidden bg-slate-100">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${product.image})` }}
                                />
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <h3 className="text-base font-bold text-slate-900 mb-1 line-clamp-1">{product.name}</h3>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="font-semibold text-slate-700">{product.price}</span>
                                    <Link href={product.href}>
                                        <Button variant="ghost" size="sm" className="h-8 text-xs hover:bg-slate-100">View</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
