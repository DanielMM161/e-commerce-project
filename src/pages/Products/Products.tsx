import { useEffect, useState } from "react"
import { BreadCrumbs } from "../../components/BreadCrumbs"
import { useAppDispatch, useAppSelector, useCategories, useFetchAndLoad, useProduct } from "../../hooks"
import { CardProduct } from "../../components/CardProduct"
import ButtonLoader from "./components/ButtonLoader/ButtonLoader"
import { StyledProducts } from "./styled-component/products.styled.component"
import { Filter, SideBar } from "../../components"
import { fetchAllProducts, resetSortProduct, sortProductByCategories } from "../../redux/slices/products.slice"
import { Category, Product } from "../../models"
import { getAllCategory, getProductsByCategory, getProductsPagination } from "../../services"
import { createCategoryAdapter, createProductAdapter } from "../../adapters"
import { fetchAllCategories, getCategories } from "../../redux/slices/categories.slice"
import { IFilter } from "../../components/Filter/Filter"

interface PrevState {
    prevState: Product[],
    prevPagination: number
}

const ProductsPage = () => {
    
    const { loading, callEndpoint } = useFetchAndLoad()
    
    const dispatch = useAppDispatch()
    const productState = useAppSelector(state => state.products)
    const categoriesState = useAppSelector(state => state.categories)
        
    const [pagination, setPagination] = useState(10)
    
    // Filter
    const [openFilter, setOpenFilter] = useState(false)
    const [valueSlider, setValueSlider] = useState<number[]>([0, 1000]);
    const [maxPrice, setMaxPrice] = useState(50)

    useEffect(() => {
        
        let max: number = 0
        let min: number = 40
        productState.products.forEach((product) => {
            if (product.price > max) {
                max = product.price
            }
        })
        setMaxPrice(max)
    
    }, [productState.products])
    
    useEffect(() => {        
        dispatch(fetchAllCategories())
    }, [])
    
    useEffect(() => {       
          dispatch(fetchAllProducts(pagination))
    }, [pagination])
        
    useEffect(() => {             
        disableScrollBody()
    }, [openFilter])
    
    function disableScrollBody() {
        if (openFilter) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }
    
    function filterProdcuts(filter: IFilter) {
        const { ids, prices } = filter
        console.log("filter --> ", filter);

        dispatch(resetSortProduct())
        if (ids.length > 0 || prices.min > 0) {         
            console.log("filterProducts --> ", filterProducts(productState.products, filter))            
           // dispatch(sortProductByCategories(filter))  
        } else {
            dispatch(resetSortProduct())
        }    
    }
    
    function filterProducts(products: Product[], filter: IFilter): Product[] {
        let newProducts: Product[] = []
        const {ids, prices} = filter
           
        ids.forEach(value => {
            const filter = products.filter(product => product.category.id === value)            
            newProducts = [...newProducts, ...filter]
        })
            
        newProducts = newProducts.filter(product => ((product.price >= prices.min && product.price <= prices.max) || prices.max === 0))        
        return newProducts
    }
    
    return (
        <>
            <BreadCrumbs links={[{ path: "/Products", name: "Products" }]} />
            
            {categoriesState.length > 0 ? <button onClick={() => setOpenFilter(!openFilter)}>OPEN</button> : null}
            
            <StyledProducts>
                
                {productState.productsFiltered.length > 0 ? (
                    productState.productsFiltered.map((product) => {
                        const { id, title, price, description, images, category } = product
                        return (
                            <>
                                <div>{ category.id}</div>
                             <CardProduct id={id} title={title} price={price} image={images[0]} />
                            </>
                        )
                    })
                ): (
                    productState.products.map((product) => {
                        const { id, title, price, description, images, category } = product
                        return (
                            <>
                                <div>{ category.id}</div>
                             <CardProduct id={id} title={title} price={price} image={images[0]} />
                            </>
                        )
                    })
                )}                    
            </StyledProducts>
            
            <ButtonLoader loading={loading} onClick={() => setPagination(pagination + 10)} />
            
            <SideBar
                title="Filter"
                isOpen={openFilter}
                closeSideBar={() => setOpenFilter(!openFilter)}
            >
                {
                    <Filter
                        sortProducts={(filter) => filterProdcuts(filter)}
                        categories={categoriesState}
                        maxPrice={maxPrice}                   
                    />
                }
            </SideBar>
        </>
    )
}

export default ProductsPage
