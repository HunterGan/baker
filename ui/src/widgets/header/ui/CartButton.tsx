"use client"

import { FC } from "react";
import Image from 'next/image';
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import styles from "@/shared/lib/styles";
import { useCartStore } from "@/entities/store";

const CartButton: FC = () => {
  const { totalItems, cartItems } = useCartStore()

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <IconButton
        onClick={() => console.log(cartItems)}
      >
        <Badge
          badgeContent={totalItems}
          invisible={!(totalItems >= 0)}
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          sx={{
            "& .MuiBadge-badge": {
              color: styles.colors.bg_light,
              backgroundColor: styles.colors.bg_badge, // Custom background color
            }
          }}
        >
          <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src="/cart_icon.png" // Adjust the path to your SVG file in the public directory
              alt="Cart Icon"
              width={36} // Adjust the width as needed
              height={41} // Adjust the height as needed
              // sx={{
               // '@media (max-width: 900px)': {
                //  width: '19px', // New width for screens less than 900px
               //   height: '23px', // New height for screens less than 900px
               //  },
              // }}
            />
          </Box>
        </Badge>
      </IconButton>
    </Box>

 );
};

export default CartButton;