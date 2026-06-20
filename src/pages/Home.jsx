import "./Home.css";
import ProductCard from "../components/ProductCard";
import Products from "../data/Products";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = Products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="home">
      <h1>ElectroMart</h1>

      <p>
        Discover the latest laptops, smartphones, headphones,
        smartwatches, and accessories at the best prices.
      </p>

      <button>Shop Now</button>

      <h2>Featured Products</h2>

      <div className="category-buttons">
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Laptop")}>Laptops</button>
        <button onClick={() => setCategory("Mobile")}>Mobiles</button>
        <button onClick={() => setCategory("Audio")}>Audio</button>
        <button onClick={() => setCategory("Watch")}>Watches</button>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;