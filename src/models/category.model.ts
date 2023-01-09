export interface Category {
    id: number
    name: string
    image: string
}

interface ICategoryState {
    categories: Category[]
}

export const emptyState: ICategoryState = {
    categories: []
}