import React, { useState, useEffect } from "react";
import { getAllCarts, getSingleCart } from "./api";
// Adjust the import path based on your project structure

function CartPage({ userId }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchCartData() {
      try {
        // Use the appropriate function to get cart data based on user ID or cart ID
        // For example, user's cart ID:
        // const cartData = await getSingleCart(cartId);

        // Or fetch all carts and filter for the user's cart:
        const allCarts = await getAllCarts();
        const userCart = allCarts.find((cart) => cart.userId === userId);

        if (userCart) {
          setCart(userCart.products);
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    }

    fetchCartData();
  }, [userId]);

  return (
    <div>
      <h1>Cart Page</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.productId} className="cart-item">
            <h2>Product ID: {item.productId}</h2>
            <p>Quantity: {item.quantity}</p>
            {/* Add more details here as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
