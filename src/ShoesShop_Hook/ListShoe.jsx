import React, { useState } from "react";
import { dataShoe } from "./dataShoe";
import ItemShoe from "./ItemShoe";

function ListShoe({ addToCart }) {
  let [list] = useState(dataShoe);
  return (
    <div className="row col-6">
      {list.map((shoe, index) => (
        <ItemShoe key={index} shoe={shoe} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ListShoe;
