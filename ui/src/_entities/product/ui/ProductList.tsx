import { FC } from "react";
import {
  Product,
  getProducts,
  CategoryType,
  ComboProduct 
} from "@/_entities/product";
import Box from "@mui/material/Box";
import ProductListItem from "./ProductListItem";

interface ProductListProps {
  category?: CategoryType | ComboProduct['category']
}

const ProductList: FC<ProductListProps> = async () => {
  const products: Product[] = await getProducts()

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        rowGap: '44px',
        columnGap: '44px',
        '&>:last-child': {
          justifySelf: 'stretch'
        }
      }}
    >
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          product={product}
        />
      ))}
    </Box>
  )
}

export default ProductList