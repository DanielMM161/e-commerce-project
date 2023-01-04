import { useEffect, useState } from "react"
import { createProductAdapter } from "../adapters/product.adapter"
import { Product } from "../models"
import { setEmptyState } from "../redux/slices/products.slice"
import { getProductsByCategory, getProductsPagination } from "../services/products.service"
import { useAppDispatch, useAppSelector } from "./redux.hook"
import useFetchAndLoad from "./useFetchAndLoad.hook"

interface PrevState {
        prevState: Product[],
        prevPagination: number
}

const UseProduct = () => {
    
    // const [pagination, setPagination] = useState(10)
    // const [prevProductState, setPrevProductState] = useState<PrevState>({
    //     prevState: [],
    //     prevPagination: 0
    // })
    // const { loading, callEndpoint } = useFetchAndLoad()
    // const dispatch = useAppDispatch()
    // const productState = useAppSelector(state => state.products)
    
    // const fetchProducts = async () => {      
    //     const callProducts: Product[] = await callEndpoint(getProductsPagination(pagination))
    //     const products = callProducts.map((product) => createProductAdapter(product))

    //     dispatch(setProducts(products))
    //     setPrevProductState({prevState: products, prevPagination: pagination})
    // }
    
    // const fetchProductsByCategories = async (categoryId: number) => {
    //     console.log("fetchProductsByCategories");        
    //     const callProducts: Product[] = await callEndpoint(getProductsByCategory(pagination, categoryId))
    //     let products = callProducts.map((product) => createProductAdapter(product))
    //     return products
    // }
    
    // useEffect(() => {              
    //     fetchProducts()
    // }, [pagination])
    
    // return { loading, productState, pagination, setPagination, fetchProductsByCategories, dispatch, prevProductState }
}

export default UseProduct