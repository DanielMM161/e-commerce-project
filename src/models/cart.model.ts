import { Product } from "./products.model";

export interface Cart {
  quantity: number,
  product: Product
}

export const CartEmptyState: Cart[] = []