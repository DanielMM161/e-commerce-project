import { Link } from "react-router-dom"

import { Category } from "../../../../models"
import clothes from '../../../../assets/clothes/clothes.jpg'
import electronic from '../../../../assets/electronics/electronics.jpg'
import furniture from '../../../../assets/furniture/furniture.jpg'
import shoes from '../../../../assets/shoes/shoes.jpg'

import { StyledTopCategories } from "./styled-component/topCategories.styled.component"

interface ITopCategories {
    categories: Category[]
}

interface ICategoryItemProps {
    id: number
    name: string
    image: string
}

const CategoryItem = ({
    id,
    name,
    image
}: ICategoryItemProps) => {

    return (
        <div className="category-item">
             <Link to={`/category/${id}`} >
                <img src={image}></img>
             </Link>                
            <h5>
                <Link to={`/category/${id}`}>{name}</Link>
            </h5>            
        </div>
    )

}

const TopCategories = ({ categories }: ITopCategories) => {
    
    const myCategories = [
        {
            name: "Clothes",
            image: clothes
        },
        {
            name: "Electronics",
            image: electronic
        },
        {
            name: "Furniture",
            image: furniture
        },
        {
            name: "Shoes",
            image: shoes
        }
    ]
    
    return (
        <StyledTopCategories>
            <h2>Top Categories</h2>
            <div className="categories-container">
                {myCategories.map((myCategory) => {
                    const id = categories.find(item => item.name.trim().toLowerCase() === myCategory.name.toLowerCase())?.id
                    return (
                        <CategoryItem id={id ?? 0} name={myCategory.name} image={myCategory.image}/>
                    )
                })}
            </div>
        </StyledTopCategories>
    )

}

export default TopCategories