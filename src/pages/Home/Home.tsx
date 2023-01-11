import { useEffect } from "react"
import { ProductSlider } from "../../components"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { Category } from "../../models"
import { fetchAllProducts, fetchAllCategories } from "../../services"
import { TopCategories } from "./components"


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
        <>
            {isLoading ? (
                <div>
                    <h3>loading...</h3>
                </div>
            ) : (
                <>                   
                    <MainImage height={640} src="https://api.lorem.space/image/furniture?w=640&h=480&r=3289"/>
                    <TopCategories categories={categories.slice(0,4)} />
                    <ProductSlider topProducts={products.slice(0,10)}/>
                </>
            )}            
        </>
    )
}

export default HomePage

