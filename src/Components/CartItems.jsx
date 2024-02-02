import { ITEM_IMG_CDN_URL } from "../Data/constant";

export default function CartItems({ name, imageId, price, description }) {
  return (
    <div className="cart-card">
      <div className="cart-img">
        <img alt="image" src={ITEM_IMG_CDN_URL + imageId} />
      </div>
      <div className="item-details">
        <h4>{name}</h4>
        <p>{description}</p>
        {price != undefined ? (
          <h5>Price : {price / 100} Rs.</h5>
        ) : (
          <h5>Price : Item Not Available</h5>
        )}
      </div>
    </div>
  );
}
