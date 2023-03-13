import RestaurantData from "./RestaurantData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const RestaurantCardsContainer = () => {
    // let searchText = "Hello"
    const [searchText, setSearchText] = useState("")
    const [restaurantList, setRestaurantList] = useState(RestaurantData)
    const searchRestaurant = (searchText, RestaurantData) => {
        const filteredData = RestaurantData.filter(cardData => {
            if(cardData.data.data.name.toLowerCase().includes(searchText.toLowerCase())){
                return cardData
            }
        } )
        return filteredData
    }
    
    return (
        <>
        <div className="food-search">
            <input type="text" name="search" placeholder="Search for restaurants..." value={searchText} onChange = {(e) => {
                // searchText = e.target.value
                setSearchText(e.target.value)
                console.log(searchText);
                if(e.target.value === ""){
                    setRestaurantList(RestaurantData)
                }
            } } />
            <button className="btn btn-primary" onClick={ () => {
                let receiveFilteredData = searchRestaurant(searchText, RestaurantData)
                setRestaurantList(receiveFilteredData)
            } } >Search</button>
        </div>
        <div id="cards">
            {
                restaurantList.map((restrauant, index) => {
                    return <RestaurantCard {...restrauant} key={index} />
                })
            }
        </div>
        </>
    )
}

export default RestaurantCardsContainer;