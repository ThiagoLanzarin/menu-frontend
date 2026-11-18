import { useSearchParams } from "react-router-dom";
import { useCategory } from "@/cases/categories/hooks/use-category";
import { ProductList } from "@/cases/products/components/product-list";

export function ProductPage() {
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('categoryId');

    const { data: selectedCategory } = useCategory(categoryId ?? '');

    return (
        <div className="flex flex-col gap-6">
            {selectedCategory && (
                <h2 className="text-2xl font-semibold uppercase">
                    {selectedCategory.name}
                </h2>
            )}

            <ProductList categoryId={categoryId ?? undefined} />
        </div>
    )
}
