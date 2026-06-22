import { useParams } from "react-router-dom";
import { useContext } from "react";
import Products from "../data/Products";
import { CartContext } from "../context/CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = Products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />

      <div className="details">
        <h1>{product.name}</h1>

        <h2>₹{product.price.toLocaleString()}</h2>

        <p>{product.description}</p>

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;