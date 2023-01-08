import { useState } from 'react';
import { Category, IProductPost, Product } from '../../../models';
import { createProduct } from '../../../services';
import { StyledCreateProduct } from "./styled-component/createProduct-styled"

interface ICreateProductProps {
  categories: Category[]
  productCreated: (newProduct: Product) => void
}

export const CreateProduct = ({
  categories,
  productCreated
}: ICreateProductProps) => {

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
    createProduct(newProduct)
      .then(value => {
        if(value.status === 201) {
          productCreated(value.data as Product)
        }        
      })
      .catch(error => {
        console.log("error --> ", error);
        
        //TODO give error feedback to the user
      })
  }

  return (
    <>
      <StyledCreateProduct onSubmit={e => submitForm(e)}>
        <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          cols={50}
        />

        <input 
          type="number"
          value={price}
          min={1}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <select value={category} onChange={(e) => setCategory(Number(e.target.value))}>
          {categories.map(item => <option value={item.id}>{item.name}</option>)}
        </select>

        <button className='main-button' type='submit'>CREATE PRODUCT</button>
      </StyledCreateProduct>
    </>
  )
}