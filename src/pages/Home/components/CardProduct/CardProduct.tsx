import { IconCart, ItemCard, StyledButtonCart } from "./styled-component/cardProduct.styled.component"

interface ICardProduct {
    id: number
    title: string
    image: string
    price: number
}

const CardProduct = ({
    id,
    title,
    image,
    price
}: ICardProduct) => {
    
    return (
        <ItemCard key={id}>
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className="info">
                <span className="title">{title}</span>
                <span className="price">${price}</span>
            </div>
            <StyledButtonCart>
                <IconCart />
                <span>Add To Cart</span>
            </StyledButtonCart>
        </ItemCard>
    )
}

export default CardProduct