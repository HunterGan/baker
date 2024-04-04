const host = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const port = process.env.NEXT_UI_PORT
const baseUrl = `${host}:${port}/api`

const api_routes = {
  categories: {
    get_categories: `${baseUrl}/categories`,
  },
  products: {
    get_products: `${baseUrl}/products/get_list`,
    get_product: `${baseUrl}/products/get`,
  },
  orders: {
    get_orders: `${baseUrl}/orders`,
  },
  goods: {
    get_goods:`${baseUrl}/goods`,
  }
}

const routes = {
  
}

export default api_routes