import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div>
      <div class="container">
        <h1>Get formals, casuals & most trending outfits</h1>
        <img
          src="./5.png"
          alt="Avatar"
          className="image"
          style={{ width: "100%" }}
        />
        <div className="middle">
          <Link to="/shop" className="routeContent">
            <div className="text">EXPLORE</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
