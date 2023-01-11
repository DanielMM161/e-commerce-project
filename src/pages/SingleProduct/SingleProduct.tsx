import { useEffect } from 'react';
import { useParams } from "react-router"
import { BreadCrumbs } from '../../components';
import { useAppDispatch, useAppSelector} from "../../hooks";
import { StyledSingleProduct, StyledUserAdmin } from './styled-component/singleProduct.styled.component';
import { fetchSingleProduct } from "../../services";
import { ROLE_ADMIN } from '../../utilities/constants';
import { SingleComponentCard, UserAdmin } from './components';
import { addCartItem } from '../../redux/slices';
import { LoadingPulsating } from '../../components/LoadingPulsating/LoadingPulsating';
import { IAddCart } from '../../models/cart.model';


const SingleProductPage = () => {

    const { id } = useParams()    
    const dispatch = useAppDispatch()    

    const userState = useAppSelector(state => state.user)
    const {user} = userState

    const productState = useAppSelector(state => state.products)
    const {product, isLoading} = productState    
    
    useEffect(() => {        
        if(id != undefined) {
            dispatch(fetchSingleProduct(id))
        }
    }, [])

    function handleAddCartItem(item: IAddCart) {
        dispatch(addCartItem(item))        
    }

    return (
        <>
            {product != null ? (
                <>
                    <BreadCrumbs links={[{ path: "/products", name: "Products" }, { path: `/product/${id}`, name: "Product Detail" }]} />

                    {user != null && user.role.toLowerCase() === ROLE_ADMIN ? (
                        <StyledUserAdmin>
                            <UserAdmin product={product} />
                        </StyledUserAdmin>
                    ) : null}

                    <StyledUserAdmin>
                            <UserAdmin product={product} />
                        </StyledUserAdmin>

                    <StyledSingleProduct>
                        <SingleComponentCard product={product} addToCart={(item) => handleAddCartItem(item)} />
                    </StyledSingleProduct>                 
                </>
            ) : null}
            <LoadingPulsating show={isLoading}/>
        </>
    )
}

export default SingleProductPage