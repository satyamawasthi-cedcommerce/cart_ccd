import React from "react";
var totalAmount = 0;
export default function Cart(props) {
  // increasing the quantity
  var quantplus = (productId) => {
    props.setCartArr(
      props.cartArr.map((cartItem) => {
        if (cartItem.id === productId) {
          cartItem.quantity += 1;
        }
        return cartItem;
      })
    );
  };
  // printing the bill
  var printBill = () => {
    var divContents = document.getElementById("bill").innerHTML;
    var a = window.open("", "", "height=800, width=600");
    a.document.write("<html>");
    a.document.write("<body > <h1>Thankyou for being with us!!<br>");
    a.document.write(divContents);
    a.document.write("</body></html>");
    a.document.close();
    a.print();
    props.setCartArr([]);
  };
  // deleting cart item
  var deleteCartItem = (id) => {
    if (window.confirm("Are you sure you want to delete item from cart?"))
      props.setCartArr(props.cartArr.filter((cartItem) => cartItem.id !== id));
  };
  // empty cart feature
  var emptyCart = () => {
    if (window.confirm("Are you sure you want to delete everything from cart?"))
      props.setCartArr([]);
  };
  // decreasing the quantity
  var quantMinus = (productId) => {
    props.setCartArr(
      props.cartArr.filter((cartItem) => {
        if (cartItem.id === productId) {
          if (cartItem.quantity === 1) {
            if (window.confirm("Are you sure you want to remove product"))
              return false;
          } else {
            cartItem.quantity -= 1;
            return cartItem;
          }
        }
        return cartItem;
      })
    );
  };
  // conditional rendering
  if (props.cartArr.length === 0) {
    return (
      <>
        <h1>Your cart is empty!!</h1>
        <img
          src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=20&m=861576608&s=612x612&w=0&h=UgHaPYlYrsPTO6BKKTzizGQqFgqEnn7eYK9EOA16uDs="
          alt="..."
        />
      </>
    );
  } else {
    return (
      <>
        <div className="containerDivCart">
          <div className="cartDiv">
            <h2>Here is the list of products added.</h2>
            <hr />
            {props.cartArr.map((item, index) => (
              <>
                <div className="individualItemCartDiv">
                  <img src={item.image} alt="..." style={{ width: "20%" }} />
                  <div className="productCartContent">
                    <h2>
                      {item.name} <span>({item.brand})</span>
                    </h2>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h4 style={{ color: "green" }}>
                        <i className="fa-solid fa-tag"></i> &#8377;
                        {item.sellingPrice * item.quantity} /{" "}
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "grey",
                          }}
                        >
                          &#8377;{item.markedPrice}
                        </span>
                      </h4>
                      <h5>Fabric: {item.fabric}</h5>
                    </div>

                    <p>{item.description}</p>
                    <h3>
                      {" "}
                      Qunatity:{" "}
                      <i
                        className="fa-solid fa-circle-plus"
                        onClick={() => quantplus(item.id)}
                      ></i>{" "}
                      {item.quantity}{" "}
                      <i
                        className="fa-solid fa-circle-minus"
                        onClick={() => quantMinus(item.id)}
                      ></i>
                    </h3>
                    <button
                      onClick={() => deleteCartItem(item.id)}
                      className="removeItem"
                    >
                      Delete item <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
          <div className="billDiv" id="bill">
            <h2>Here is your Bill</h2>
            <hr style={{ width: "95%" }} />
            <table>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Product Amount</th>
              </tr>
              {props.cartArr.map((item) => (
                <>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      {item.quantity}*{item.sellingPrice} ={" "}
                      {item.quantity * item.sellingPrice}
                    </td>
                  </tr>
                  <p style={{ display: "none" }}>
                    {(totalAmount += item.sellingPrice * item.quantity)}
                  </p>
                </>
              ))}
            </table>
            <hr style={{ width: "95%" }} />
            <h3>Your Bill amounts to: &#8377;{totalAmount}</h3>
            <hr style={{ width: "95%" }} />
            <button className="checkoutbtn" onClick={printBill}>
              Checkout <i className="fa-solid fa-bag-shopping"></i>
            </button>
            <button className="emptyCartbtn" onClick={emptyCart}>
              Empty cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </>
    );
  }
}
