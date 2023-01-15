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

export interface IFetchProductCategoryProps {
    categoryId: number,
    limit: number,
}

export interface IProductPost {
    title: string
    price: number
    description: string    
    categoryId: number
}

export interface StateProductSlice {
    products: Product[],    
    isLoading: boolean
}

export const productsInitialState: StateProductSlice = {
    products: [],    
    isLoading: false,
}
