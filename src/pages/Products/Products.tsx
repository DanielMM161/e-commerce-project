import { useEffect, useState } from "react"
import { BreadCrumbs } from "../../components/BreadCrumbs"
import { useAppDispatch, useAppSelector, UseSideBar } from "../../hooks"
import { CardProduct } from "../../components/CardProduct"
import ButtonLoader from "./components/ButtonLoader/ButtonLoader"
import { StyledProducts } from "./styled-component/products.styled.component"
import { Filter, SideBar } from "../../components"
import { fetchAllProducts } from "../../redux/slices/products.slice"
import { Product } from "../../models"
import { fetchAllCategories } from "../../redux/slices/categories.slice"
import { IFilter } from "../../components/Filter/Filter"

const ProductsPage = () => {
    
    const dispatch = useAppDispatch()
    const productState = useAppSelector(state => state.products)
    const categoriesState = useAppSelector(state => state.categories)
        
    const [pagination, setPagination] = useState(1)
    
    // Filter
    const {showSideBar, toggle} = UseSideBar()
    const [filter, setFilter] = useState<IFilter | null>(null)
    
    useEffect(() => {        
        dispatch(fetchAllCategories())
    }, [])
    
    useEffect(() => {       
          dispatch(fetchAllProducts(pagination))
    }, [pagination])
        
    useEffect(() => {             
        disableScrollBody()
    }, [showSideBar])
    
    function disableScrollBody() {
        if (showSideBar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }
        
    function filterProducts(products: Product[], filter: IFilter) {                
        let newProducts: Product[] = []
        const {ids, prices} = filter

        if(ids.length > 0) {
            ids.forEach(value => {
                const filter = products.filter(product => product.category.id === value)            
                newProducts = [...newProducts, ...filter]
            })
            if(prices != null) {
                newProducts = newProducts.filter(product => ((product.price >= prices.min && product.price <= prices.max) || prices.max === 0))
            }
        } else {
            if(prices != null) {
                newProducts = products.filter(product => ((product.price >= prices.min && product.price <= prices.max) || prices.max === 0))
            }
        }

        if(newProducts.length > 0) {
            return newProducts.map((product) => {
                const { id, title, price, description, images } = product
                return  <CardProduct id={id} title={title} price={price} image={images[0]} />
            })
        }

        return (
            <div>No product found</div>
        )
        
    }
    
    return (
        <>
            <BreadCrumbs links={[{ path: "/Products", name: "Products" }]} />
            
            {categoriesState.length > 0 ? <button onClick={() => toggle()}>OPEN</button> : null}
            
            <StyledProducts>

            {filter === null ? (
                productState.products.map((product) => {
                    const { id, title, price, images } = product
                    return <CardProduct id={id} title={title} price={price} image={images[0]}/>
                })
            ) : (
                filterProducts(productState.products, filter)
            )}
            </StyledProducts>
            
            <ButtonLoader loading={productState.isLoading} onClick={() => setPagination(pagination + 5)} />
            
            <SideBar
                title="Filter"
                isOpen={showSideBar}
                closeSideBar={() => toggle()}
            >
                {
                    <Filter
                        sortProducts={(filter) => setFilter(filter)}
                        categories={categoriesState}                                     
                    />
                }
            </SideBar>
        </>
    )
}

export default ProductsPage
