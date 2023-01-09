import { Link } from "react-router-dom"
import { Category } from "../../../../models"
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
        <div>
             <Link to={`/category/${id}`} >
                <img src={image} ></img>
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
            <h4>
                Top Categories
                <span>View all</span>
            </h4>
            <div className="categories-container">
                {categories.map((category) => <CategoryItem id={category.id} name={category.name} image={category.image}/>)}
            </div>

        </StyledTopCategories>
    )

}

export default TopCategories