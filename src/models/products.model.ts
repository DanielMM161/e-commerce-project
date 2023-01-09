interface ProductCategory {
    id: number
    name: string
    image: string
}

export interface Product {
    id: number
    title: string
    price: number
    description: string
    images: string[]
    category: ProductCategory
}

export interface IProductUpdate {
    id: number
    title: string
    price: number
    description: string
}

export interface IProductPost {
    title: string
    price: number
    description: string    
    categoryId: number
}

export interface StateProductSlice {
    products: Product[],
    product: Product | null
    isLoading: boolean
    error: any
}

export const initialState: StateProductSlice = {
    products: [],
    product: null,
    isLoading: false,
    error: null
}
