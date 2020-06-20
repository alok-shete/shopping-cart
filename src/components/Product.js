import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "classnames";

const Product = (prop) => {
  return (
    <div className={cx("card", "text-center")} style={{ width: 350 }}>
      <div className="card-body">
        <img className="card-img-top" src={prop.photo} alt="CardImage" />
        <h5 className="card-title">
          <b>{prop.name}</b>
        </h5>

        <b>
          <p>&#36; {prop.price}</p>
        </b>
        <button
          type="button"
          className={prop.bCart}
          onClick={() => prop.addCart(prop.product)}
        >
          {prop.mCart}
        </button>
      </div>
    </div>
  );
};

export default Product;
