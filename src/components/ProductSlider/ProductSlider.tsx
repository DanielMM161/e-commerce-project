import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Product } from "../../models";
import { CardProduct } from "../CardProduct";
import { ArrowIcon, StyledProductSlider } from "./styled-component/productSlider.styled.component";
import { useDispatch } from 'react-redux';
import { addCartItem } from "../../redux/slices";

interface IProductSlider {
    topProducts: Product[],
}

const ProductSlider = ({
    topProducts
}: IProductSlider) => {
    
    const [hideLeftButton, set] = useState(true)
    const [scrollLeft, setScrollLeft] = useState(0)
    const dispatch = useDispatch()
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
                <h2 className="title">Top Products</h2>   
                <h4 className="subtitle">New Arrivals For This Season</h4>
            </div>
            <div className="slider-container"> 
                <div className="carrousel-container" ref={carousel}>
                    {topProducts
                        .map((product) =>
                            <CardProduct
                                id={product.id}
                                title={product.title}
                                image={product.images[0]}
                                price={product.price}
                                addCart={() => dispatch(addCartItem({quantity: 1, product: product}))}
                            />
                        )
                    }
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