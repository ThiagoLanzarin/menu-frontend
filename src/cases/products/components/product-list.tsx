import { useProducts } from "../hooks/use-product";
import { ProductCard } from "./product-card";

type ProductListProps = {
    categoryId?: string;
};

export function ProductList({ categoryId }: ProductListProps) {
    const { data: products = [], isLoading } = useProducts(categoryId);

    if (isLoading) {
        return <span>Carregando...</span>;
    }

    return (
        <ul className="grid grid-cols-3 gap-4">
            {products.map(product => (
                <li key={product.id}>
                    <ProductCard product={product} />
                </li>
            ))}
        </ul>
    )
}
