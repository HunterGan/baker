'use client'

import { FC, ReactNode, createContext, useContext, useState } from 'react';
import { Product } from '../../model/types';

interface ContextProps {
  open: boolean
  selectedProduct: Product | null
  openProduct: (product: Product) => void
  closeDialog: () => void
}

interface ProviderProps {
  children: ReactNode
}

const ProductDialogContext = createContext<ContextProps>({
  open: false,
  selectedProduct: null,
  openProduct: () => {},
  closeDialog: () => {},
});

export const useProductDialog = () => useContext(ProductDialogContext);

export const ProductDialogProvider: FC<ProviderProps> = ({ children }) => {
 const [open, setOpen] = useState(false);
 const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

 const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
 };

 const closeDialog = () => {
    setOpen(false);
 };

 return (
    <ProductDialogContext.Provider value={{ open, openProduct, closeDialog, selectedProduct }}>
      {children}
    </ProductDialogContext.Provider>
 );
};