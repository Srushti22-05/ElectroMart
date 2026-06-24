import hpLaptop from "../assets/products/HP Laptop.jpeg";
import iphone14 from "../assets/products/iPhone 14.jpeg";
import sonyHeadphones from "../assets/products/Sony Headphones.jpeg";
import smartwatch from "../assets/products/Smart Watch.jpeg";

const Products = [
  {
    id: 1,
    name: "HP Laptop",
    price: 58000,
    image: hpLaptop,
    category: "Laptop",
    description: "High-performance laptop for students and professionals."
  },
  {
    id: 2,
    name: "iPhone 14",
    price: 70000,
    image: iphone14,
    category: "Phone",
    description: "Powerful smartphone with excellent camera quality."
  },
  {
    id: 3,
    name: "Sony Headphones",
    price: 3000,
    image: sonyHeadphones,
    category: "Headphone",
    description: "Premium wireless headphones with noise cancellation."
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 2500,
    image: smartwatch,
    category: "Watch",
    description: "Track fitness, calls, and notifications on your wrist."
  },
];

export default Products;