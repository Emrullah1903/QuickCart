import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import { fetchProductById } from "../api";

const ProductDetailPage = () => {
  const { id } = useParams(); // URL'den ürün ID'sini alır
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then((data) => setProduct(data));
  }, [id]);

  return (
    <div>
      {product ? <ProductDetail product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProductDetailPage;
