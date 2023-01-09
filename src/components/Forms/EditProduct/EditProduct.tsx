import { useState } from "react"
import { Product } from "../../../models"
import { StyledEditProduct } from "./styled-component/editProduct-styled"
import { IProductUpdate } from './../../../models/products.model';

interface IEditProductProps {
  product: Product  
  editProduct: (productEdited: IProductUpdate) => void
}

export const EditProduct = ({
  product,  
  editProduct
}: IEditProductProps) => {
  
  const [title, setTitle] = useState(product.title)
  const [description, setDescription] = useState(product.description)
  const [price, setPrice] = useState(product.price)

  function SubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newFields: IProductUpdate = {
      id: product.id,
      description: description,
      price: price,
      title: title
    }
    editProduct(newFields)    
  }

  return (
    <StyledEditProduct onSubmit={SubmitForm}>
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

        <button className='main-button' type='submit'>EDIT PRODUCT</button>
    </StyledEditProduct>
  )
}