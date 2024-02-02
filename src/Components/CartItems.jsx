import { ITEM_IMG_CDN_URL } from "../Data/constant";

export default function CartItems({ name, imageId, price }) {
  return (
    <div className="card">
      <img alt="image" src={ITEM_IMG_CDN_URL + imageId} />
      <h4>{name}</h4>
      {price != undefined ? (
        <h5>Price : {price / 100} Rs.</h5>
      ) : (
        <h5>Price : Item Not Available</h5>
      )}
    </div>
  );
}
