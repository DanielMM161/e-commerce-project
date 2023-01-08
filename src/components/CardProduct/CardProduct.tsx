import { IconCart, ItemCard, StyledButtonCart } from "./styled-component/cardProduct.styled.component"

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
        <ItemCard to={`/product/${id}`} key={id}>
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className="info">
                <span className="title">{title}</span>
                <span className="price">${price}</span>
            </div>
            <StyledButtonCart onClick={() => addCart()}>
                <IconCart />
                <span >Add To Cart</span>
            </StyledButtonCart>
        </ItemCard>
    )
}

export default CardProduct