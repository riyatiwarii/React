import React from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI"
import { useState , useEffect} from "react";
import { API_URL } from "../Config/Constants";

const RestaurantCardsContainer = () => {
    // let searchText = "Hello"
    const [searchText, setSearchText] = useState("")
    const [allRestaurantList, setAllRestaurantList] = useState([])
    const [filteredRestaurantList, setFilteredRestaurantList] = useState()
    useEffect(() => {
        getResaurantsData();
    }, [])

    async function getResaurantsData(){
        const data = await fetch(API_URL)
        const json = await data.json()        
        setFilteredRestaurantList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        setAllRestaurantList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    }

    const searchRestaurant = (searchText, allRestaurantList) => {
        const filteredData = allRestaurantList.filter(cardData => {
            if(cardData.info.name.toLowerCase().includes(searchText.toLowerCase())){
                return cardData
            }
        } )
        return filteredData
    }

    return allRestaurantList.length === 0 ? <ShimmerUI/> : (
        <>
        <div className="food-search">
            <input type="text" name="search" placeholder="Search for restaurants..." value={searchText} onChange = {(e) => {
                setSearchText(e.target.value)
                if(e.target.value === ""){
                    setFilteredRestaurantList(allRestaurantList)
                }
            } } />
            <button className="btn btn-primary" onClick={ () => {
                let getFilteredData = searchRestaurant(searchText, allRestaurantList)
                setFilteredRestaurantList(getFilteredData)
            } } >Search</button>
        </div>
        
        <div id="cards">
            {
                filteredRestaurantList.length === 0 ? <h1>No Restaurant found</h1> : filteredRestaurantList.map((restrauant, index) => {
                    return <RestaurantCard {...restrauant} key={index} />
                })
            }
        </div>
        </>
    )
}

export default RestaurantCardsContainer;