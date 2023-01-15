import { useEffect } from "react"

import { LoadingPulsating, ProductSlider } from "../../components"
import { HeroImage } from "../../components/HeroImage"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchAllProducts, fetchAllCategories } from "../../services"

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
            <HeroImage height={640} path={"https://api.lorem.space/image/fashion?w=2000&h=500&r=379"} />            
            <div className="container">
                <TopCategories categories={categories.slice(0,4)} />
                <ProductSlider title="Top Products" products={products.slice(0,10)}/>
                <LoadingPulsating show={isLoading} />      
            </div>                    
        </StyleHomePage>
    )
}

export default HomePage

