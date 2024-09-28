import React from "react";

function ItemShoe({ shoe, addToCart }) {
  // console.log(addToCart);
  return (
    <div className="col-3 mb-5">
      <div className="card text-start bg-warning">
        <img className="card-img-top" src={shoe.image} alt={shoe.name} />
        <div className="card-body">
          <h3 className="card-title">{shoe.name}</h3>
          <h4 className="card-text">{shoe.price}$</h4>
          <button
            className="bg-dark text-white btn"
            onClick={() => addToCart(shoe)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemShoe;
