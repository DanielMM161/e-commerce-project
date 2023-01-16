import { useState } from "react"

import { Product } from "../../../../models"
import { IAddCart } from "../../../../models/cart.model"

import { StylesProductDetail } from "./styles"

interface IProductDetailProps {
  product: Product
  addToCart: (item: IAddCart) => void
}

export const ProductDetail = ({
  product,
  addToCart
}: IProductDetailProps) => {

  const {title, category, description, price, images} = product
  const [currentImg, setCurrentImg] = useState(images[0])
  const [amount, setAmount] = useState(1)
  
  return (
    <StylesProductDetail>
      <div className="single-img">
        <img className="main-img" src={currentImg} width="100%"/>

        <div className="small-img-group">
          {images.map(value => {
            return (
              <div className="small-img-col" key={value}>
                  <img className="small-img" src={value} width="100%" onClick={() => setCurrentImg(value)} />
              </div>
            )
          })}
        </div>
      </div>

      <div className="single-detail">
          <h6 id="category">{category.name}</h6>
          <h4 id="title">{title}</h4>
          <h2>${price}</h2>
          <input type="number" min={1} value={amount} onChange={(evt) => setAmount(Number(evt.target.value))}/>
          <button onClick={() => addToCart({quantity: amount, product: product})}>Add to cart</button>
          {description.trim() !== "" ? (
            <>
              <h4 id="description-title">Product Detail</h4>
              <span id="description">{description}</span>
            </>
          ) : null}
      </div>
    </StylesProductDetail>
  )
}