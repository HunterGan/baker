'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import styles from '@/_shared/lib/styles';
import { Product } from '@/_entities/product';

interface ProductListItemProps {
  product: Product
}

const ProductListItem: React.FC<ProductListItemProps> = ({product}) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card
      sx={{
        width: 330,
        height: 400,
        backgroundColor: styles.colors.bg_light,
        borderRadius: '7px',
      }}
    >
      <Box sx={{padding: '8px'}}>
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
            display: 'flex',
            flexDirection: 'column',
            height: '115px',
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
            marginBottom: '30px'
          }}
        />
    </Card>
  );
}

export default ProductListItem
