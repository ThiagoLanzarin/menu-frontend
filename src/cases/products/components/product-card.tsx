import type { ProductDTO } from "../dtos/product.dto"
import { formatCurrency } from "@/lib/format";
import noProduct from '@/assets/no-product.svg';

type ProductCardProps = {
    product: ProductDTO
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 hover:border-[#b86a2c] transition-colors">
            <div className="aspect-4/3 overflow-hidden bg-[#e8e1d6]">
                <img src={product.picture ?? noProduct} alt={product.name} className="size-full object-cover" />
            </div>

            <div className="flex flex-1 flex-col p-4 gap-4">
                <h3 className="font-menu text-lg font-semibold uppercase">{product.name}</h3>
            
                {product.description && (
                    <p className=" line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                )}
            
                <span className="mt-auto font-menu text-lg font-bold text-[#b86a2c]">
                    {formatCurrency(product.price)}
                </span>
            </div>

        </div>
    )
}
