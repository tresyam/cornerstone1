import React, { useEffect, useState } from "react";
import { getSpecificCategory } from "../javascript/Api";
import Cards from "../utilities/cards";

function Mens({ handleClick }) {
  const [mensCategory, setMensCategory] = useState(null);

  useEffect(() => {
    const fetchMensCategory = async () => {
      try {
        const results = await getSpecificCategory("men's clothing");
        setMensCategory(results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMensCategory();
  }, []);

  return (
    <>
      <h1 className="h-top-all">Mens</h1>
      <div>
        <section className="flex">
          {mensCategory &&
            mensCategory.map((item) => (
              <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
        </section>
      </div>
    </>
  );
}

export default Mens;
