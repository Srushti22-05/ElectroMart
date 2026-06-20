import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Header.css";

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2>ElectroMart</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li>
          <Link to="/cart">
            Cart ({cart.length})
          </Link>
        </li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;