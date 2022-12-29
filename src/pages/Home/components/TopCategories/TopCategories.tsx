import { Category } from "../../../../models"
import { StyledTopCategories } from "./styled-component/topCategories.styled.component"

interface ITopCategories {
    categories: Category[]
}

const TopCategories = ({ categories }: ITopCategories) => {
    
    return (
        <StyledTopCategories>
            <h4>
                Top Categories
                <span>View all</span>
            </h4>
            <div className="categories-container">
                {categories.map((category) => {
                    return (
                        <div key={category.id}>
                            <a>{category.name}</a>
                        </div>
                    )
                })}
            </div>

        </StyledTopCategories>
    )

}

export default TopCategories