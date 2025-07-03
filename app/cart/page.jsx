"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/context/auth-context";
import { useCart } from "@/context/cart-context";
import { Header } from "@/components/header";
import { CartItem } from "@/components/cart-item";

export default function CartPage() {
  const { isAuthenticated } = useAuth();
  const { cartItems, updateQuantity, getCartTotal } = useCart();
  const router = useRouter();

  //   useEffect(() => {
  //     if (!isAuthenticated) {
  //       router.push("/");
  //     }
  //   }, [isAuthenticated, router]);

  const handleProductsClick = () => {
    router.push("/products");
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <Header showProducts={true} onProductsClick={handleProductsClick} />

      <main className="px-6 md:px-14 lg:px-24 mx-auto py-6">
        <h2 className="text-3xl font-semibold text-center mb-8">My Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
              <p className="text-gray-500 mb-6">
                Add some products to get started!
              </p>
              <Button
                onClick={handleProductsClick}
                className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="hidden md:grid md:grid-cols-4 gap-4 mb-6 font-semibold text-lg px-6">
              <div className="col-span-2 text-3xl font-semibold">Name</div>
              <div className="text-center text-3xl font-semibold">Price</div>
              <div className="text-center text-3xl font-semibold">Quantity</div>
            </div>

            <div className="space-y-4 mb-8">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
            </div>

            <div className="flex justify-end">
              <div className="">
                <div className="flex items-center justify-between gap-8">
                  <span className="text-2xl font-bold">Total</span>
                  <span className="text-2xl font-bold">
                    ₹{getCartTotal()} /-
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
