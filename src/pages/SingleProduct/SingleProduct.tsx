import { useEffect, useState } from 'react';
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import { BreadCrumbs } from '../../components';
import { useAppDispatch, useAppSelector} from "../../hooks";
import { StyledSingleProduct } from './styled-component/singleProduct.styled.component';
import { fetchSingleProduct } from "../../services";
import { ROLE_ADMIN } from '../../utilities/constants';
import { UserAdmin } from './components';
import { Product } from '../../models';
import { addCartItem } from '../../redux/slices';

const SingleProductPage = () => {

    const { id } = useParams()
    
    const dispatch = useAppDispatch()
    const userState = useAppSelector(state => state.user)
    const {user} = userState
    const productState = useAppSelector(state => state.products)
    const {product, isLoading} = productState
    
    const [amount, setAmount] = useState(1)
    
    useEffect(() => {        
        if(id != undefined) {
            dispatch(fetchSingleProduct(id))
        }
    }, [])

    const showProduct = () => {
        if(product != null) {
            const {title, category, description, price, images} = product
            return (
                <>
                    <StyledSingleProduct>
                        <div className="image-container">
                            <img src={images[0]} />
                        </div>

                        <div className="info-container">
                            <div className="info-title-category">
                                <h3>{title}</h3>
                                <Link to={`/category/${category.name}`}>{category.name}</Link>
                            </div>
                            <p className="description">{description}</p>

                            <div className="price-section">
                                <div className="price-info">
                                    <span>
                                        <span className="text-price">as low as </span>
                                        {price} $
                                    </span>
                                    <div>incl. VAT, Excl. shipping</div>
                                </div>

                                <div className="cart-section">
                                    <input value={amount} onChange={(evt) => setAmount(Number(evt.target.value))} type="number" min={1} max={100} />
                                    <button className="main-button" onClick={() => dispatch(addCartItem({quantity: 1, product: product}))}>Add to cart</button>                              
                                </div>

                                <ul className="garanties">
                                    <li>
                                        <i className="check-icon"></i> 
                                        Insured shipping and tracking
                                    </li>
                                    <li>
                                        <i className="check-icon"></i> 
                                        International Delivery available
                                    </li>
                                    <li>
                                        <i className="check-icon"></i> 
                                        30 days return
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </StyledSingleProduct>

                    {user != null && user.role.toLowerCase() === ROLE_ADMIN ? (
                        <UserAdmin product={product} />
                    ) : null}
                </>
            )
        }
        return null
    }

    return (
        <>
            <BreadCrumbs links={[{ path: "/products", name: "Products" }, { path: `/product/${id}`, name: `${id}` }]} />
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                showProduct()                
            )}            
        </>
    )
}

export default SingleProductPage