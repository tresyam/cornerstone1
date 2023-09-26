import { useState, useEffect, React } from "react";
import { getSpecificCategory } from "../javascript/Api";
import Cards from "../utilities/cards";

function Jewelry({ handleClick }) {
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    const fetchJewelry = async () => {
      try {
        const results = await getSpecificCategory("jewelery");
        setJewelry(results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJewelry();
  }, []);
  return (
    <>
      <h1 className="h-top-all">Jewelry</h1>
      <div>
        <section className="flex">
          {jewelry &&
            jewelry.map((item) => (
              <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
        </section>
      </div>
    </>
  );
}

export default Jewelry;
