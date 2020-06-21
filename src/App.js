import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./App.css";
import Product from "./components/Product";
import Cart from "./components/Cart";
import cx from "classnames";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Mansory Stallone Black",
        price: 34300,
        cart: false,
        photo:
          "https://www.hdwallpapers.in/thumbs/2020/mansory_stallone_black_4k_5k_hd-t2.jpg",
      },
      {
        id: 2,
        name: "Pogea Racing Zeus",
        price: 34300,
        cart: false,
        photo:
          "https://www.hdwallpapers.in/thumbs/2019/pogea_racing_zeus_2019_4k-t2.jpg",
      },
      {
        id: 3,
        name: "Mitsubishi",
        price: 34300,
        cart: false,
        photo:
          "https://www.hdwallpapers.in/thumbs/2019/mitsubishi_mi_tech_concept_2019_4k_2-t2.jpg",
      },
      {
        id: 4,
        name: "Polestar 2",
        price: 34300,
        cart: false,
        photo: "https://www.hdwallpapers.in/thumbs/2019/polestar_2_2019-t2.jpg",
      },
      {
        id: 5,
        name: "Range Rover Velar",
        price: 34300,
        cart: false,
        photo:
          "https://www.hdwallpapers.in/thumbs/2019/range_rover_velar_svautobiography_dynamic_edition_2019_4k_8k-t2.jpg",
      },
      {
        id: 6,
        name: "Acura NSX",
        price: 34300,
        cart: false,
        photo:
          "https://www.hdwallpapers.in/thumbs/2019/wolf_racing_ford_mustang_one_of_7_2019-t1.jpg",
      },
    ],
    count: 0,
    totalPrice: 0,
    show: false,
    order: false,
  };

  Cart = (id) => {
    var total = 0;
    var count = 0;
    const products = [...this.state.products];
    const index = products.indexOf(id);
    products[index] = { ...id };
    products[index].cart = !products[index].cart;

    for (var i = 0; i < products.length; i++) {
      if (products[i].cart) {
        count += 1;
        total += products[i].price;
      }
    }
    this.setState({ products, count: count, totalPrice: total, order: false });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };
  orderPlace = () => {
    const products = [...this.state.products];
    for (var i = 0; i < products.length; i++) {
      products[i].cart = false;
    }
    this.setState({ products, count: 0, totalPrice: 0, order: true });
  };

  render() {
    return (
      <div>
        <h1>{this.state.products.id}</h1>
        <div>
          <nav
            className={cx(
              "navbar",
              "navbar-light",
              "bg-light",
              "justify-content-between"
            )}
          >
            <a className="navbar-brand" href="#home">
              <b>Shopping Cart</b>
            </a>
            <form className="form-inline">
              <input
                className={cx("form-control", "mr-sm-2")}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className={cx("btn", "btn-outline-success", "my-2", "my-sm-0")}
                type="submit"
              >
                Search
              </button>
              <>
                <Button id="cart" variant="light" onClick={this.handleShow}>
                  <b>
                    Cart &nbsp;
                    <span
                      className={cx("badge", "badge-pill", "badge-success")}
                    >
                      {this.state.count == 0 ? null : this.state.count}
                    </span>
                  </b>
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <b>Cart</b>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {this.state.count !== 0 ? (
                      <Table responsive>
                        <thead>
                          <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.products.map((product) =>
                            !product.cart ? null : (
                              <Cart
                                name={product.name}
                                price={product.price}
                                photo={product.photo}
                                rmCart={this.Cart}
                                Product={product}
                              />
                            )
                          )}
                          <tr>
                            <th></th>
                            <th></th>
                            <th>{this.state.totalPrice}</th>
                            <th></th>
                          </tr>
                        </tbody>
                      </Table>
                    ) : this.state.order ? (
                      <div className={cx("container", "text-center")}>
                        <h3>
                          <i
                            className={cx(
                              "fa",
                              "fa-shopping-cart",
                              "fa-5x",
                              "cartIcon"
                            )}
                            aria-hidden="true"
                          >
                            {" "}
                          </i>
                          <br />
                          <br />

                          <b>Order Placed</b>
                        </h3>
                      </div>
                    ) : (
                      <div className={cx("container", "text-center")}>
                        <h3>
                          <i
                            className={cx(
                              "fa",
                              "fa-shopping-cart",
                              "fa-5x",
                              "cartIcon"
                            )}
                            aria-hidden="true"
                          >
                            {" "}
                          </i>
                          <br />
                          <br />

                          <b>Cart Is Empty</b>
                        </h3>
                      </div>
                    )}
                  </Modal.Body>
                  <Modal.Footer>
                    {this.state.count !== 0 ? (
                      <div className={cx("container", "text-center")}>
                        <button
                          className={cx(
                            "btn",
                            "btn-outline-success",
                            "my-2",
                            "my-sm-0"
                          )}
                          onClick={this.orderPlace}
                          type="submit"
                        >
                          Place Order
                        </button>
                      </div>
                    ) : null}
                  </Modal.Footer>
                </Modal>
              </>
            </form>
          </nav>
        </div>
        <div>
          <div className="card-columns">
            {this.state.products.map((product) => (
              <Product
                id={product.id}
                name={product.name}
                price={product.price}
                photo={product.photo}
                addCart={this.Cart}
                product={product}
                bCart={
                  !product.cart
                    ? cx("btn", "btn-outline-dark")
                    : cx("btn", "btn-outline-success")
                }
                mCart={!product.cart ? "Add To Cart" : "In Cart"}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
