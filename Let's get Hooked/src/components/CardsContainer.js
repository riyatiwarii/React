import RestaurantData from "./RestaurantData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const filterData = (searchText, RestaurantData) => {
    return RestaurantData.filter((restaurantdata) => restaurantdata.data.data.name.toLowerCase().includes(searchText.toLowerCase()) )
}

const RestaurantCardsContainer = () => {
    let [searchText, setSearchText] = useState("")
    let [restaurants, setRestaurants] = useState(RestaurantData)
    return (
        <>
        <div className="food-search">
            <input type="text" name="search" placeholder="Search for restaurants..." value={searchText} onChange = {(e) => {
                setSearchText(e.target.value)
                if(searchText === ''){
                    setRestaurants(RestaurantData)
                    console.log( searchText, RestaurantData);
                }
            }} />
            <button className="btn btn-primary" onClick={
                () => {
                    const filteredData = filterData(searchText, restaurants)
                    setRestaurants(filteredData)
                    setSearchText("")
                    console.log( searchText, filteredData);
                }
             } >Search</button>
        </div>
        <div id="cards">
            {
                restaurants.map((restrauant, index) => {
                    return <RestaurantCard {...restrauant} key={index} />
                })
            }
        </div>
        </>
    )
}

export default RestaurantCardsContainer;