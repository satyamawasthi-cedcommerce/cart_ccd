// this is the shop page where all the products reside
import productCredentials from "./Products";
export default function Shop(props) {
  // function which will add item to cart
  var addtoCart = (item) => {
    var pid = item.id;
    var cartProduct = props.cartArr.find((item) => item.id === pid);
    if (cartProduct) {
      props.setCartArr(
        props.cartArr.filter((item) => {
          if (item.id === pid) {
            item.quantity = item.quantity + 1;
            return item;
          }
          return item;
        })
      );
    } else {
      props.setCartArr([...props.cartArr, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div>
      <div className="productsDiv">
        {/* iterating the products array and printing the products dynamically */}
        {productCredentials.map((item, index) => (
          <>
            <div className="product">
              <img src={item.image} alt="..." />

              <div className="productDetails">
                <h3>
                  {item.name} <span>({item.brand})</span>
                </h3>
                <h4 style={{ color: "green" }}>
                  <i className="fa-solid fa-tag"></i> &#8377;{item.sellingPrice}{" "}
                  /{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "grey" }}
                  >
                    &#8377;{item.markedPrice}
                  </span>
                </h4>
                <button className="cartbtn" onClick={() => addtoCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
