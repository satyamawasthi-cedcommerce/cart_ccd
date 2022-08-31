import React from "react";

export default function About() {
  return (
    // returning JSX
    <div style={{ display: "flex", margin: "5%" }}>
      <img src="./t1.jpg" alt="..." style={{ width: "20%" }} />
      <div style={{ width: "50%" ,textAlign:"left" , marginLeft:"5%"}}>
        <h2>About cotton Clothing</h2>
        <p style={{fontSize:"Large"}}>
          We’ve said it time and time again, menswear is ruled by history and
          tradition. Every person in menswear (designer, stylist, editor, etc)
          has taken inspiration from the past at one time or another. And no era
          has been overlooked. Therefore, as we continue to explore the
          foundations of personal style, I thought we’d take a quick look back
          at the last hundred-or-so years in men’s fashion. Perhaps this will
          provide a little insight or context as to how menswear shifts, and
          more importantly, how we can make informed decisions when it comes to
          buying clothing and developing personal style.
        </p>
      </div>
    </div>
  );
}
