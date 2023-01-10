import ShoppingCart from "@mui/icons-material/ShoppingCart"
import { Link } from "react-router-dom"
import { StyledCardProduct } from "./styled-component/cardProduct.styled.component"

interface ICardProduct {
    id: number
    title: string
    image: string
    price: number
    addCart: () => void
}

const CardProduct = ({
    id,
    title,
    image,
    price,
    addCart
}: ICardProduct) => {
    
    return (
        <StyledCardProduct>
            <div className="image-container">
                <Link  to={`/product/${id}`}>
                    <img src={image} />
                </Link>
                <div className="icon-container" onClick={() => addCart()}>
                    <ShoppingCart />
                </div>
            </div>
            <Link to={`/product/${id}`} className="info-container">
                <span className="title">{title}</span>
                <span className="price">${price}</span> 
            </Link>
        </StyledCardProduct>
    )
}

export default CardProduct