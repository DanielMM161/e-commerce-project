import { StyledDeleteProduct } from "./styles"

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
      <button className="cancel-button" onClick={() =>  cancel()}>CANCEL</button>
    </StyledDeleteProduct>
  )
}