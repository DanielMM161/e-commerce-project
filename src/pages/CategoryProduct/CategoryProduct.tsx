import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchProductsByCategory } from "../../services";
import { BreadCrumbs, ButtonLoader, CardProduct, LoadingPulsating } from "../../components";
import { addCartItem } from "../../redux/slices";
import { HeroImage } from '../../components/HeroImage';
import { StyleProductCategoryPage } from './styles';
import { changeDimension } from '../../utilities/util';
import { Category, emptyCategory } from '../../models';

const CategoryProductPage = () => {

  const { categoryId } = useParams()
  const dispatch = useAppDispatch()
  const productState = useAppSelector(state => state.products)
  const categoriesState = useAppSelector(state => state.categories)
  const {isLoading, products} = productState
  const [pagination, setPagination] = useState(10)
  const [actualCategory, setActualCategory] = useState<Category>(emptyCategory)
    
  useEffect(() => {
    if (categoryId !== undefined) {
      const id = Number(categoryId)
      const actualCategory = categoriesState.categories.find(item => item.id === id)
      setActualCategory(actualCategory ?? emptyCategory)
      dispatch(fetchProductsByCategory({
        categoryId: id,
        limit: pagination
      }))
    }
  }, [pagination])

  return (
    <StyleProductCategoryPage>
      <HeroImage title={actualCategory.name} path={changeDimension(actualCategory.image, 2000, 500)} />
        <div className='container'>
        <BreadCrumbs
          links={[
            { path: `/category/${categoryId}`, name: "Category" },
            { path: `/category/${categoryId}`, name: actualCategory.name }]}
          
        />
          <div className="products-container">
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
        </div>
        <LoadingPulsating show={isLoading} />
    </StyleProductCategoryPage>
  )
}

export default CategoryProductPage