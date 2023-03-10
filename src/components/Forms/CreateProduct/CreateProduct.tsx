import { useState } from 'react';

import { useAppDispatch } from '../../../hooks';
import { Category, IProductPost, Product } from '../../../models';
import { createProduct } from '../../../services';

import { StyleCreateProduct } from './styles';



interface ICreateProductProps {
  categories: Category[]
  productCreated: (id: number) => void
}

export const CreateProduct = ({
  categories,
  productCreated
}: ICreateProductProps) => {

  const dispatch = useAppDispatch()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState(categories[0].id)
  const [price, setPrice] = useState(1)
  
  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newProduct: IProductPost = {
      title: title,
      description: description,
      price: price,
      categoryId: category
    }
    dispatch(createProduct(newProduct))
    .then(value => {
      if(value.payload) {
        const product = value.payload as Product
        productCreated(product.id)
      }
    })
  }

  function checkUserInputs(): boolean {
    if(title.trim() != "" && description.trim() != "") {
      return false
    }
    return true
  }

  return (
    <StyleCreateProduct onSubmit={e => submitForm(e)}>
      <h5>Title</h5>
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <h5>Description</h5>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}

      />

      <div className='price-category-container'>
        <div className='price-container'>
          <h5>Price</h5>
          <input 
            type="number"
            value={price}
            min={1}
            max="1000"
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h5>Category</h5>
          <select value={category} onChange={(e) => setCategory(Number(e.target.value))}>
            {categories.map(item => <option value={item.id}>{item.name}</option>)}
          </select>
        </div>
      </div>
      

      <button className='main-button' type='submit' disabled={checkUserInputs()}>CREATE PRODUCT</button>
    </StyleCreateProduct>
  )
}