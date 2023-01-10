import { Product } from "./products.model";

export interface IAddCart {
  quantity: number,
  product: Product
}

export interface Cart {
  quantity: number,
  product: Product
}

export const cartEmptyState: Cart[] = []