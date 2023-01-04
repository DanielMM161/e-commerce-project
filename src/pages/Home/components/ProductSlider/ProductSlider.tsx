import { MutableRefObject, useRef } from "react";
import { Product } from "../../../../models";
import { CardProduct } from "../../../../components/CardProduct";
import { ArrowIcon, StyledButtons, StyledCarousel, StyledProductSlider } from "./styled-component/productSlider.styled.component";

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
            <StyledCarousel ref={carousel}>
                {topProducts
                    .map((product) =>
                        <CardProduct
                            id={product.id}
                            title={product.title}
                            image={product.images[0]}
                            price={product.price}
                        />
                    )
                }
            </StyledCarousel>
            <StyledButtons>
                <button onClick={leftClick}>
                    <ArrowIcon />
                </button>
                <button onClick={rightClick}>
                    <ArrowIcon />
                </button>                                        
            </StyledButtons>            
        </StyledProductSlider>
    
    )

}

export default ProductSlider