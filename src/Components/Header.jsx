import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Store from "../Utils/Store";

const Title = () => (
  <h1 className="title">🍕 𝓕𝓸𝓸𝓭 𝓯𝓸𝓻 𝓨𝓸𝓾...🍟 </h1>
  // <img className="logo" src="public\logo.jpeg" alt="logo" />
);
const NavBar = () => <div></div>;

// authentication
const loggedUser = () => {
  return false;
};

export default function Header() {
  const [islogging, setisLogging] = useState(false);

  const cartItems = useSelector(Store => Store.cart.items)

  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-bar">
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* <li>
              <Link to="/contact">Contact</Link>
            </li> */}
            <li>
              <Link to="/cart" >
              <i class="fa fa-shopping-cart" style={{fontsize:"24px"}}></i>
              <span className="cart-number">+{cartItems.length}</span>
              </Link>
            </li>
            {/* <li>
              <Link to="/instamart">InstaMart</Link>
            </li> */}
            <li >
              {islogging ? (
                <button className="login-btn" onClick={() => setisLogging(false)}>LogOut</button>
              ) : (
                <button className="login-btn" onClick={() => setisLogging(true)}>Login</button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
