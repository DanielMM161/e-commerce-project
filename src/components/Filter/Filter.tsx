import { useEffect, useState } from "react"

import CheckIcon from '@mui/icons-material/Check';

import { Category } from "../../models"

import { StyledFilter } from "./styles"


interface IFilterProps {
    categories: Category[],
    sortProducts: (filter: IFilter | null) => void,
    prevFilterState: IFilter | null
}

export interface IFilterPrices {
    min: number
    max: number
}

export interface IFilter {
    ids: number[],
    prices: IFilterPrices[]
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

export const Filter = ({
    categories,
    sortProducts,
    prevFilterState
}: IFilterProps) => {
        
    const [clickCategory, setClickCategory] = useState<boolean[]>([])
    const [clickPrice, setClickPrice] = useState<boolean[]>([])
        
    useEffect(() => {          
        if(prevFilterState != null) {
            categories.forEach((value, index) => {
                if(prevFilterState.ids?.includes(value.id)) {
                    clickCategory[index] = true           
                } else {
                    clickCategory[index] = false           
                }
                setClickCategory([...clickCategory])            
            })

            filterPrices.forEach((value, index )=> {
                if(prevFilterState.prices[0] === value) {
                    clickPrice[index] = true
                } else {
                    clickPrice[index] = false
                }
                setClickPrice([...clickPrice])
            })
        }                
    }, [categories])
    
    function clickFilterByCategory(index: number, id: number) {
        clickCategory[index] = !clickCategory[index]
        setClickCategory([...clickCategory])
        checkClicked(clickPrice, clickCategory)
    }
    
    function clickFilterPrice(index: number) {
        clickPrice[index] = !clickPrice[index]
        const newClickPrice = clickPrice.map((item, i) => {
            if (index != i) {
                item = false                
            }
            return item
        })
        setClickPrice([...newClickPrice])
        checkClicked(newClickPrice, clickCategory)
       
    }

    function checkClicked(pricesClicked: boolean[], categoriesClicked: boolean[]) {
        const filter: IFilter = {
            ids: [],
            prices: [{min: 0, max: 0}]
        }
        pricesClicked.forEach((value, index) => {
            if(value) {
                filter.prices[0] = filterPrices[index]
            }
        })

        categoriesClicked.forEach((value, index) => {
            if(value) {                
                filter.ids.push(categories[index].id)
            }
        })

        if(filter.ids.length > 0 || filter.prices.length > 0) {            
            sortProducts(filter)
        }  else {
            sortProducts(null)
        }
    }
    
    return (
        <StyledFilter>
            {categories.length > 0 ? (
                <div className="buttons-filter_container">
                    <h5>Categories</h5>
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
            ) : null}
            <div className="prices-container">
                <h5>Prices</h5>
                {filterPrices
                    .map((price, index) => {
                        return (
                            <button onClick={() => clickFilterPrice(index)} className="button-prices">
                                {price.min} $ - {price.max} $
                                <CheckIcon style={clickPrice[index] ? {visibility: "visible"} : {visibility: "hidden"}}/>                                
                            </button>
                        )
                    })
                }
            </div>          
        </StyledFilter>
    )
}