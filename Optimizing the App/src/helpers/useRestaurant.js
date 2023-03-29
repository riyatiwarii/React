import { useState, useEffect } from "react"
import { API_URL } from "../components/Config/Constants"

export const useSearchRestaurant = (searchText, allRestaurantList) => {
    const filteredData = allRestaurantList.filter(cardData => {
        if(cardData.info.name.toLowerCase().includes(searchText.toLowerCase())){
            return cardData
        }
    } )
    return filteredData
}

export const useRestaurantData = () => {
    useEffect(() => {
        getResaurantsData();
    }, [])

    const [allRestaurantList, setAllRestaurantList] = useState([])
    const [filteredRestaurantList, setFilteredRestaurantList] = useState()

    async function getResaurantsData(){
        const data = await fetch(API_URL)
        const json = await data.json()        
        setFilteredRestaurantList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        setAllRestaurantList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    }

    return [allRestaurantList, filteredRestaurantList, setAllRestaurantList, setFilteredRestaurantList]
}