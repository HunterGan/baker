import { FC } from "react";
import { CategoryType, ComboProduct, Product, getProducts } from "@/_entities/product";
import Box from "@mui/material/Box";
import RecipeReviewCard from "@/_shared/ui/common/Card/Card";
import axios from "axios";
import api from "../api/config/api";
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
        alignItems: 'center'
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