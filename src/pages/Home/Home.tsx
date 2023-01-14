import { useEffect } from "react"

import { LoadingPulsating, ProductSlider } from "../../components"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchAllProducts, fetchAllCategories } from "../../services"

import { TopCategories } from "./components"
import { StyleHomePage } from "./styled-components/home.styled.component"


const HomePage = () => {

    const dispatch = useAppDispatch()
    const productState = useAppSelector(state => state.products)
    const categoriesState = useAppSelector(state => state.categories)
    const {categories} = categoriesState
    const {products, isLoading} = productState

    
    useEffect(() => {        
        dispatch(fetchAllCategories())
        dispatch(fetchAllProducts(10))
    }, [])
    
    return (
        <StyleHomePage>
                        
            <img className="main-image" height={640} src="../../assets/banner.jpg"/>

            <TopCategories categories={categories.slice(0,4)} />

            <ProductSlider topProducts={products.slice(0,10)}/>
            
            <LoadingPulsating show={isLoading} />      
        </StyleHomePage>
    )
}

export default HomePage

