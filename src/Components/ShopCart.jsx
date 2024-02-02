import { useSelector } from "react-redux";
import CartItems from "./cartItems";

export default function ShopCart() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <>
      <div className="shop-cart">
        <h1 className="totalItems">Total Item's - {cartItems.length}</h1>
        <div>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
