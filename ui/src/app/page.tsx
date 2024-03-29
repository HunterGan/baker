import api_routes from '@/_app/routes'
import MainPage from '@/_pages/main'

async function getMovies() {
  const res = await fetch(api_routes.goods.get_goods)

  if (!res.ok) {
    console.log(res.status)
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const goods: {data: any[]} = await getMovies()

  return (
    <main>
      <MainPage/>
    </main>
  )
}
