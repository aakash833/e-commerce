"use client";

import { ProductCard } from "./product-card";

export function ProductGrid({ products, cartItems, onAddToCart }) {
  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isInCart={isProductInCart(product.id)}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
