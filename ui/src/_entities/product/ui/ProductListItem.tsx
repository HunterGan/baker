'use client'

import * as React from 'react';
import { Product } from '@/_entities/product';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from '@/_shared/lib/styles';

interface ProductListItemProps {
  product: Product
}

const ProductListItem: React.FC<ProductListItemProps> = ({product}) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card
      sx={{
        maxWidth: 330,
        height: 400,
        backgroundColor: styles.colors.bg_light,
        borderRadius: '7px',
      }}
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
          gap: '12px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          fontWeight: 'semibold',
          justifyContent: 'flex-start'
        }}
      >
        <Typography sx={{fontSize: '24px', color: styles.colors.text_primary}}>{product.title}</Typography>
        <Typography sx={{fontSize: '16px', color: styles.colors.text_secondary}}>{product.description}</Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          borderBottom: '2px solid #493931',
          opacity: 0.6,
        }}
      />
      <Box
        sx={{
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography>{`Цена: ${product.price} Руб.`}</Typography>
        <Button
          sx={{
            padding: '7px 12px',
            color: '#FBFBFB',
            backgroundColor: '#94847A',
            borderRadius: '7px',
          }}
        >
          В корзину
        </Button>
      </Box>
    </Card>
  );
}

export default ProductListItem
