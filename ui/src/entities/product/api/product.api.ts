import axios from "axios";
import { CategoryType, ComboProduct, Product } from "../model/types";
import api from "./config/api";

const host = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const port = process.env.NEXT_UI_PORT
const baseUrl = `${host}:${port}/api`

export interface CategoryLink {
  name: string
  href: string
}

const getProducts = async (category?: CategoryType | ComboProduct['category']): Promise<Product[]> => {
  const postfix = category ? `/${category}` : ''

  try {
    const products = await axios.get(`${baseUrl}/${api.getProducts}${postfix}`)

    return products.data as Product[]
  } catch(e) {
    console.log('Error: ', e);
    return []
  }
}

const getCategoriesLinks = async (): Promise<CategoryLink[]> => {
  try {
    const response = await axios.get(`${baseUrl}/${api.getCategoriesLinks}`)

    return response.data
  } catch(e) {
    console.log(e)
    return []
  }
}

export {
  getProducts,
  getCategoriesLinks,
}
