import React, { Component } from "react";
import Title from "./components/Title";
import ListProduct from "./components/ListProduct";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* TITLE : START */}
        <Title />
        {/* TITLE : END */}
        <div className="row">
          {/* LIST PRODUCT : START */}
          <ListProduct />
          {/* LIST PRODUCT : END */}
          {/* CART : START */}
          <Cart />
          {/* CART : END */}
        </div>
      </div>
    );
  }
}

export default App;
