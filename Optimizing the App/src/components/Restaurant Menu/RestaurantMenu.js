import React from "react";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css"
import { IMG_CDN_URL } from "../Config/Constants";
import AccordianParent from "../Accordian/Accordian";
import useRestaurantMenu from "../../helpers/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resid } = useParams();
    const [restaurantInfo, restaurantMenu] = useRestaurantMenu(resid)

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