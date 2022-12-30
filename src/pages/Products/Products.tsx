import { useEffect, useState } from "react"
import { BreadCrumbs } from "../../components/BreadCrumbs"
import { useAppDispatch, useAppSelector } from "../../hooks"
import UseProduct from "../../hooks/useProduct"
import { CardProduct } from "../Home/components/CardProduct"
import ButtonLoader from "./components/ButtonLoader/ButtonLoader"
import { StyledProducts } from "./styled-component/products.styled.component"


const ProductsPage = () => {
    
    const { loading, fetchProducts, productState, pagination, setPagination } = UseProduct()
    
    useEffect(() => {
        console.log("loading ->>", loading);
                
    }, [])
    
    return (
        <>
            <BreadCrumbs links={[{ path: "/Products", name: "Products" }]} />
            <StyledProducts>
                {
                    productState.map((product) => {
                        const { id, title, price, description, images } = product
                        return (
                            <CardProduct id={id} title={title} price={price} image={images[0]} />
                        )
                    })
                }            
            </StyledProducts>
            <ButtonLoader loading={loading} onClick={() => setPagination(pagination + 10)} />            
        </>
    )
}

export default ProductsPage