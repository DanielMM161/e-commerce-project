import { useState } from "react"
import { Link } from "react-router-dom"
import { Product } from "../../../../models"
import { IAddCart } from "../../../../models/cart.model"

interface ISingleComponentCardProps {
  product: Product
  addToCart: (item: IAddCart) => void
}

export const SingleComponentCard = ({
  product,
  addToCart
}: ISingleComponentCardProps) => {

  const {title, category, description, price, images} = product

  const [amount, setAmount] = useState(1)
  
  return (
    <>
      <div className="image-container">
        <img src={images[0]} />
      </div>

      <div className="info-container">
          <div className="info-title-category">
              <h3>{title}</h3>
              <Link to={`/category/${category.name}`}>{category.name}</Link>
          </div>
          <p className="description">{description}</p>

          <div className="price-section">
              <div className="price-info">
                  <span>
                      <span className="text-price">as low as </span>
                      {price} $
                  </span>
                  <div>incl. VAT, Excl. shipping</div>
              </div>

              <div className="cart-section">
                  <input value={amount} onChange={(evt) => setAmount(Number(evt.target.value))} type="number" min={1} max={100} />
                  <button className="main-button" onClick={() => addToCart({quantity: amount, product: product})}>Add to cart</button>                              
              </div>

              <ul className="garanties">
                  <li>
                      <i className="check-icon"></i> 
                      Insured shipping and tracking
                  </li>
                  <li>
                      <i className="check-icon"></i> 
                      International Delivery available
                  </li>
                  <li>
                      <i className="check-icon"></i> 
                      30 days return
                  </li>
              </ul>
          </div>
      </div>
    </>
  )
}