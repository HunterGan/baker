import {
  Product,
} from "@/entities/product";
import Box from "@mui/material/Box";
import ProductListItem from "./ProductListItem";
import { ProductDialog } from "@/widgets/dialogs/product-card";
import { ProductDialogProvider } from "./context/DialogContext";

export default function ProductList({products}: {products: Product[]}) {

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
