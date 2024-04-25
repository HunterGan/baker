import { Product } from "@/_entities/product"

export interface Order {
  id: string
  status: 'active' | 'closed' | 'finished' | 'declined'
  products: Product[]
  address?: string
  discount: number
  totalPrice: number
}