import { useEffect, useState } from "react";
import { cloud_image, res_list, restaurantsList } from "../Data/constant";
import SimmerUI from "./SimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import useOnline from "../Utils/useOnline";


const RestaurantsCard = ({
  name,
  cuisines,
  avgRatingString,
  cloudinaryImageId,
  areaName,
  costForTwo,
  sla,
}) => {
  return (
    
      <div className="card">
        <img alt="image" src={cloud_image + cloudinaryImageId} />
        <h2>{name}</h2>
        <h5>{cuisines.join(",")}</h5>
        <h5>{areaName}</h5>
      <span>
      <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
      </span>
      </div>
  
  );
};



export default function Body() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // initialy all restaurants show
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [errorMessgae, setErrorMessage] = useState("");

  // Api
  async function getRestaurants() {
    try {
      const data = await fetch(res_list);
      const json = await data.json();
      const fetchedRestaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setAllRestaurants(fetchedRestaurants || []); // Set to an empty array if the data is not available
      setFilteredRestaurants(fetchedRestaurants || []);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  useEffect(() => {
    getRestaurants();
  }, []);



// your are online or offline
const isOnline  = useOnline();
if(!isOnline){
 return <h1 className="is-online"> 🔴 Check Your Network 🔴 </h1>
}



  if (!allRestaurants) return null;

  // Search Data
  const searchData = (searchInput, allRestaurants) => {
    if (searchInput !== "") {
      const filterRes = filterData(searchInput, allRestaurants);
      setFilteredRestaurants(filterRes);
      setErrorMessage("");
      if (filterRes?.length === 0) {
        setErrorMessage(
          `Soory, we couldn't find any results for "${searchInput}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(allRestaurants);
    }
  };

  // this is conditional componenet rendering
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
        />
        <div>
          <button
            className="search-button"
            onClick={() => {
              searchData(searchInput, allRestaurants);
            }}
          >
        Search
          </button>
        </div>
      </div>

      {errorMessgae && <div className="error-message">{errorMessgae}</div>}

      {allRestaurants?.length === 0 ? (
        <SimmerUI />
      ) : (
        <div className="restaurants-list">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/resturant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantsCard {...restaurant.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
