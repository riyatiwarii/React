import RestaurantData from "./RestaurantData";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI"
import { useState , useEffect} from "react";
import { API_URL } from "./Constants";

const RestaurantCardsContainer = () => {
    // let searchText = "Hello"
    const [searchText, setSearchText] = useState("")
    const [restaurantList, setRestaurantList] = useState([])

    useEffect(() => {
        getResaurantsData();
    })

    async function getResaurantsData(){
        const data = await fetch(API_URL)
        const json = await data.json()        
        setRestaurantList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        
    }

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