import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCart, children }) => {
  // console.log(cart);

  let quantity = 0;
  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    //Total Price
    total = total + product.price * product.quantity;
    //Shipping Charge
    shipping = shipping + product.shipping;
  }
  const tax = total * 0.1;
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h3> Oder Summary</h3>
      <div className="cart-details">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: $ {total}</p>
        <p>Total Shipping: $ {shipping}</p>
        <p>Tax: $ {tax.toFixed(2)}</p>
        <h5>Grand Total: $ {grandTotal.toFixed(2)}</h5>

        <button onClick={clearCart}>Clear Cart</button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
