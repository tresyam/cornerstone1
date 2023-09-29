import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, description, price, image, category } = item;

  return (
    <div>
      <div className="flex-item">
        <img className="product-image" src={image} alt="" />
        <p className="product-title">{title}</p>
        <p className="category">{category}</p>
        <p className="product-description">{description}</p>
        <p>Price - ${price}</p>
      </div>

      <button onClick={() => handleClick(item)}>Add to Cart</button>
    </div>
  );
};

export default Cards;
