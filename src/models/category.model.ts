export interface ApiCategory {
    id: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
}

export interface Category {
    id: number
    name: string
    image: string
}

export interface Categories {
    categories: Category[]
}

export const CategoriesEmptyState: Categories = { categories: [] } 