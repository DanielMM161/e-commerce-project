import { useEffect, useState } from "react"
import { createProductAdapter } from "../adapters/product.adapter"
import { Product } from "../models"
import { getProducts } from "../redux/slices/products.slice"
import { getProductsPagination } from "../services/products.service"
import { useAppDispatch, useAppSelector } from "./redux.hook"
import useFetchAndLoad from "./useFetchAndLoad.hook"

const UseProduct = () => {
    const [pagination, setPagination] = useState(0)
    const { loading, callEndpoint } = useFetchAndLoad()
    const dispatch = useAppDispatch()
    const productState = useAppSelector(state => state.products)
    
    const fetchProducts = async (pagination: number) => {
        const callProducts: Product[] = await callEndpoint(getProductsPagination(pagination))
        const products = callProducts.map((product) => createProductAdapter(product))     
        dispatch(getProducts(products))
    }
    
    useEffect(() => {        
        fetchProducts(pagination)
    }, [pagination])
    
    return { loading, fetchProducts, productState, pagination, setPagination }
}

export default UseProduct