import { useEffect } from "react"
import { createCategoryAdapter } from "../../adapters/category.adapter"
import { createProductAdapter } from "../../adapters/product.adapter"
import { useAppDispatch, useAppSelector, useCategories, useFetchAndLoad } from "../../hooks"
import { Category, Product } from "../../models"
import { getCategories } from "../../redux/slices/categories.slice"
import { getAllCategory } from "../../services/category.service"
//import { getProductsPagination } from "../../services/products.service"
import ProductSlider from "./components/ProductSlider/ProductSlider"
import TopCategories from "./components/TopCategories/TopCategories"
import { MainImage } from "./styled-components/main-image.styled.component"

const HomePage = () => {
    // const { loading, callEndpoint } = useFetchAndLoad()
    // const { categoriesState } = useCategories()
    // const dispatch = useAppDispatch()
    // const productState = useAppSelector(state => state.products)
    
    
    
    const fetchProducts = async () => {
        // const callProducts: Product[] = await callEndpoint(getProductsPagination(0))
        // const products = callProducts.map((product) => createProductAdapter(product))     
        // dispatch(getProducts(products))
    }
    
    useEffect(() => {

    }, [])

    
    return (
        // <>
        //     {loading ? (
        //         <div>
        //             <h3>loading...</h3>
        //         </div>
        //     ) : (
        //         <>                   
        //             <MainImage height={640} src="https://api.lorem.space/image/furniture?w=640&h=480&r=3289"/>
        //             {/* <TopCategories categories={categoriesState.slice(0, 4)} /> */}
        //             {/* <ProductSlider topProducts={productState.slice(0,10)}/> */}
        //         </>
        //     )}
        // </>
<></>
    )
}

export default HomePage

