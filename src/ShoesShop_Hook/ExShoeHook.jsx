import React, { useState } from "react";
import Cart from "./Cart";
import ListShoe from "./ListShoe";

function ExShoeHook() {
  let [cart, setCart] = useState([]);

  const handleAddToCart = (shoe) => {
    // console.log(shoe);
    const existingItem = cart.find((item) => item.id === shoe.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === shoe.id ? { ...item, total: item.total + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...shoe, total: 1 }]);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row align-items-start">
        <ListShoe addToCart={handleAddToCart} />
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default ExShoeHook;
