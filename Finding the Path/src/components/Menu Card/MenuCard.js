import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import "../Menu Card/MenuCard.css"
import { IMG_CDN_URL } from "../Config/Constants";

const MenuCard = ({...props}) => {

    const {restaurant, cardtype} = props
    console.log(cardtype);
    console.log(typeof cardtype);
    const {cloudinaryImageId, name, city} = restaurant
        console.log(cloudinaryImageId, name, city);
      
        console.log(cardtype.length);
    return (
        // <h1>hello</h1>
        <section className="food-menu">
        <div className="container">
        <div className="restrau-wrap">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="food menu Image" className="restrau"/>
       
        <div>
            <h2>{name}</h2>
            <div>{city}</div>
            <div>Ratings: 5 ⭐</div>
        </div>
        </div>
    <h2 className="text-center">FOOD MENU</h2>
        {
            cardtype.map((item) => {
                return (
                    <div>
        <h2>{item.title}</h2>
        <div className="food-menu-box">
        <div className="img-food-menu">
            <img
            src="https://i.postimg.cc/L6VKJBys/menu-pizza.jpg"
            alt="food menu Image"
            className="img-order"
            />
        </div>
        <div className="Desc-food-menu">
            <h3 className="food-title">Food Title</h3>
            <p>
            <b>$2.3</b>{" "}
            </p>
            <p className="para-formating">
            Made with italian Sauce, Chiken, and organice vegetables.
            <br />
            <br />
            <button href="" className="order-now">
                Order Now
            </button>
            </p>
        </div>
        </div>
        </div>
                )
            })
        }
    
    <div className="clearfix" />
    </div>
        </section>
    )
}

const MenuCardContainer = () => {

    const params = useParams();
    const {id} = [params]
    const [restaurantMenu, setRestaurantMenu] = useState({})
    const [cardTypeItems, setCardTypeItems] = useState([])

    useEffect(() => {
        getRestaurantMenu();
    }, [])

    async function getRestaurantMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4089123&lng=77.3177894&restaurantId=81633&submitAction=ENTER")
        const json = await data.json()
        setRestaurantMenu(json?.data?.cards[0]?.card?.card?.info)
        const arr1 = json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const cardsarr = arr1?.map(item => item?.card?.card).filter(card => card.title)
        cardsarr === undefined ? [] : setCardTypeItems(cardsarr)
    }
    
    console.log(cardTypeItems);
    // console.log(restaurantMenu);
    // const cloudinaryImageId = restaurantMenu[0]?.card?.card?.info?.cloudinaryImageId
    // const name = restaurantMenu[0]?.card?.card?.info?.name
    // const city = restaurantMenu[0]?.card?.card?.info?.city
    // console.log(restaurantMenu[0]?.card?.card?.info?.cloudinaryImageId);
    
    return !cardTypeItems.length ? <h1>Loading...</h1> : (
        
        <MenuCard restaurant = {restaurantMenu}  cardtype = {cardTypeItems} />

    );
}

export default MenuCardContainer