import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITEM_IMG_CDN_URL, cloud_image, res_menu } from "../Data/constant";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

export default function ResturentMeniu() {
  const { id } = useParams();

  // custom hook for restaurant data.....
  const {restaurant,menuData} = useRestaurantMenu(id);

  const dispatch = useDispatch();
  const addFoodItem = (item)=>{
    dispatch(addItem(item));
  }


  return (
    <>
      <div className="restaurant-menu">
        <div className="restaurant-summary">
          <img
            className="restaurant-img"
            src={cloud_image + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
          <div className="restaurant-summary-details">
            <h2 className="restaurant-title">{restaurant?.name}</h2>
            <p className="restaurant-tags">
              {restaurant?.cuisines?.join(", ")}
            </p>
            <div className="restaurant-details">
              <div
                className="restaurant-rating"
                style={
                  restaurant?.avgRating < 4
                    ? { backgroundColor: "var(--light-red)" }
                    : restaurant?.avgRating === "--"
                    ? { backgroundColor: "white", color: "black" }
                    : { color: "white" }
                }
              >
                <i className="fa-solid fa-star"></i>
                <span>{restaurant?.avgRating}</span>
              </div>
              <div className="restaurant-rating-slash">|</div>
              <div>{restaurant?.sla?.slaString}</div>
              <div className="restaurant-rating-slash">|</div>
              <div>{restaurant?.costForTwoMessage}</div>
            </div>
          </div>
        </div>

        <div className="restaurant-menu-content">
          <div className="menu-items-container">
            <div className="menu-title-wrap">
              <h3 className="menu-title">Recommended</h3>
              <p className="menu-count">{menuData.length} ITEMS</p>
            </div>
            <div className="menu-items-list">
              {Object.values(menuData).map((item) => (
                <div className="menu-item" key={item?.id}>
                  <div className="menu-item-details">
                    <h3 className="item-title">{item?.name}</h3>
                    <p className="item-cost">
                      {item?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(item?.price / 100)
                        : ""}
                    </p>
                    <p className="item-desc">{item?.description}</p>
                  </div>
                  <div className="menu-img-wrapper">
                    {item?.imageId && (
                      <img
                        src={ITEM_IMG_CDN_URL + item?.imageId}
                        alt=""
                        className="menu-item-img"
                      />
                    )}
                    <button className="add-btn" onClick={()=> addFoodItem(item)}>ADD+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
