import { Category } from "../models";

export const createCategoryAdapter = (category: any): Category => ({
    id: category.id,
    name: category.name,
    image: category.image
})