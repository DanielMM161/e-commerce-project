interface ApiProductCategory {
    id: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
}

interface ProductCategory {
    id: number
    name: string
    image: string
}

export interface ApiProduct {
    id: number
    title: string
    price: number
    description: string
    images: string[]
    creationAt: string
    updatedAt: string
    category: ApiProductCategory
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

export interface ProductsState {
    products: Product[],
    isLoading: boolean
}

interface ProductState {
    product: Product
    isLoading: boolean
}

export const singleProductEmptyState: ProductState = {
    product: {
        id: 0,
        title: "",  
        price: 0,
        description: "",
        images: [],
        category: {
            id: 0,
            name: "",
            image: ""
        }
    },
    isLoading: false
}

export const ProductsEmptyState: ProductsState = {
    products: [],
    isLoading: false
}
