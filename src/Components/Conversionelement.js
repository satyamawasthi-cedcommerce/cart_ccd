import React from "react";
import Brands from "./Brands";
import Categories from "./Categories";
import Footer from "./Footer";
import Sales from "./Sales";
import { Link } from "react-router-dom";
export default function Conversionelement() {
  return (
    // returning JSX
    <>
      <div className="mainDiv">
        <div className="rightContent">
          <h1>LET'S</h1>
          <h1>EXPLORE</h1>
          <h1 id="style2">UNIQUE</h1>
          <h1>OUTFITS.</h1>
          <h3>Live for fashion.</h3>
          <div>
            <Link to="/shop">
              <button className="getStartedbtn">Get Started</button>
            </Link>

            <span className="exploreOption">
              Explore now <i className="fa-solid fa-arrow-right-long"></i>
            </span>
          </div>
        </div>
        <div style={{ textAlign: "right", width: "60%" }}>
          <img
            src="./1.jpg"
            alt="..."
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
      </div>
      <Brands />
      <Sales />
      <Categories />
      <Footer />
    </>
  );
}
