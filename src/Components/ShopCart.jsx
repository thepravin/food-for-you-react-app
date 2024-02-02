import { useSelector } from "react-redux";
import CartItems from "./cartItems";
import BillCart from "./BillCard";
import { useEffect, useState } from "react";

export default function ShopCart() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // total amoutn
  const [total, setTotal] = useState();

  useEffect(() => {
    let calculatedTotal = 0;
    cartItems.forEach((item) => {
      calculatedTotal += item.price;
    });

    setTotal(calculatedTotal);
  }, [cartItems]);

  return (
    <>
      <div className="shop-cart">
        <div>
          <h1 className="totalItems">Total Item's - {cartItems.length}</h1>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}
        </div>

        <div className="bill-card">
          <h2>Bill : </h2>
          {cartItems.map((item) => (
            <BillCart key={item.id} {...item} />
          ))}
          <hr />
          <div className="tottalAmoutn">
            <h5>Total Amount : </h5>
            <p>{total / 100} Rs.</p>
          </div>
          <div className="pay-now">
            <div>
              <button className="g-pay">
                <i class="fa-brands fa-google-pay"></i>
              </button>
            </div>
            <div>
              <button className="a-pay">
                <i class="fa-brands fa-amazon-pay"></i>
              </button>
            </div>
            <div>
              <button className="card-pay">
                <i class="fa-solid fa-credit-card"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
