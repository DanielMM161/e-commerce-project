import { useState } from "react"
import { Category, Product } from "../../../models"
import { StyledEditProduct } from "./styled-component/editProduct-styled"
import { IProductUpdate } from './../../../models/products.model';
import { updateProduct } from "../../../services";

interface IEditProductProps {
  product: Product  
  productEdited: (productEdited: Product) => void
}

export const EditProduct = ({
  product,  
  productEdited
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
    updateProduct(newFields)
      .then(value => {
        console.log("value --> ", value);
        if(value.status === 200) {
          productEdited(value.data as Product)
        }
        
      })
      .catch((err) => {
        // TODO GIVE USER FEEDBACK
      })
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