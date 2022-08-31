import { useState } from "react";
// importing the necessary components
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Catalogues from "./Components/Catalogues";
import Conversionelement from "./Components/Conversionelement";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Shop from "./Components/Shop";

function App() {
  // state array to store items added to cart
  const [cartArr, setCartArr] = useState([]);

  return (
    <div className="App">
      <Header cartArr={cartArr} />
      {/* providing navigation through react router dom */}
      <Routes>
        <Route path="/" element={<Conversionelement />} />
        <Route path="/catalogues" element={<Catalogues />} />
        <Route path="/about" element={<About />} />
        {/* cart array passed as props */}
        <Route
          path="/shop"
          element={<Shop cartArr={cartArr} setCartArr={setCartArr} />}
        />
        <Route
          path="/cart"
          element={<Cart cartArr={cartArr} setCartArr={setCartArr} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
