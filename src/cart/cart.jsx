import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

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
          <div key={item.id}>
            <img className="img-resize" src={item.image} alt="{item.title}" />
            <p>{item.title}</p>

            <div>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.quantity}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <span>Total Price</span>
        <span>{price}</span>
      </article>
    </>
  );
};

export default Cart;

// import React, { useState, useEffect } from "react";

// const Cart = ({ cart, setCart, handleChange }) => {
//   const [price, setPrice] = useState(0);

//   const handleRemove = (id) => {
//     const arr = cart.filter((item) => item.id !== id);
//     setCart(arr);
//     handlePrice();
//   };

//   const handlePrice = () => {
//     let ans = 0;
//     cart.map((item) => (ans += item.quantity * item.privce));
//     setPrice(ans);
//   };

//   useEffect(() => {
//     handlePrice();
//   });

//   return (
//     <>
//       <article>
//         {cart.map((item) => (
//           <div key={item.id}>
//             <img src={item.image} />
//             <p>{item.title}</p>

//             <div>
//               <button onClick={() => handleChange(item, 1)}>+</button>
//               <button>{item.quantity}</button>
//               <button onClick={() => handleChange(item, -1)}>-</button>
//             </div>
//             <div>
//               <span>{item.price}</span>
//               <button onClick={() => handleRemove(item.id)}>Remove</button>
//             </div>
//           </div>
//         ))}
//         <span> Total Price </span>
//         <span>{price}</span>
//       </article>
//     </>
//   );
// };

// export default Cart;
