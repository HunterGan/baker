import RecipeReviewCard from '@/_shared/ui/common/Card/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import routes from '@/_app/routes'

async function getMovies() {
  console.log(routes.goods.get_goods)
  const res = await fetch(routes.goods.get_goods)
  console.log('Is result OK: ', res.ok)
  if (!res.ok) {
    console.log(res.status)
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const goods: {data: any[]} = await getMovies()
  console.log("goods are: ", goods)

  return (
    <main>
      <Box
        sx={{
          maxWidth: '800px',
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center'
        }}
      >

      <Typography sx={{
        fontSize: 36,
        textAlign: 'center',
        margin: '30px 0'
      }}>Список товаров:</Typography>
      <Grid container spacing={2}>
        {goods?.data.map((good, ind) => (
          <Grid
            key={ind}
            item
            xs={6}
          >
            <RecipeReviewCard
              title={good?.title as string}
              description={good.description as string}
          />
          </Grid>

        ))}
      </Grid>
      <Button
        sx={{
          margin: '20px'
        }}
      >
        button
      </Button>
      </Box>
    </main>
  )
}
