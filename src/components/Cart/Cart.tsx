import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { deleteItem, updateQuantity, getCart } from "../../redux/slices"

const Cart = () => {

  const cartState = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    dispatch(getCart())
  }, [])

  useEffect(() => {
    calculateTotal()
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
    <>
      {cartState.map((value) => {
        return (
            <>
                <div>{value.product.title}</div>
                <input 
                  type="number" 
                  value={value.quantity}
                  min={1}
                  onChange={(e) => {
                    dispatch(
                      updateQuantity({
                        newQuantity: Number(e.target.value), 
                        idProduct: value.product.id
                      })
                    )
                  }}
                />
                <div>quantity : {value.quantity}</div>
                <div>price : {value.product.price}</div>
                <br />
                <button onClick={() => dispatch(deleteItem(value.product.id))}>delete</button>
            </>
          ) 
        })
      }
      <div>total: {total} </div>
    </>
  )
}

export default Cart