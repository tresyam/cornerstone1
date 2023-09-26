import React, { useEffect, useState } from "react";
import Cards from "../utilities/cards";
import { getAllProducts } from "../javascript/Api";
import CartColumns from "../cart/cartColoumns";

// import {
//   addNewProduct,
//   createCart,
//   deleteCart,
//   getAllProducts,
//   getAllUsers,
//   updateCart,
//   userLogin,
// } from "./javascript/Api";

function Shop({ handleClick }) {
  const [allProducts, setAllProducts] = useState([]);

  //create useeffect to retrieve api data
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const results = await getAllProducts();
        setAllProducts(results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  return (
    <>
      <h1 className="h-top-all">Shop</h1>
      <section className="flex">
        {allProducts &&
          allProducts.map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
          ))}
      </section>
    </>
  );
}

export default Shop;
