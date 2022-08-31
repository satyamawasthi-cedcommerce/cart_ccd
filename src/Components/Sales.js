import React from "react";
import { Link } from "react-router-dom";

export default function Sales() {
  return (
    <div>
      <div className="saleDiv">
        <div style={{ width: "50%" }}>
          <img src="s1.jpg" alt="..." style={{ width: "50%" }} />
        </div>

        <div style={{ padding: "3%" }}>
          <h1>
            PAYDAY <br />
            SALE NOW
          </h1>
          <h4>From Aug1 - Aug10</h4>
          <div className="salesoffer">
            Spend a minimal amount of 100$ on your purchase and get flat 30%
            off!!
            <Link to="/shop">
              <button>Grab your apparels now!!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
