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
  const movies = await axios.get('/api/goods')
  return movies.data
}

export default async function Goods() {
  const response: RespnseType  = await getMovies()
  
  const movies = response?.data || []

  return (
    <main>
      {movies.map((movie) => (
        <Button
          key={movie.id}
        >
          {movie.title}
        </Button>
      ))}
    </main>
  )
}