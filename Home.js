import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
