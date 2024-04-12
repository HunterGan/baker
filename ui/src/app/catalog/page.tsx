import { getCategory } from "@/_shared/lib/api"


export default async function CategoriesPage() {
  const category: any = await getCategory('popular')

  return (
    <div>
      {category}
    </div>
  )
}
