import { MutableRefObject, useEffect, useRef, useState } from "react"
import { Category } from "../../models"
import { StyledFilter } from "./styled-component/filter.styled.component"

interface IFilterProps {
    categories: Category[],
    sortProducts: (filter: IFilter) => void,
    maxPrice: number
}

interface IFilterPrices {
    min: number
    max: number
}

export interface IFilter {
    ids: number[],
    prices: IFilterPrices
}

const filterPrices: IFilterPrices[] = [
    {
        min: 10,
        max: 50
    },
    {
        min: 50,
        max: 100
    },
    {
        min: 100,
        max: 200
    },
    {
        min: 200,
        max: 500
    },
    {
        min: 500,
        max: 1000
    }
]

const Filter = ({
    categories,
    sortProducts,
}: IFilterProps) => {
        
    const [clickCategory, setClickCategory] = useState<boolean[]>([])
    const [clickPrice, setClickPrice] = useState<boolean[]>([])
    const [filter, setFilter] = useState<IFilter>({
        ids: [],
        prices: {min: 0, max: 0}   
    })
        
    useEffect(() => {                
        categories.forEach((_, index) => {
            clickCategory[index] = false           
            setClickCategory([...clickCategory])            
        })
        
        filterPrices.forEach((_, index )=> {
            clickPrice[index] = false
            setClickPrice([...clickPrice])
        })
    }, [categories])
    
    useEffect(() => {                        
        sortProducts(filter)
    }, [filter])
    
    function clickFilterByCategory(index: number, id: number) {
        clickCategory[index] = !clickCategory[index]
        setClickCategory(prev => ([...clickCategory]))        
                
        if (clickCategory[index]) {
            setFilter((prevState) => ({
                prices: {...prevState.prices},
                ids: [...filter.ids, id]
            }))
        } else {
            setFilter((prevState) => ({
                prices: {...prevState.prices},
                ids: [...prevState.ids.filter(value => value != id)]
            }))   
        }
    }
    
    function clickFilterPrice(index: number) {
        clickPrice[index] = !clickPrice[index]
        setFilter((prevState) => ({
            prices: clickPrice[index] ? filterPrices[index] : {min: 0, max: 0},
            ids: [...prevState.ids]
        }))
        const newClickPrice = clickPrice.map((item, i) => {
            if (index != i) {
                item = false                
            }
            return item
        })        
        setClickPrice(prev => ([...newClickPrice]))
    }
    
    return (
        <StyledFilter>
            <div className="buttons-container">
                <div className="buttons-grid">
                    {categories
                        .map(({ name, id }: Category, index) => {                        
                            return (
                                <button className={clickCategory[index] ? 'button-clicked' : 'button-category'} onClick={() => clickFilterByCategory(index, id)} key={index}>{name}</button>
                            )
                        })
                    }
                </div>
            </div>
            <div className="prices-container">
                {filterPrices
                    .map((price, index) => {
                        return (
                            <button onClick={() => clickFilterPrice(index)} className="prices-item ">
                                {price.min} $ - {price.max} $
                                {clickPrice[index] && <i className="check-icon"></i>}                                
                            </button>
                        )
                    })
                }
            </div>            
        </StyledFilter>
    )
}

export default Filter