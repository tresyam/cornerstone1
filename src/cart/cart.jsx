import React, { useState, useEffect } from "react";
import Checkoutbutton from "../components/checkoutbutton";
import {
  BsTrash3,
  BsFillCaretUpFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
// import Cookies from "js-cookie";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const addTax = +price * 0.1;
  const roundTaxTotal = Math.floor(addTax);
  const addedCents = roundTaxTotal - price;
  const subTotal = Math.ceil(price);

  const shipCal = price * 0.01;
  const totalShipCal = Math.ceil(shipCal);

  const totalPrice = price + totalShipCal;
  const roundTotalPrice = Math.floor(totalPrice);

  // Function to calculate and set the total price
  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of cart) {
      total += item.quantity * item.price;
    }
    setPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  if (!Array.isArray(cart) || cart.length === 0) {
    return <h1>Your cart is empty.</h1>;
  }
  const limtitWordCount = (text, limit) => {
    const words = text.split(" ");
    return words.slice(0, limit).join(" ");
  };

  return (
    <>
      <h1 className="h-top-all">Cart</h1>
      <article className="grid-container">
        {cart.map((item) => (
          <div className="card-item" key={item.id}>
            <div className="img-div">
              <img className="img-resize" src={item.image} alt="{item.title}" />
            </div>
            <div className="left-item-id">
              <h5 className="item-org">
                {limtitWordCount(item.title, 4)}
                <div></div>
                <span>${item.price}</span>
              </h5>
              <p className="item-org">{item.category}</p>{" "}
            </div>

            <div className="quantity">
              <p style={{ color: "gray", fontWeight: "lighter" }}>Quantity:</p>
              <div className="horz-quat">
                <div>
                  <BsFillCaretUpFill
                    fontSize="30px"
                    onClick={() => handleChange(item, 1)}
                  />
                </div>
                <div>
                  <p>{item.quantity}</p>
                </div>
                <div>
                  <BsFillCaretDownFill
                    fontSize="30px"
                    onClick={() => handleChange(item, -1)}
                  />
                </div>
              </div>
              <div>
                <BsTrash3
                  fontSize="30px"
                  onClick={() => handleRemove(item.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </article>
      <div className="top-right-div">
        <h3 className="check-out">Summary</h3>
        <span className="mem-offer">Members get FREE shipping</span>
        <br></br>
        <div className="cart-r-num">
          Subtotal
          <div className="check-out">${subTotal}</div>
        </div>
        <div className="cart-r-num">
          Estimated Shipping & Handling
          <div className="check-out">${totalShipCal}</div>
        </div>
        <div className="cart-r-num">
          Estimated Tax
          <div className="check-out">${roundTaxTotal}</div>
        </div>
        <hr></hr>
        <div className="cart-r-num">
          Total Price:
          <span>
            <strong>${roundTotalPrice}</strong>
          </span>
        </div>

        <hr></hr>

        <Checkoutbutton />
      </div>
    </>
  );
};

export default Cart;
