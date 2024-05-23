import api_routes from '@/app/routes'
import axios from 'axios'

export async function getCategory(category: string) {
  try {
    const data = await axios.get(api_routes.categories.get_categories, {params: {category: 'popular'}})

    if (data.data) {
      return data.data
    }
  } catch(e) {
    console.log(e)
    return []
  }
}

export async function getCategories() {
  
}

