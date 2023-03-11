import RestaurantData from "./RestaurantData";

const RestaurantCard = ({...restaurant}) => {
    const {name, cloudinaryImageId, cuisines, avgRating, slaString, costForTwoString} = restaurant.data.data
    return (<div className='hotel'> 
        <a href=''>
            <img className="_2tuBw _12_oN" alt="Cuisine image" width="254" height="160" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId}/>
            <div className='hotelTitle'>
            <div className='hotelName'>{name}</div>
            <div className='hotelDescription'>{cuisines.join(", ")}</div>
            </div>
            <div className='hotelDetails'>
            <span className='hotelRatings'><i className="fa-regular fa-star"></i>{avgRating}</span>
            <span>•</span>
            <span className='hotelTime'>{slaString.toLowerCase()}</span>
            <span>•</span>
            <span className='hotelCost'>{costForTwoString}</span>
            </div>
        </a>
    </div>);
}

const RestaurantCardsContainer = () => (
    <div id="cards">
        {
            RestaurantData.map((restrauant, index) => {
                return <RestaurantCard {...restrauant} key={index} />
            })
        }
    </div>
)

export default RestaurantCardsContainer;