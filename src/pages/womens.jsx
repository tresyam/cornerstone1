import React, { useEffect, useState } from "react";
import { getSpecificCategory } from "../javascript/Api";
import Cards from "../utilities/cards";

function Womens({ handleClick }) {
  const [womensCategory, setWomensCategory] = useState([]);

  useEffect(() => {
    const fetchWomensCategory = async () => {
      try {
        const results = await getSpecificCategory("women's clothing");
        setWomensCategory(results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWomensCategory();
  }, []);

  return (
    <>
      <h1 className="h-top-all">Womens</h1>
      <div>
        <section className="flex">
          {womensCategory &&
            womensCategory.map((item) => (
              <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
        </section>
      </div>
    </>
  );
}

export default Womens;
