import { useEffect, useState } from 'react';
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import { BreadCrumbs } from '../../components';
import { useAppSelector, useAppDispatch} from "../../hooks";
import { StyledSingleProduct } from './styled-component/singleProduct.styled.component';
import { fetchSingleProduct, getSingleProduct } from "../../services";
import { ROLE_ADMIN } from '../../utilities/constants';
import { UserAdmin } from './components';
import { Product } from '../../models';

const SingleProductPage = () => {

    const { id } = useParams()

    const dispatch = useAppDispatch()
    const singleProductState = useAppSelector(state => state.singleProduct)
    const [singleProduct, setSingleProduct] = useState<Product | null>()
    const [isLoading, setIsLoading] = useState(true)
    //const {isLoading, product} = singleProductState


    const userState = useAppSelector(state => state.user)

    const [amount, setAmount] = useState(0)

    useEffect(() => {        
        if(id != undefined) {
            getSingleProduct(id)
                .then(value => {      
                    setIsLoading(false)              
                    if(value.status === 200) {
                        setSingleProduct(value.data as Product)
                    }
                })
                .catch(() => {
                    setIsLoading(false)
                })
           // dispatch(fetchSingleProduct(id))
        }
    }, [])

    const showProduct = () => {
        if(singleProduct != null) {
            const {title, category, description, price} = singleProduct
            return (
                <>
                    <StyledSingleProduct>
                        <div className="image-container">
                            <img src={singleProduct.images[0]} />
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
                                    <input value={amount} onChange={(evt) => setAmount(Number(evt.target.value))} type="number" min={0} max={100} />
                                    <button className="main-button">Add to cart</button>                              
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

                    {userState != null && userState.role.toLowerCase() === ROLE_ADMIN ? (
                        <UserAdmin product={singleProduct} productEdited={(product) => {setSingleProduct(product)} }/>
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