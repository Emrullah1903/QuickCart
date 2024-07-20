import React from "react";
import { Link } from "react-router-dom";

// ProductList bileşeni, ürünleri listelemek için kullanılır
const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map((product) => (
      <div key={product.id} className="product">
        <h3>{product.name}</h3>
        <p>Price: {product.price}</p>
        <Link to={`/products/${product.id}`}>View Details</Link>
      </div>
    ))}
  </div>
);

export default ProductList;
