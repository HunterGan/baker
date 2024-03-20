import routes from '@/_app/routes'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import axios from 'axios'

interface RespnseType {
  data?: {
    id: string
    title: string
    description: string
    director: string
    year: string
    rating: string
    image: string
    cast: string
    createdAt: string
    updatedAt: string
  }[]

}
async function getMovies() {
  const movies = await axios.get(routes.goods.get_goods)
  return movies.data
}

export default async function Goods() {
  const response: RespnseType  = await getMovies()
  
  const movies = response?.data || []

  return (
    <main>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '100px'
        }}
      >
      {movies.map((movie) => (
        <Button
          key={movie.id}
        >
          {movie.title}
        </Button>
      ))}
      </Box>

    </main>
  )
}