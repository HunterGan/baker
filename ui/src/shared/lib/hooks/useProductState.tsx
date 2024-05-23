'use client'

import { Product } from "@/entities/product";
import { useState } from "react";

// NOTE this module needs to be checked

type AdditionsState = {
  [key: string]: number
}

const useProductState = (product: Product | null) => {
  const [amount, setAmount] = useState(0)

  const changeAmount = (newAmount: number) => setAmount(newAmount)

  const hasAdditions = product?.additions && product.additions.length > 0

  const additionsInitialState = hasAdditions
    ? product.additions!.reduce((acc, addition) => {
        acc[addition.title] = 0
        return acc
      }, {} as AdditionsState)
    : null
  console.log('AdditionsState is: ', additionsInitialState);
  
  const [additionsState, setAdditionsState] = useState<AdditionsState | null>(additionsInitialState)
  
  const changeAdditionsState = (addition: keyof AdditionsState, newAmount: number) => {
    if (!additionsState) return

    setAdditionsState({...additionsState, [addition]: newAmount})
  }

  return {
    amount,
    changeAmount,
    additionsState,
    changeAdditionsState,

  }
}

export default useProductState