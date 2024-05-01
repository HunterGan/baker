import { CategoryType } from '@/_entities/product'
import { getCategory } from '@/_shared/lib/api'

type Props = {
  params:{category: CategoryType}
}

const CategoryPage = async ({params}:Props) => {
  const products:any[] = await getCategory(params.category)

  return (
    <div>
      {products}
    </div>
  )
}

export default CategoryPage