export interface Category {
    id: number
    name: string
    image: string
}

interface ICategoryState {
    categories: Category[]
}

export const emptyCategory: Category = {
    id: 0,
    name: "",
    image: ""
}

export const categoriesEmptyState: ICategoryState = {
    categories: []
}