import { useEffect } from "react"
import { useSelector } from "react-redux"
import { createProductAdapter } from "../../adapters/product.adapter"
import { useAppDispatch, useAppSelector, useFetchAndLoad } from "../../hooks"
import { Product, Products } from "../../models"
import { getProducts } from "../../redux/slices/products.slice"
import { AppStore } from "../../redux/store"
import { getProductById, getProductsPagination } from "../../services/products.service"

const HomePage = () => {
    const { loading, callEndpoint } = useFetchAndLoad()
    const dispatch = useAppDispatch()
    const productState = useAppSelector(state => state.products)
    
    useEffect(() => {
        async function fetchProducts() {
            const callProducts: Product[] = await callEndpoint(getProductsPagination(0))
            const products = callProducts.map((product) => createProductAdapter(product))     
            dispatch(getProducts(products))
        }
        fetchProducts()   
    }, [])

    
    return (
        <>
            {loading ? (
                <div>
                    <h3>loading...</h3>
                </div>
            ) : (
                productState.map((value) => <div>{value.title}</div>)
            )}
        </>
    )
}

export default HomePage