export function ProductDescription() {
    return (
        <section className="py-12 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Product Description</h2>
            <div className="prose prose-slate max-w-none text-slate-600">
                <p className="leading-relaxed mb-4">
                    Transform your living space into a cinematic masterpiece with our latest Epson Home Cinema Projector.
                    Designed for both movie enthusiasts and gamers, this projector delivers stunning 4K PRO-UHD resolution
                    with exceptional brightness and color accuracy.
                </p>
                <p className="leading-relaxed mb-4">
                    With advanced 3-chip 3LCD technology, you get 100% of the RGB color signal for every frame,
                    ensuring outstanding color gamut while maintaining excellent brightness without any "rainbowing"
                    or "color brightness" issues seen with other projection technologies.
                </p>
                <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Ideal For:</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Dedicated Home Theater Rooms</li>
                    <li>Living Rooms with some ambient light</li>
                    <li>High-Frame Rate Gaming (120Hz support)</li>
                    <li>Sports broadcasting on massive screens (up to 300 inches)</li>
                </ul>
            </div>
        </section>
    )
}
