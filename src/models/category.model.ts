export interface Category {
    id: number
    name: string
    image: string
}

interface ICategoryState {
    categories: Category[]
}

export const categoriesEmptyState: ICategoryState = {
    categories: []
}