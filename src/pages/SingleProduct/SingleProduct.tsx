import { useEffect } from 'react';
import { useParams } from "react-router"
import { BreadCrumbs } from '../../components';
import { useAppDispatch, useAppSelector} from "../../hooks";
import { StyledSingleProduct } from './styled-component/singleProduct.styled.component';
import { fetchSingleProduct } from "../../services";
import { ROLE_ADMIN } from '../../utilities/constants';
import { SingleComponentCard, UserAdmin } from './components';
import { addCartItem } from '../../redux/slices';
import { LoadingPulsating } from '../../components/LoadingPulsating/LoadingPulsating';
import { IAddCart } from '../../models/cart.model';
import { SimilarProduct } from './components/SimilarProduct/SimilarProduct';
import { fetchProductsByCategory } from './../../services/products.service';


const SingleProductPage = () => {

    const { id } = useParams()    
    const dispatch = useAppDispatch()    

    const userState = useAppSelector(state => state.user)
    const {user} = userState

    const productState = useAppSelector(state => state.products)
    const {product, isLoading, products} = productState    
    
    useEffect(() => {        
        if(id != undefined) {
            dispatch(fetchSingleProduct(id))
        }
    }, [id])

    useEffect(() => {
        if(product != null) {
            dispatch(fetchProductsByCategory({
                categoryId: product.category.id,
                limit: 10
            }))
        }
    }, [product])

    function handleAddCartItem(item: IAddCart) {
        dispatch(addCartItem({quantity: item.quantity, product: item.product}))
    }

    return (
        <>
            {product != null ? (
                <>
                    <BreadCrumbs links={[{ path: "/products", name: "Products" }, { path: `/product/${id}`, name: "Product Detail" }]} />

                    {user != null && user.role.toLowerCase() === ROLE_ADMIN ? (
                        <UserAdmin product={product} />
                    ) : null}

                    <StyledSingleProduct>                        
                        <SingleComponentCard product={product} addToCart={(item) => handleAddCartItem(item)} />
                    </StyledSingleProduct>

                    <SimilarProduct products={products}/>        
                </>
            ) : null}
            <LoadingPulsating show={isLoading}/>
        </>
    )
}

export default SingleProductPage