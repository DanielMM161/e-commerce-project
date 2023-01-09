import { useEffect, useState } from "react"
import { BreadCrumbs } from "../../components/BreadCrumbs"
import { ButtonLoader } from "./components/ButtonLoader"
import { StyledButtonContainer, StyledProducts } from "./styled-component/products.styled.component"
import { Product } from "../../models"
import { 
    addCartItem, 
    addNewItem, 
    fetchAllCategories,
} from "../../redux/slices"
import { 
    useAppDispatch, 
    useAppSelector, 
    UseModal, 
    UseSideBar, 
    UseUserSession 
} from "../../hooks"
import { 
    CardProduct, 
    CreateProduct, 
    Filter, 
    IFilter, 
    Modal, 
    SideBar  
} from "../../components"
import { fetchAllProducts } from "../../services"

const ProductsPage = () => {
    
    const dispatch = useAppDispatch()
    const productState = useAppSelector(state => state.products)
    const categoriesState = useAppSelector(state => state.categories)
    const {showModal, toggle} = UseModal()    
    UseUserSession()
        
    const [pagination, setPagination] = useState(10)
    
    // Filter
    const {showSideBar, toggle: toggleSideBar} = UseSideBar()
    const [filter, setFilter] = useState<IFilter | null>(null)
    
    useEffect(() => {        
        //dispatch(fetchAllCategories())
    }, [])
    
    useEffect(() => {     
          dispatch(fetchAllProducts(pagination))
    }, [pagination])
        
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
                return (
                    <CardProduct
                        id={id}
                        title={title}
                        price={price}
                        image={images[0]}
                        addCart={() => dispatch(addCartItem({quantity: 1, product: product}))}
                    />
                )
            })
        }
        
        return (
            <div>No product found</div>
        )        
    }
    
    return (
        <>            
            <BreadCrumbs links={[{ path: "/Products", name: "Products" }]} />
            

            <StyledButtonContainer>
                <button  className="button-filter" onClick={() => toggleSideBar()}>
                    Filters
                    <i className="filter-icon"></i>
                </button>
                <button onClick={() => toggle()}>
                    <i className="add-icon"></i>
                </button>
            </StyledButtonContainer>
            
            <StyledProducts>
                {filter === null ? (
                    productState.products.map((product) => {
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
                    })
                ) : (
                    filterProducts(productState.products, filter)
                )}
            </StyledProducts>
            
            <ButtonLoader loading={productState.isLoading} onClick={() => setPagination((prev) => prev + 5)} />

            <Modal
                title="Create Product"
                showModal={showModal}
                closeDialog={() => toggle()}
            >
                <CreateProduct categories={categoriesState} productCreated={(product) => {
                    toggle()
                    //TODO SHOW A SNACKBAR
                }}/>
            </Modal>
            
            <SideBar
                title="Filter"
                isOpen={showSideBar}
                closeSideBar={() => toggleSideBar()}
            >
                <Filter
                    sortProducts={(filter) => setFilter(filter)}
                    categories={categoriesState}
                    prevFilterState={filter}                              
                />
            </SideBar>
        </>
    )
}

export default ProductsPage
