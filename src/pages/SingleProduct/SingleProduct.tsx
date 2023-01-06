import { useParams } from "react-router"
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { useAppSelector, useAppDispatch} from "../../hooks";
import { StyledSingleProduct } from './styled-component/singleProduct.styled.component';
import { useEffect } from 'react';
import { fetchSingleProduct } from "../../redux/slices";
import { Link } from "react-router-dom";
import { useState } from 'react';

const SingleProductPage = () => {

    const { id } = useParams()

    const dispatch = useAppDispatch()
    const singleProductState = useAppSelector(state => state.singleProduct)
    const {isLoading, product} = singleProductState
    const {title, category, description, price} = product

    const [amount, setAmount] = useState(0)

    useEffect(() => {
        if(id != undefined) {
            dispatch(fetchSingleProduct(id))
        }
    }, [])

    return (
        <>
            <BreadCrumbs links={[{ path: "/products", name: "Products" }, { path: `/product/${id}`, name: `${id}` }]} />

            {isLoading ? (
            <div>Loading...</div>
            ) : (
                <StyledSingleProduct>
                    <div className="image-container">
                        <img src={product.images[0]} />
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
            )}

            
        </>
    )
}

export default SingleProductPage