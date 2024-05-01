import * as React from 'react';
import { Product } from '@/_entities/product';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from '@/_shared/lib/styles';
import OpenDialogLayout from './OpenDialogButton';

interface ProductListItemProps {
  product: Product
}

const ProductListItem: React.FC<ProductListItemProps> = ({product}) => {
  return (
    <Card
      sx={{
        maxWidth: 330,
        height: 400,
        backgroundColor: styles.colors.bg_light,
        borderRadius: '7px',
      }}
    >
      <OpenDialogLayout
        product={product}
      >
        <Box sx={{padding: '7px'}}>
          <CardMedia
            component="img"
            height={212}
            width={314}
            image={product.img}
            alt={`Image of ${product.title} from category ${product.category}`}
            sx={{
              marginBottom: '6px',
              borderRadius: '7px',
            }}
          />
        </Box>

        <Box
          sx={{
            padding: '0 22px',
            marginTop: '9px',
            display: 'flex',
            flexDirection: 'column',
            height: '95px',
            gap: '8px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontWeight: 500,
            justifyContent: 'flex-start'
          }}
        >
          <Typography fontWeight={500} sx={{fontSize: '24px', color: styles.colors.text_primary, lineHeight: '100%'}}>{product.title.toUpperCase()}</Typography>
          <Typography fontWeight={500} sx={{textWrap: 'wrap', fontSize: '16px', color: styles.colors.text_secondary, lineHeight: '100%'}}>{product.description}</Typography>
        </Box>
      </OpenDialogLayout>
      <Box
        sx={{
          width: '100%',
          borderBottom: `2px solid ${styles.colors.stroke}`,
          opacity: 0.6,
        }}
      />
      <Box
        sx={{
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 22px',

        }}
      >
        <Typography fontWeight={500} sx={{color: styles.colors.text_primary, fontSize: '20px'}}>{`Цена: ${product.price} Руб.`}</Typography>
        <Button
          sx={{
            padding: '0 12px',
            height: '34px',
            color: styles.colors.text_button,
            backgroundColor: styles.colors.bg_button_light,
            borderRadius: '7px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'none',
          }}
        >
          <Typography
            fontWeight={500}
            fontSize={20}
          >
            В корзину
          </Typography>
        </Button>
      </Box>
    </Card>
  );
}

export default ProductListItem
