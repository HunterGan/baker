"use client";

import React, { FC, useEffect, useState } from "react";
import { Product } from "@/entities/product";
import { ProductSlider } from "@/features/product-slider";
import { useProductDialog } from "@/entities/product/ui/context/DialogContext";
import styles from "@/shared/lib/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';

import CountField from "@/shared/ui/CountField";
import { useCartStore } from "@/entities/store";

interface AdditionState {
  [key: string]: {
    addition: Product
    amount: number
  }
}

const ProductDialog:FC = () => {
  const { open, closeDialog: onClose, selectedProduct: product } = useProductDialog()

  const [productAmount, setProductAmount] = useState(1)

  const [additionsState, setAdditionsState] = useState<AdditionState | null>(null)

  const { addToCart } = useCartStore()

  const onChangeAmount = (value: number) => {
    if (value < 0) return

    setProductAmount(value)
  }

  const onChangeAddition = (title: string) => (value: number) => {
    if (value < 0 || !additionsState || !(title in additionsState)) return
    
    setAdditionsState({...additionsState, [title]: {...additionsState[title], amount: value}})
  }

  const getTotal = () => {
    if (!product) return 'Error'

    const productTotal = productAmount * product?.price
    const additionsTotal = !additionsState
      ? 0
      : Object.values(additionsState).map(({addition, amount}) => addition.price * amount).reduce((acc, x) => acc + x, 0)
    
    return productTotal + additionsTotal
  }

  const onAddToCart = () => {
    if (!product) return

    addToCart({product: product, amount: productAmount})

    if (additionsState) {
      Object.values(additionsState).forEach(({addition, amount}) => {
        addToCart({
          product: addition,
          amount: amount
        })
      })
    }
    onClose()
  }

  useEffect(() => {
    if (!open) {
      setProductAmount(1)
      setAdditionsState(null)
    }

    if (!product) {
      onClose()
    }
    
    if (product?.additions) {
      setAdditionsState({
        ...product.additions.reduce((acc, addition) => {
          acc[addition.title] = {
            addition: addition,
            amount: 0
          }
          return acc
        }, {} as AdditionState)
      })
    }

    setProductAmount(1)
    // eslint-disable-next-line
  }, [open, product])
  
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      PaperProps={{
        sx: {
          padding: '20px',
          margin: 0,
          borderRadius: '15px',
          maxWidth: '732px',
          backgroundColor: styles.colors.bg_light,
          position: 'relative',
          overflow: 'visible',
        }
      }}
    >
      <ProductSlider
        product={product}
      />
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: '-35px',
          top: '-17.5px',
          color: '#ffff',
          zIndex: 200,
          fontSize: 35
        }}
      >
       &#215;
      </IconButton>
      <DialogContent
        sx={{
          margin: 0,
          padding: 0,
          overflowY: 'hidden'
        }}
      >
        {/* Title with price block */}
        <Box
          sx={{
            marginTop: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography sx={{fontSize: 48, color: styles.colors.text_primary, lineHeight: '48px', fontWeight: 600}}>{product?.title}</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '15px',
              alignItems: 'center',
              flex: '0 0 auto',
            }}
          >
            <Typography sx={{fontSize: 24, color: styles.colors.text_secondary, fontWeight: 600, lineHeight: '24px'}}>Кол-во:</Typography>
            <CountField
              current={productAmount}
              onChange={onChangeAmount}
            />
          </Box>
        </Box>

        {/* Product contains of block */}
        <Box
          sx={{
            marginTop: '15px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
         <Typography sx={{fontSize: '24px', lineHeight: '24px', fontWeight: 600, color: styles.colors.text_primary}}>Состав:</Typography>
         <Typography sx={{fontSize: '24px', lineHeight: '24px', fontWeight: 500, color: styles.colors.text_secondary}}>{product?.description}</Typography>
        </Box>

        {/* Divider */}
        {additionsState && <Box
          sx={{
            width: '100%',
            borderBottom: '2px solid #493931',
            opacity: 0.6,
            margin: '20px 0'
          }}
        />}
        {additionsState &&
          <Box
            id='sdsdsdsdsdsd'
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography sx={{fontSize: '24px', lineHeight: '24px', fontWeight: 600, color: styles.colors.text_primary}}>ДОБАВКИ</Typography>
            <Box
              sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, auto)',
                columnGap: '30px',
                rowGap: '15px',

                marginTop: '15px'
              }}
            >
              {Object.values(additionsState).map(({addition, amount}) => (
                <Box
                  key={addition.title}
                  sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexBasis: '48%'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Typography sx={{fontSize: '24px', lineHeight: '24px', fontWeight: 500, color: styles.colors.text_secondary}}>{addition.title}</Typography>
                    <Typography sx={{fontSize: '20px', lineHeight: '20px', fontWeight: 500, color: styles.colors.text_primary}}>{addition.price} Руб.</Typography>
                  </Box>
                  <CountField
                    current={amount}
                    onChange={(value) => onChangeAddition(addition.title)(value)}
                    size="sm"
                  />
                </Box>
              ))}
            </Box>
          </Box>
        }
          <DialogActions
            sx={{
              marginTop: '30px'
            }}
          >
            <Button
              onClick={onAddToCart}
              // disabled={!phone.isValid}

              fullWidth
              sx={{
                padding: '0 12px',
                height: '83px',
                color: styles.colors.text_button,
                backgroundColor: styles.colors.bg_button_light,
                borderRadius: '7px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textTransform: 'none',
              }}
            >
            <Typography sx={{fontSize: '34px', lineHeight: '34px', fontWeight: 600, color: styles.colors.text_white}}>ДОБАВИТЬ ТОВАР НА {getTotal()} руб.</Typography>            </Button>
          </DialogActions>
      </DialogContent>
     
    </Dialog>
  )
}

export default ProductDialog
