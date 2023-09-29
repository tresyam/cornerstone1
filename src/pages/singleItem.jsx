import React, { useState } from "react";
import Cards from "../utilities/cards";

function SingleItem() {
  const [singleItem, setSingleItem] = useState([]);

  useEffect(() => {
    const fetchSingleItem = async () => {
      try {
        const results = await getSingleProductById(productID);
        setSingleItem(results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSingleItem();
  }, []);
  return (
    <>
      <h1 className="h-top-all">Item</h1>
      <div>
        <section className="flex">
          {singleItem &&
            singleItem.map((item) => (
              <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
        </section>
      </div>
    </>
  );
}

export default SingleItem;
