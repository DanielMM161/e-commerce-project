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

export interface Products {
    products: Product[]
}

export const ProductEmptyState: Product = {
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
}

export const ProductsEmptyState: Product[] = []
