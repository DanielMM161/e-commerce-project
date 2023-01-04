import { useEffect, useState } from "react"
import { createCategoryAdapter } from "../adapters"
import { Category } from "../models"
import { getCategories } from "../redux/slices/categories.slice"
import { getAllCategory } from "../services"
import { useAppDispatch, useAppSelector } from "./redux.hook"
import useFetchAndLoad from "./useFetchAndLoad.hook"

const UseCategories = () => {
    const { loading, callEndpoint } = useFetchAndLoad()
    const dispatch = useAppDispatch()
    const categoriesState = useAppSelector(state => state.categories)
    
    const fetchCategories = async () => {    
        const callCategories: Category[] = await callEndpoint(getAllCategory())
        const categories = callCategories.map((category) => createCategoryAdapter(category))        
        dispatch(getCategories(categories))
    }
        
    useEffect(() => {       
        fetchCategories()
    }, [])
    
    return { loading, fetchCategories, categoriesState }
}

export default UseCategories