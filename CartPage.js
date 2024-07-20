import React from "react";
import Cart from "../components/Cart";

const CartPage = () => {
  // Bu örnekte sepetteki ürünleri sabit bir liste olarak tanımlıyoruz
  // Gerçek uygulamada bu veriyi state veya başka bir yöntemle yöneteceksiniz
  const cartItems = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
  ];

  return (
    <div>
      <h2>Shopping Cart</h2>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
