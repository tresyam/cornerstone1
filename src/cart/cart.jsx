import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

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
    return <div>Your cart is empty.</div>;
  }

  return (
    <>
      <article className="grid-container">
        {cart.map((item) => (
          <div className="card-item" key={item.id}>
            <div className="img-div">
              <img className="img-resize" src={item.image} alt="{item.title}" />
            </div>
            <ul>
              <li className="item-org">
                <p>{item.title}</p>
                <div className="inc-dec-quantity">
                  <span>{item.price}</span>
                  <button onClick={() => handleChange(item, 1)}>+</button>
                  <button>{item.quantity}</button>
                  <button onClick={() => handleChange(item, -1)}>-</button>
                  <div className="price">
                    <button onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </article>
      <div className="left-div">
        <div className="content">
          <span>Total Price</span>
        </div>
        <div className="cart-total">
          <span>{price}</span>
        </div>
      </div>
    </>
  );
};

export default Cart;
