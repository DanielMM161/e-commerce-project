import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { getCart } from "../../redux/slices"
import CartItem from "./component/CartItem"
import { StyledCart } from "./styled-component/cart.styled"

const Cart = () => {

  const cartState = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    console.log("useEffect Cart");
    
    dispatch(getCart())
  }, [])

  useEffect(() => {
    calculateTotal()
    console.log("cartState useEffect");
    
  }, [cartState])

  function calculateTotal() {
    let total = 0
    cartState.forEach(item => {
        const {quantity, product} = item
        total = total + quantity * product.price
    })
    setTotal(total)
  }

  return (
    <StyledCart>
      {cartState.map((value) => <CartItem cart={value}/>)}
      <div>total: {total} </div>
    </StyledCart>
  )
}

export default Cart