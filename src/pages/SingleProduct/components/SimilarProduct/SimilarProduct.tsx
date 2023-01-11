import { ProductSlider } from "../../../../components"
import { Product } from "../../../../models"
import { StyledSimilarProduct } from "./styled-component/similarProduct.styled"

interface ISimilarProductProps {
  products: Product[]
}

export const SimilarProduct = ({
  products
}:ISimilarProductProps) => {

  return (
    <StyledSimilarProduct>
      <h3>Similar Products</h3>
      <ProductSlider topProducts={products}/>
    </StyledSimilarProduct>
  )
}