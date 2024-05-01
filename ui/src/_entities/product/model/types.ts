export type CategoryType = 'garnish' | 'second' | 'salad' | 'soup' | 'bakery' | 'sauce' | 'drinks' | 'dishes' | 'combo'

export interface SingleProduct {
  type: Exclude<CategoryType, 'combo'>
  id: string
  title: string
  price: number
  img: string
  category: Exclude<CategoryType, 'combo'>
  description: string

  options?: {
    weight?: string
    kalories?: string
    ingredients?: string[]
  }
  available?: boolean
}

export interface ComboProduct extends Omit<SingleProduct, 'options' | 'category' | 'type'> {
  type: 'combo'
  category: 'combo'
  products: SingleProduct[]
}

export type Product = ComboProduct | SingleProduct

export interface Cart {
  products: Product[]
  updated_at: string
}
