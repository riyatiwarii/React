import React from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI"
import { useState} from "react";
import { useSearchRestaurant, useRestaurantData } from "../../helpers/useRestaurant";
import useStatus from "../../helpers/useStatus";

const RestaurantCardsContainer = () => {
    const online = useStatus()
    const [searchText, setSearchText] = useState("")
    const [allRestaurantList, filteredRestaurantList, setAllRestaurantList, setFilteredRestaurantList] = useRestaurantData()
    const getFilteredData = useSearchRestaurant(searchText, allRestaurantList)

    if(!online){
        return (
          <h1>🔴Offline, Please check your Internet Connection.</h1>
        )
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