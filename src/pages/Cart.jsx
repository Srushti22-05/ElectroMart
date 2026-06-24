import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cart,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>₹{item.price.toLocaleString()}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromCart(index)
                }
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h2>
              Total: ₹
              {totalPrice.toLocaleString()}
            </h2>

            <button
              className="clear-btn"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>

          <div className="cart-actions">
            <button
              className="continue-btn"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>

            <button
              className="checkout-btn"
              onClick={() =>
                alert(
                  "Checkout feature coming soon!"
                )
              }
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;