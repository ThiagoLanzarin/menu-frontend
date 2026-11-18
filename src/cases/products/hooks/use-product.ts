import { useQuery } from "@tanstack/react-query";
import { ProductService } from "../services/product.service";

export function useProducts(categoryId?: string) {
    return useQuery({
        queryKey: ['products', categoryId],
        queryFn: () => ProductService.listAll(categoryId)
    })
}

export function useProduct(id: string) {
    return useQuery({
        queryKey: ['products', id],
        queryFn: () => ProductService.findOne(id),
        enabled: !!id
    })
}