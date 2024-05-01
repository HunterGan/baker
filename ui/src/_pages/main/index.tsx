import Box from "@mui/material/Box";
import Slider from "./ui/Slider";
import AboutBar from "./ui/AboutBar";
import CategoriesLinks from "./ui/CategoriesLinks";
import DeliveryConditions from "./ui/DeliveryConditions";
import { ProductList, getCategoriesLinks, getProducts } from "@/_entities/product";

export default async function MainPage() {
  const products = await getProducts()
  const categoriesLinks = await getCategoriesLinks()

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <Slider/>
        <DeliveryConditions/>

        <CategoriesLinks links={categoriesLinks}/>
        <ProductList products={products}/>
        
        <AboutBar/>
      </Box>
    </>
  )
}
