import { ComboProduct, Product } from "../../model/types";

export const isComboProduct = (product: Product): product is ComboProduct => {
  return product.type === 'combo';
 }