import React from "react";
import { Link } from "react-router-dom";
// displaying the no. of items in cart
export default function Header(props) {
  var displayMenu = () => {
    var x = document.getElementById("header");
    if (x.className === "header") {
      x.className += "responsive";
    } else {
      x.className = "header";
    }
  };
  return (
    // returning JSX
    <>
      <header id="header" className="header">
        <Link to="/" className="routeContent">
          <i className="fa-brands fa-cotton-bureau fa-3x" id="logo"></i>
        </Link>
        <Link to="/catalogues" className="routeContent">
          <h2>Catalogue</h2>
        </Link>
        <Link to="/about" className="routeContent">
          <h2>About</h2>
        </Link>
        <Link to="/shop" className="routeContent">
          <h2>Shop</h2>
        </Link>
        <Link to="/cart" className="routeContent">
          <h2>
            <i className="fa-solid fa-cart-arrow-down"></i><sup style={{backgroundColor:""}}>{props.cartArr.length}</sup>
          </h2>
        </Link>

        <div className="responsiveIcon" onClick={displayMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    </>
  );
}
