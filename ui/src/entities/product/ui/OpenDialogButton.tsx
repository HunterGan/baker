'use client'

import { FC, ReactNode } from "react"
import { Product } from "../model/types"
import Box from "@mui/material/Box"
import { useProductDialog } from "./context/DialogContext"

interface OpenDialogLayoutProps {
  product: Product
  children: ReactNode
}

const OpenDialogLayout: FC<OpenDialogLayoutProps> = ({product, children}) => {
  const { openProduct } = useProductDialog()

  return (
    <Box
      onClick={() => openProduct(product)}
    >
      {children}
    </Box>
  )
}

export default OpenDialogLayout
