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
        <section className="py-12 bg-white">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">Full Specifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {specs.map((section, idx) => (
                    <div key={idx}>
                        <h3 className="font-semibold text-slate-900 mb-4 bg-slate-50 p-2 rounded">{section.category}</h3>
                        <div className="space-y-0 text-sm">
                            {section.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-2 py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors"
                                >
                                    <span className="text-slate-500 font-medium">{item.label}</span>
                                    <span className="text-slate-900">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
