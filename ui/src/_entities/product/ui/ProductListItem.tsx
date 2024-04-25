import { FC } from "react";
import { Product } from "../model/types";
import Box from "@mui/material/Box";

interface ProductListItemProps {
  product: Product
}

const ProductListItem: FC<ProductListItemProps> = ({product}) => {
  return (
    <Box
      sx={{
        width: '330px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      
    </Box>
  )
}

export default ProductListItem
