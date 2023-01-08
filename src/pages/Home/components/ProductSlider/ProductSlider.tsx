import { MutableRefObject, useRef } from "react";
import { Product } from "../../../../models";
import { CardProduct } from "../../../../components";
import { ArrowIcon, StyledProductSlider } from "./styled-component/productSlider.styled.component";

interface IProductSlider {
    topProducts: Product[],
}

const ProductSlider = ({
    topProducts
}: IProductSlider) => {
    
    const carousel = useRef() as MutableRefObject<HTMLDivElement>;
    
    const leftClick = (e: any) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth        
    }
    
    const rightClick = (e: any) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth        
    }
        
    return (
        
        <StyledProductSlider>
            <div className="carrousel-container" ref={carousel}>
                {topProducts
                    .map((product) =>
                        <CardProduct
                            id={product.id}
                            title={product.title}
                            image={product.images[0]}
                            price={product.price}
                            addCart={() => {}}
                        />
                    )
                }
            </div>
            <button className="button-carrousel left" onClick={leftClick}>
                <ArrowIcon />
            </button>
            <button className="button-carrousel right" onClick={rightClick}>
                <ArrowIcon />
            </button>               
        </StyledProductSlider>
    
    )

}

export default ProductSlider