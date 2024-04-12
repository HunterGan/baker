import { getCategory } from '@/_shared/lib/api'

type Props = {
  params:{category:string}
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