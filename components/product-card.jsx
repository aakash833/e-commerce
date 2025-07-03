"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ProductCard({ product, isInCart, onAddToCart }) {
  return (
    <div className="ransition-shadow duration-200">
      <CardContent className="">
        <div className="aspect-square rounded mb-3.5 overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          />
        </div>
        <h3 className="font-medium text-lg mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-[#424242] text-sm mb-2 line-clamp-2">
          {product.description}
        </p>
        <p className="font-semibold text-xl mb-2">₹ {product.price}</p>
        <Button
          onClick={() => onAddToCart(product)}
          className={`w-full font-semibold transition-colors duration-200 rounded-none cursor-pointer ${
            isInCart
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-gray-700 hover:bg-gray-800 text-white"
          }`}
        >
          {isInCart ? "Added to Cart!" : "Add To Cart"}
        </Button>
      </CardContent>
    </div>
  );
}
