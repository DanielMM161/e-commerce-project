import { Product } from "../models";

export const createProductAdapter = (product: any): Product => ({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    images: product.images,
    category: product.category
})