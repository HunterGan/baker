export type CategoryType = 'garnish' | 'second' | 'salad' | 'soup' | 'bakery' | 'sauce' | 'drinks' | 'dishes' | 'combo' | 'addition'

export interface Product {
  type: CategoryType
  id: string
  title: string
  price: number
  img: string
  description: string

  options?: {
    weight?: string
    kalories?: string
    ingredients?: string[]
  }
  products?: Product[]
  additions?: Product[]
  available?: boolean
}
