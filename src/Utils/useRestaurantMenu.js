
import { useState,useEffect } from "react";
import { res_menu } from "../Data/constant";


const useRestaurantMenu = (id)=>{

    const [restaurant, setRestaurant] = useState(null);
    const [menuData, setMenuData] = useState([]);
  
    // Api
    async function getRestaurants() {
      try {
        const data = await fetch(res_menu + id);
        const json = await data.json();     
        const restaurantData = json?.data?.cards[0]?.card?.card?.info || null;
        setRestaurant(restaurantData);
  
        // set menu itsm
        const menuItemsData =
          json?.data?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
            ?.filter(
              (x) =>
                x["@type"] ==
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            )
            ?.map((x) => x.itemCards)
            .flat()
            .map((x) => x.card?.info) || [];
  
        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
          if (!uniqueMenuItems.find((x) => x.id === item.id)) {
            uniqueMenuItems.push(item);
          }
        });
        setMenuData(uniqueMenuItems);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    }
  
    useEffect(() => {
      getRestaurants();
    }, []);

    // return restaurant menu data
    return {restaurant,menuData};

}

export default useRestaurantMenu;