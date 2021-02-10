import React, { PureComponent } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

export class Checkout extends PureComponent {
  render() {
    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="ad__baner"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    );
  }
}

export default Checkout;
