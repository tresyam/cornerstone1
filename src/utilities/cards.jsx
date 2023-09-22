import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, description, price, image } = item;

  return (
    <div className="flex-item">
      <img className="product-image" src={image} alt="" />
      <p className="product-title">{title}</p>
      <p className="product-description">{description}</p>
      <p>Price - ${price}</p>

      <button onClick={() => handleClick(item)}>Add to Cart</button>
    </div>
  );
};

export default Cards;
