import { Link } from "react-router-dom"

import { Category } from "../../../../models"

import { StyledTopCategories } from "./styles"

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
                <img src={image} width="400" height="600" ></img>
             </Link>                
            <h5>
                <Link to={`/category/${id}`}>{name}</Link>
            </h5>            
        </div>
    )
}

const TopCategories = ({ categories }: ITopCategories) => {
    
    return (
        <StyledTopCategories>
            <h2>Top Categories</h2>
            <div className="categories-container">
                {categories.map((category) => {                    
                    return (
                        <CategoryItem 
                            id={category.id} 
                            name={category.name} 
                            image={category.image}
                            key={category.id}
                        />
                    )
                })}
            </div>
        </StyledTopCategories>
    )
}

export default TopCategories