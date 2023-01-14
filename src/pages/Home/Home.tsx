import { useEffect } from "react"

import { LoadingPulsating, ProductSlider } from "../../components"
import { HeroImage } from "../../components/HeroImage"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchAllProducts, fetchAllCategories } from "../../services"
import hero from '../../assets/banner.jpg'

import { TopCategories } from "./components"
import { StyleHomePage } from "./styles"




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
            <HeroImage height={640} path={hero} />
            
            <div className="container">
                <TopCategories categories={categories.slice(0,4)} />

                <ProductSlider topProducts={products.slice(0,10)}/>

                <LoadingPulsating show={isLoading} />      
            </div>                    
        </StyleHomePage>
    )
}

export default HomePage

