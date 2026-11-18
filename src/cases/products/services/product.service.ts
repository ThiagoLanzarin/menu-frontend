import { api } from '@/lib/axios'
import type { ProductDTO } from '../dtos/product.dto'

const ENDPOINT = '/products'

export const ProductService = {
  async listAll(categoryId?: string): Promise<ProductDTO[]> {
    const result = await api.get<ProductDTO[]>(ENDPOINT, {
      params: categoryId ? { categoryId } : undefined,
    })
    return result.data
  },

  async findOne(id: string): Promise<ProductDTO> {
    const result = await api.get<ProductDTO>(`${ENDPOINT}/${id}`)
    return result.data
  },
}
