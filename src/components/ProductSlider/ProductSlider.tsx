import { MutableRefObject, useEffect, useRef, useState } from "react";

import { Product } from "../../models";
import { CardProduct } from "../CardProduct";
import { addCartItem } from "../../redux/slices";
import { useAppDispatch } from "../../hooks";

import { ArrowIcon, StyledProductSlider } from "./styles";

interface IProductSlider {
    title: string
    products: Product[],
}

const ProductSlider = ({
    title,
    products
}: IProductSlider) => {
    
    const [hideLeftButton, set] = useState(true)
    const [scrollLeft, setScrollLeft] = useState(0)
    const dispatch = useAppDispatch()
    const carousel = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        if(scrollLeft <= 0) {
            set(true)
        } else {
            set(false)
        }
    }, [scrollLeft])
    
    const leftClick = (e: any) => {
        e.preventDefault()       
        setScrollLeft(carousel.current.scrollLeft -= carousel.current.offsetWidth)
    }
    
    const rightClick = (e: any) => {
        e.preventDefault()
        setScrollLeft(carousel.current.scrollLeft += carousel.current.offsetWidth)
    }
        
    return (        
        <StyledProductSlider>
            <div className="title-container">
                <h2 className="title">{title}</h2>   
                <h4 className="subtitle">New Arrivals For This Season</h4>
            </div>
            <div className="slider-container"> 
                <div className="carrousel-container" ref={carousel}>
                    {products.map((product) =>
                        <CardProduct
                            id={product.id}
                            title={product.title}
                            image={product.images[0]}
                            price={product.price}
                            addCart={() => dispatch(addCartItem({quantity: 1, product: product}))}
                            key={product.id}
                        />
                    )}
                </div>
                <button 
                    className="button-carrousel left" 
                    onClick={leftClick}
                    style={hideLeftButton ? {visibility: "hidden"} : {visibility: "visible"}}
                >
                    <ArrowIcon />
                </button>
                <button className="button-carrousel right" onClick={rightClick}>
                    <ArrowIcon />
                </button>               
            </div>
        </StyledProductSlider>    
    )
}

export default ProductSlider