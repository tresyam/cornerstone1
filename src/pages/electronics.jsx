import React, { useEffect, useState } from "react";
import { getSpecificCategory } from "../javascript/Api";
import Cards from "../utilities/cards";

function Electronics({ handleClick }) {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    const fecthElectronics = async () => {
      try {
        const results = await getSpecificCategory("electronics");
        setElectronics(results);
      } catch (err) {
        console.error(err);
      }
    };
    fecthElectronics();
  }, []);
  return (
    <>
      <h1 className="h-top-all">Electronics</h1>
      <div>
        <section className="flex">
          {electronics &&
            electronics.map((item) => (
              <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
        </section>
      </div>
    </>
  );
}

export default Electronics;
