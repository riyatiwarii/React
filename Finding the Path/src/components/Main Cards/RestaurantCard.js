import { IMG_CDN_URL } from "../Config/Constants";

const RestaurantCard = ({...restaurant}) => {
    const {name, cloudinaryImageId, cuisines, avgRatingString, sla, costForTwo} = restaurant.info
    return (<div className='hotel'> 
        <a href=''>
            <img className="_2tuBw _12_oN" alt="Cuisine image" width="254" height="160" src={IMG_CDN_URL + cloudinaryImageId}/>
            <div className='hotelTitle'>
            <div className='hotelName'>{name}</div>
            <div className='hotelDescription'>{cuisines.join(", ")}</div>
            </div>
            <div className='hotelDetails'>
            <span className='hotelRatings'><i className="fa-regular fa-star"></i>{avgRatingString}</span>
            <span>•</span>
            <span className='hotelTime'>{sla.slaString}</span>
            <span>•</span>
            <span className='hotelCost'>{costForTwo}</span>
            </div>
        </a>
    </div>);
}

export default RestaurantCard