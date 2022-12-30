import { BreadCrumbs } from "../../components/BreadCrumbs"


const ProductsPage = () => {
    return (
        <>
            <BreadCrumbs links={[{path: "/Products",name: "Products"}]}/>
        </>
    )
}

export default ProductsPage