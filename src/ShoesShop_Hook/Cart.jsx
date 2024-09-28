import React from "react";

function Cart({ cart, setCart }) {
  const handleDeleteItemFromCart = (idShoe) => {
    setCart(cart.filter((item) => item.id !== idShoe));
  };

  const handleChangeQuantity = (id, change) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          total: change ? item.total + 1 : Math.max(1, item.total - 1),
        };
      }
      return item;
    });
    setCart(newCart);
  };

  const renderTable = () => {
    return cart.map((item, index) => (
      <tr key={index}>
        <td style={{ width: "30%" }}>{item.name}</td>
        <td>
          <img src={item.image} style={{ width: "100%" }} alt="img" />
        </td>
        <td style={{ width: "20%" }}>
          <button
            className="btn btn-success"
            onClick={() => handleChangeQuantity(item.id, true)}
          >
            +
          </button>
          <span className="mx-2">{item.total}</span>
          <button
            className="btn btn-danger"
            onClick={() => handleChangeQuantity(item.id, false)}
          >
            -
          </button>
        </td>
        <td>{item.price}$</td>
        <td style={{ width: "10%" }}>
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteItemFromCart(item.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.total * item.price,
    0
  );

  return (
    <div className="col-6">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th style={{ width: "15%" }}>Image</th>
            <th>Total</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
        {cart.length !== 0 && (
          <tfoot>
            <tr>
              <td colSpan={3}></td>
              <td>
                <strong>Total amount: </strong>
              </td>
              <td>{totalAmount}$</td>
            </tr>
          </tfoot>
        )}
      </table>
      {cart.length === 0 && <p className="text-center">No item to display</p>}
    </div>
  );
}

export default Cart;
