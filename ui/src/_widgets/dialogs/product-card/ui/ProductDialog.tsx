"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Product } from "@/_entities/product";
import { ProductSlider } from "@/_features/product-slider";
import { useProductDialog } from "@/_entities/product/ui/context/DialogContext";

interface IProductDialog {
  open?: boolean
  onClose?: () => void
  product?: Product
}

const ProductDialog:FC<IProductDialog> = () => {

  const { open, closeDialog: onClose, selectedProduct: product } = useProductDialog()
  const phone = {textmask: '', isValid: true}

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      PaperProps={{
        sx: {
          padding: '20px',
          borderRadius: '15px',
          maxWidth: '732px',
          backgroundColor: '#DACEC5',
          position: 'relative',
          overflow: 'visible',
        }
      }}
    >
      <ProductSlider
        product={product}
      />
      {/* <DialogTitle>
       Hleb rganoi
      </DialogTitle> */}
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: -20,
          color: 'black',
          zIndex: 200,
        }}
      >
        XY
      </IconButton>

      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your phone here. We
          will send updates occasionally.
        </DialogContentText>


        <DialogActions
        sx={{
          marginTop: '24px'
        }}
      >
        <Button
          type="submit"
          onClick={() => console.log(phone.textmask)}
          disabled={!phone.isValid}
          variant="contained"
          size="large"
          fullWidth
        >
          Отправить код
        </Button>
      </DialogActions>
      <DialogContentText
        sx={{
          marginTop: '8px',
          fontSize: 10
        }}
      >
        Продолжая, вы соглашаетесь
        <Link href={'#'}> со сбором и обработкой персональных данных и пользовательским соглашением</Link>
      </DialogContentText>
      </DialogContent>
     
    </Dialog>
  )
}



export default ProductDialog
