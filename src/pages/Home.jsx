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

      {/* Category Filter */}
      <div className="category-buttons">
        <button
          className={category === "All" ? "active" : ""}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={category === "Laptop" ? "active" : ""}
          onClick={() => setCategory("Laptop")}
        >
          Laptops
        </button>

        <button
          className={category === "Phone" ? "active" : ""}
          onClick={() => setCategory("Phone")}
        >
          Phones
        </button>

        <button
          className={category === "Headphone" ? "active" : ""}
          onClick={() => setCategory("Headphone")}
        >
          Headphones
        </button>

        <button
          className={category === "Watch" ? "active" : ""}
          onClick={() => setCategory("Watch")}
        >
          Watches
        </button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;