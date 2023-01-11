import { useEffect } from "react"
import { LoadingPulsating, ProductSlider } from "../../components"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { Category } from "../../models"
import { fetchAllProducts, fetchAllCategories } from "../../services"
import { TopCategories } from "./components"
import { StyleHomePage } from "./styled-components/home.styled.component"


import { MainImage } from "./styled-components/main-image.styled.component"

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
            <img className="main-image" height={640} src="https://api.lorem.space/image/furniture?w=640&h=480&r=3289"/>

            <TopCategories categories={categories.slice(0,4)} />

            <div className="top-product-container">
                <h4>Top Products</h4>
                <ProductSlider topProducts={products.slice(0,10)}/>
            </div>

            <LoadingPulsating show={isLoading} />      
        </StyleHomePage>
    )
}

export default HomePage

