import { useEffect, useState } from 'react';
import { useParams } from "react-router"

import { BreadCrumbs, ProductSlider } from '../../components';
import { useAppDispatch, useAppSelector} from "../../hooks";
import { fetchSingleProduct } from "../../services";
import { ROLE_ADMIN } from '../../utilities/constants';
import { addCartItem } from '../../redux/slices';
import { LoadingPulsating } from '../../components/LoadingPulsating/LoadingPulsating';
import { IAddCart } from '../../models/cart.model';
import { fetchProductsByCategory } from './../../services/products.service';
import { Product } from '../../models';

import { ProductDetail, UserAdmin } from './components';
import { StyledSingleProductPage } from './styles';

const SingleProductPage = () => {

    const { id } = useParams()    
    const dispatch = useAppDispatch()    

    const userState = useAppSelector(state => state.user)
    const {user} = userState
    const [product, setProduct] = useState<Product | null>(null)
    
    const productState = useAppSelector(state => state.products)
    const {isLoading, products} = productState    
    
    useEffect(() => {        
        if(id != undefined) {
            dispatch(fetchSingleProduct(id))
                .then(value => {
                    if(value.payload != null) {
                        const singleProduct = value.payload as Product
                        setProduct(singleProduct)
                        dispatch(fetchProductsByCategory({
                            categoryId: singleProduct.category.id,
                            limit: 10
                        }))
                    }
                })
        }
    }, [])


    function handleAddCartItem(item: IAddCart) {
        dispatch(addCartItem({quantity: item.quantity, product: item.product}))
    }

    return (
        <StyledSingleProductPage>
            <div className='container'>
                <BreadCrumbs links={[{ path: "/products", name: "Products" }, { path: `/product/${id}`, name: "Product Detail" }]} />
                {product != null ? (
                    <>
                        {user != null && user.role.toLowerCase() === ROLE_ADMIN ? (
                            <UserAdmin product={product} editProduct={(productEdited) => setProduct(productEdited)}/>
                        ) : null}
                        
                        <ProductDetail product={product} addToCart={(item) => handleAddCartItem(item)} />                    

                        <ProductSlider title="Similar Products" products={products}/> 
                    </>
                ) : null}
            </div>
            <LoadingPulsating show={isLoading}/>
        </StyledSingleProductPage>
    )
}

export default SingleProductPage