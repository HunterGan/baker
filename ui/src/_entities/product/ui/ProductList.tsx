import { FC } from "react";
import {
  Product,
  getProducts,
  CategoryType,
  ComboProduct 
} from "@/_entities/product";
import Box from "@mui/material/Box";
import ProductListItem from "./ProductListItem";
import { ProductDialog } from "@/_widgets/dialogs/product-card";
import { ProductDialogProvider } from "./context/DialogContext";

interface ProductListProps {
  category?: CategoryType | ComboProduct['category']
}

const ProductList: FC<ProductListProps> = async () => {
  const products: Product[] = await getProducts()

  return (
    <ProductDialogProvider>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 330px)',
          columnGap: 'auto',
          gridTemplateRows: 'auto',
          rowGap: '44px',
          justifyContent: 'space-between',
          marginBottom: '80px'
        }}
      >
        {products.map((product) => (
          <ProductListItem
            key={product.id}
            product={product}
          />
        ))}

        <ProductDialog/>
      </Box>
    </ProductDialogProvider>
  )
}



export default ProductList