import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { previousCart } = useLoaderData();
  // console.log(products);
  const [cart, setCart] = useState(previousCart);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
        {cart.length === 0 && (
          <h3>
            No items for Review.. Please <Link to="/shop">Shop More</Link>.
          </h3>
        )}
      </div>

      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}></Cart>
        <Link to="/shipping">
          <button className="btn-shipping">Proceed Shipping</button>
        </Link>
      </div>
    </div>
  );
};

export default Orders;
