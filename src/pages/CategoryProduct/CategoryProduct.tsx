import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchProductsByCategory } from "../../services";
import { BreadCrumbs, ButtonLoader, CardProduct, LoadingPulsating } from "../../components";
import { addCartItem } from "../../redux/slices";

import { StyledCategoryProduct } from "./styled-component/categoryProduct.styled"

const CategoryProductPage = () => {

  const { categoryId } = useParams()
  const dispatch = useAppDispatch()
  const productState = useAppSelector(state => state.products)
  const {isLoading, products} = productState
  const [ pagination, setPagination ] = useState(10)

  useEffect(() => {
    if(categoryId != undefined) {
      dispatch(fetchProductsByCategory({
        categoryId: Number(categoryId),
        limit: pagination
      }))
    }
  }, [pagination])

  return (
    <StyledCategoryProduct>
        <BreadCrumbs links={[{ path: `/category/${categoryId}`, name: "Category" }]} />
        <div className="product-container">
          {
              products.map((product) => {
              const { id, title, price, images } = product
              return (
                  <CardProduct
                      id={id}
                      title={title}
                      price={price}
                      image={images[0]}
                      addCart={() => dispatch(addCartItem({quantity: 1, product: product}))}
                  />
              )
            })
          }
        </div>
        <ButtonLoader loading={isLoading} onClick={() => setPagination((prev) => prev + 5)} />
        <LoadingPulsating show={isLoading} />
    </StyledCategoryProduct>
  )
}

export default CategoryProductPage