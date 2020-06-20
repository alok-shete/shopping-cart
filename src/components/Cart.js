import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "classnames";
const Cart = (prop) => {
  return (
    <tr>
      <td>
        <img src={prop.photo} alt="car" width="128" height="72" />
      </td>
      <td>{prop.name}</td>
      <td>{prop.price}</td>
      <td>
        <button
          type="button"
          className={cx("btn", "btn-outline-danger")}
          onClick={() => prop.rmCart(prop.Product)}
        >
          <b>
            <i className="fas fa-trash"></i>
          </b>
        </button>
      </td>
    </tr>
  );
};

export default Cart;
