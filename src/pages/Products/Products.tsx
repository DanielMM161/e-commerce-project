import { useEffect, useState } from "react"
import { useNavigate } from 'react-router';
import { BreadCrumbs } from "../../components/BreadCrumbs"
import { Product } from "../../models"
import { addCartItem } from "../../redux/slices"
import { 
    useAppDispatch, 
    useAppSelector, 
    UseModal, 
    useSideBar
} from "../../hooks"
import { 
    ButtonLoader,
    CardProduct, 
    CreateProduct, 
    Filter, 
    IFilter, 
    IFilterPrices, 
    Modal, 
    SideBar  
} from "../../components"
import { fetchAllProducts, fetchAllCategories, createProduct} from "../../services"
import { LoadingPulsating } from "../../components/LoadingPulsating/LoadingPulsating"
import { NoProductFound } from "../../components/NoProductFound"
import { Button } from "../../components/Button/Button";
import bannerProduct from '../../assets/banner-product.jpg'

import FilterListIcon from '@mui/icons-material/FilterList';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { StyledProductPage } from "./styles";
import { HeroImage } from "../../components/HeroImage";


const ProductsPage = () => {
    
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const productState = useAppSelector(state => state.products)
    const { products, isLoading } = productState
    const categoriesState = useAppSelector(state => state.categories)
    const { categories } = categoriesState
    const { showModal, toggle } = UseModal()    
    const [ pagination, setPagination ] = useState(10) 
    // Filter
    const { showSideBar, toggle: toggleSideBar } = useSideBar()
    const [ filter, setFilter ] = useState<IFilter | null>(null)
    
    useEffect(() => {        
        dispatch(fetchAllCategories())
    }, [])
    
    useEffect(() => {     
          dispatch(fetchAllProducts(pagination))
    }, [pagination])
    
    function handleCreateProduct(id: number) {
        toggle()
        navigate(`/product/${id}`)
    }

    function showProducts(products: Product[]) {
        return (
            <div className="products-container">
            {products.map((product) => {
                const { id, title, price, images } = product
                return (
                    <CardProduct
                        id={id}
                        title={title}
                        price={price}
                        image={images[0]}
                        addCart={() => dispatch(addCartItem({quantity: 1, product: product}))}
                    />
                )
            })}
            </div>
        )
    }

    function handleFilters(ids: number[], prices: IFilterPrices[]): React.ReactNode {        
        let newProducts: Product[] = []
        const filter: IFilter = {
            ids,
            prices
        }
        
        if(ids.length > 0) {
            ids.forEach(value => {
                const productsFilter = products.filter(product => {
                    let filterPrice: boolean = true
                    if(prices[0].min !== 0) {
                        filterPrice = product.price >= prices[0].min && product.price <= prices[0].max
                    }               
                    if(product.category.id === value 
                        && (filterPrice)) {                                                
                            return true
                    }
                    return false
                })             
                newProducts = [...newProducts, ...productsFilter]
            })
        } else {
            newProducts = products.filter(product => ((product.price >= prices[0].min && product.price <= prices[0].max) || prices[0].max === 0))
        }

        if(newProducts.length > 0) {
            return showProducts(newProducts)
        }

        return <NoProductFound />    
    }
        
    function filterProducts() {        
        if(filter != null) { 
           return handleFilters(filter.ids, filter.prices)
        }

        return showProducts(products)             
    }
    
    return (
        <StyledProductPage>
            <HeroImage height={640} path={bannerProduct}/>            
            <div className="container">
                <BreadCrumbs links={[{ path: "/Products", name: "Products" }]} />
                
                <div className="buttons-container">
                    <Button title="Filters" className="button-filter" onClick={() => toggleSideBar()}>
                        <FilterListIcon />
                    </Button>

                    <Button title="Add New Product" className="button-filter" onClick={() => toggle()}>
                        <AddCircleOutlineIcon />
                    </Button>
                </div>
                
                {filterProducts()}
                
                <ButtonLoader loading={isLoading} onClick={() => setPagination((prev) => prev + 5)} />

                <Modal
                    title="Create Product"
                    showModal={showModal}
                    closeDialog={() => toggle()}
                >
                    <CreateProduct 
                        categories={categories} 
                        productCreated={(product) => handleCreateProduct(product)}
                    />
                </Modal>
                
                <SideBar
                    title="Filter"
                    isOpen={showSideBar}
                    closeSideBar={() => toggleSideBar()}
                >
                    <Filter
                        sortProducts={(filter) => setFilter(filter)}
                        categories={categories}
                        prevFilterState={filter}                              
                    />
                </SideBar>

                <LoadingPulsating show={isLoading} />
            </div>
        </StyledProductPage>
    )
}

export default ProductsPage
