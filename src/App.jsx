import { Routes, Route, Link } from "react-router-dom";
// import { Container } from "react-bootstrap";
import Header from "./components/header";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Womens from "./pages/womens";
import Jewelry from "./pages/jewelry";
import Electronics from "./pages/electronics";
import Cart from "./cart/cart";
import CheckOut from "./pages/CheckOut";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import SingleItem from "./pages/singleItem";
import Payment from "./pages/payment";
import ThankYou from "./pages/thankyou";
import "./cart/cart.css";
import "./signupForm.css";
import "./App.css";
import "./shop.css";
import "./checkOut.css";
import Mens from "./pages/mens";
// import "./navbar.css"
import LoginPage from "./LoginPage";
import { deleteLoginCookie } from "./javascript/Api";
// import { Routes, Route } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import Header from "./components/header";
// import Home from "./pages/home";
// import Shop from "./pages/shop";
// import Cart from "./cart/cart";
// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import "./cart/cart.css";
// import "./App.css";
// import "./shop.css";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  // Create a function to load the cart from cookies when the app starts
  const loadCartCookies = () => {
    const cartData = Cookies.get("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  };

  useEffect(() => {
    loadCartCookies();
  }, []);

  const handleClick = (item) => {
    if (cart.some((cartItem) => cartItem.id === item.id)) {
      // If item is already in the cart, update its quantity
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          // If item is not in the cart, add it with quantity 1
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      // If item is not in the cart, add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    Cookies.set("cart", JSON.stringify(cart), { expires: 1 });
  };

  const handleChange = (item, data) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        const newQuantity = cartItem.quantity + data;
        return { ...cartItem, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return cartItem;
    });
    setCart(updatedCart);
    Cookies.set("cart", JSON.stringify(cart), { expires: 1 });
  };

  // deleteLoginCookie();

  return (
    <>
      <Header setShow={setShow} size={cart.length} />
      {/* <Container> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/electronics"
          element={<Electronics handleClick={handleClick} />}
        />
        <Route path="/mens" element={<Mens handleClick={handleClick} />} />
        <Route
          path="/payment"
          element={<Payment handleClick={handleClick} />}
        />
        <Route path="/womens" element={<Womens handleClick={handleClick} />} />
        <Route
          path="/thankyou"
          element={<ThankYou handleClick={handleClick} />}
        />
        <Route
          path="/singleitem"
          element={<SingleItem handleClick={handleClick} />}
        />
        <Route
          path="/jewelry"
          element={<Jewelry handleClick={handleClick} />}
        />
        <Route path="/shop" element={<Shop handleClick={handleClick} />} />
        <Route
          path="/checkout"
          element={<CheckOut handleClick={handleClick} />}
        />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          }
        />
        <Route path="/user" element={<LoginPage />} />
      </Routes>
      {/* </Container> */}
    </>
  );
}

export default App;

// import Cookies from "js-cookie";
// "react-cookie": "^6.1.0",

// *** logging time for purchased items
// Cookies.set("loggedIn", response.data, { expires: d });
// let d = new Date();
//       d.setTime(d.getTime() + 59 * 60 * 1000);
//       Cookies.set("loggedIn", response.data, { expires: d });
// const login = Cookies.get("loggedIn");

// *** Documentation
// https://www.npmjs.com/package/js-cookie

// https://medium.com/how-to-react/how-to-use-js-cookie-to-store-data-in-cookies-in-react-js-aab47f8a45c3
