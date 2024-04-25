export type CategoryType = 'garnish' | 'second' | 'salad' | 'soup' | 'bakery' | 'sauce' | 'drinks' | 'dishes'

export interface SingleProduct {
  id: string
  title: string
  price: number
  img: string
  category: CategoryType
  description: string

  options?: {
    weight?: string
    kalories?: string
    ingredients?: string[]
  }
  available?: boolean
}

export interface ComboProduct extends Omit<SingleProduct, 'options' | 'category'> {
  category: 'combo'
  products: SingleProduct[]
}

export type Product = ComboProduct | SingleProduct

export interface Cart {
  products: Product[]
  updated_at: string
}
