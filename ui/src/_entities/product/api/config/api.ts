const PRODUCTS_URL = 'products'

const api = {
  getProduct: `${PRODUCTS_URL}/get`,
  getProducts: `${PRODUCTS_URL}/get_list`,
  getCategory: `${PRODUCTS_URL}/get_category`,
  getCategories: `${PRODUCTS_URL}/get_categories`,
  getCategoriesLinks: `${PRODUCTS_URL}/get_categories_links`,
}

export default api
