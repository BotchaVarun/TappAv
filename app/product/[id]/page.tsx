import { ProductGallery } from '@/components/product/product-gallery';
import { ProductInfo } from '@/components/product/product-info';
import { ProductSpecs } from '@/components/product/product-specs';
import { ProductDescription } from '@/components/product/product-description';
import { RelatedProducts } from '@/components/product/related-products';

// Dummy Data for Epson Projector
const productConfig = {
    title: "Epson Pro Cinema LS12000 4K Laser Projector",
    price: "₹4,89,999",
    description: "The ultimate 4K experience for your home theater. Featuring Epson's new Laser Array Light Source, it delivers 2,700 lumens of color and white brightness with an incredible contrast ratio.",
    images: [
        "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?q=80&w=2664&auto=format&fit=crop", // Placeholder
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1585644198270-496695e2df48?q=80&w=2574&auto=format&fit=crop",
    ],
    highlights: [
        "4K PRO-UHD Resolution",
        "2,700 Lumens Color & White Brightness",
        "Laser Array Light Source (20,000 hours)",
        "HDMI 2.1 (4K/120Hz) for Gaming",
        "HDR10+ Support",
        "3-Year Warranty"
    ],
    specs: [
        {
            category: "Display",
            items: [
                { label: "Projection System", value: "3LCD, 3-chip technology" },
                { label: "Native Resolution", value: "4K PRO-UHD" },
                { label: "Color Brightness", value: "2700 Lumens" },
                { label: "Contrast Ratio", value: "2,500,000:1" },
            ]
        },
        {
            category: "Connectivity",
            items: [
                { label: "HDMI", value: "2x HDMI 2.1 (HDCP 2.3)" },
                { label: "USB", value: "2x USB Type-A" },
                { label: "Ethernet", value: "1x RJ45" },
                { label: "Control", value: "RS-232C, Trigger Out" },
            ]
        },
        {
            category: "General",
            items: [
                { label: "Dimensions", value: "20.5\" x 17.6\" x 7.6\"" },
                { label: "Weight", value: "12.7 kg" },
                { label: "Power Consumption", value: "311 W" },
                { label: "Fan Noise", value: "22dB - 30dB" },
            ]
        }
    ]
};

export default function ProductPage({ params }: { params: { id: string } }) {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <ProductGallery images={productConfig.images} />
                    <ProductInfo
                        title={productConfig.title}
                        price={productConfig.price}
                        description={productConfig.description}
                        highlights={productConfig.highlights}
                    />
                </div>

                <ProductDescription />
                <ProductSpecs specs={productConfig.specs} />
            </div>
            <RelatedProducts />
        </div>
    );
}
