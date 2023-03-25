import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./RestaurantMenu.css"
import { IMG_CDN_URL } from "../Config/Constants";
import AccordianParent from "../Accordian/Accordian";

const RestaurantMenu = () => {
    const { resid } = useParams();
    console.log(resid);
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    const [restaurantInfo, setRestaurantInfo] = useState(null);
  
    useEffect(() => {
      getRestaurantMenuData();
    }, []);
  
    async function getRestaurantMenuData() {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=${resid}&submitAction=ENTER`
      );
      console.log(data);
      const jsonData = await data.json();
  
      // Declaring Variables for Restaurant Menu
      const filterArr = await jsonData?.data?.cards?.filter(
        (item) => item?.groupedCard
      );
      const cards = await filterArr?.[0]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards;
      const filteredMenuCards = await cards?.filter(
        (card) => card.card.card.title && card.card.card.itemCards
      );
      const menuCards = await filteredMenuCards?.map((card) => {
        return {
          title: card.card.card.title,
          items: card.card.card.itemCards,
        };
      });
      setRestaurantMenu(menuCards);
  
      //Declaring Variables for Restaurant  Info
      const infoCardArr = await jsonData?.data?.cards?.filter(
        (card) => card?.card?.card?.info
      )[0]
      const infoCardObj = await infoCardArr?.card?.card?.info;
  
      setRestaurantInfo(infoCardObj);
    }
    console.log(restaurantInfo);
  
    return !restaurantMenu ? (
      <h1>Loading.....</h1>
    ) : (
      <React.Fragment >
        <div className = "restaurant-menu-container"> 
        <div>
          {(() => {
            const {id, name, cloudinaryImageId } = restaurantInfo;
            return (
              <div>
                <h2 className = "restaurant-name"> {name}</h2>
                <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
              </div>
            );
          })()}
        </div>
  
        {restaurantMenu.map((card, index) => (
          <AccordianParent props={card} key={index} />
        ))}
        </div>
      </React.Fragment>
    );
  };
  
  export default RestaurantMenu;