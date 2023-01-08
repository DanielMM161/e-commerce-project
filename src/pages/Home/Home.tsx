import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchAllCategories } from "../../redux/slices"
import { fetchAllProducts } from "../../services"
import { TopCategories, ProductSlider } from "./components"


import { MainImage } from "./styled-components/main-image.styled.component"

const HomePage = () => {

    const dispatch = useAppDispatch()
    const productState = useAppSelector(state => state.products)
    const categoriesState = useAppSelector(state => state.categories)

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
                    <TopCategories categories={categoriesState.slice(0, 4)} />
                    <ProductSlider topProducts={products.slice(0,10)}/>
                </>
            )}
        </>
    )
}

export default HomePage

