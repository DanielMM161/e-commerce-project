import { StyledDeleteProduct } from "./styled-component/deleteProduct.styled"

interface IDeleteProduct {
  deleteProduct: () => void
  cancel: () => void
}

export const DeleteProduct = ({
  deleteProduct,
  cancel
}: IDeleteProduct) => {

  return (
    <StyledDeleteProduct>
      <p className="informative">Are you're sure that want to delete this product ?</p>
      <button className="delete-button" onClick={() => deleteProduct()}>DELETE</button>
      <button onClick={() =>  cancel()}>CANCEL</button>
      <div className="button-container">
      </div>
    </StyledDeleteProduct>
  )
}