import { useState, useEffect } from "react";

const useRestaurantMenu = (resid) => {

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

      return [restaurantInfo, restaurantMenu]

}

export default useRestaurantMenu