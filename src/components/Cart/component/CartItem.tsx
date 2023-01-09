import { useAppDispatch, useAppSelector } from "../../../hooks"
import { Cart } from "../../../models/cart.model"
import { deleteItem, updateQuantity } from "../../../redux/slices"
import { StyledCartItem } from './styled-component/cartItem.styled';
import DeleteIcon from '@mui/icons-material/Delete';

interface ICartItemProps {
  cart: Cart
}

const CartItem = ({
  cart
}: ICartItemProps) => {

  const dispatch = useAppDispatch()
  const {product, quantity} = cart
  const {title, id, price, images} = product

  return (
    <StyledCartItem>
      <div className="image-container">
        <img src={images[0]}/>
      </div>

      <div className="info-container">
        <div className="title-container">
          <div>{title}</div>
          <div>price : {price}</div>
        </div>
        <div className="input-delete-container">
          <input 
            type="number" 
            value={quantity}
            min={1}
            onChange={(e) => {
              dispatch(
                updateQuantity({
                  newQuantity: Number(e.target.value), 
                  idProduct: id
                })
              )
            }}
          />        
          <button onClick={() => dispatch(deleteItem(id))}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </StyledCartItem>    
  )
}

export default CartItem