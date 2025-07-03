"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { useCart } from "@/context/cart-context";
import { Header } from "@/components/header";
import { ProductGrid } from "@/components/product-grid";
import { products } from "@/data/product";

export default function ProductsPage() {
  const { logout, isAuthenticated } = useAuth();
  const { addToCart, cartItems, getCartItemsCount } = useCart();
  const router = useRouter();

  //   useEffect(() => {
  //     if (!isAuthenticated) {
  //       router.push("/");
  //     }
  //   }, [isAuthenticated, router]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(`Added ${product.name} to cart`);
  };

  const handleCartClick = () => {
    router.push("/cart");
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <Header
        showCart={true}
        onCartClick={handleCartClick}
        onLogout={handleLogout}
        cartItemsCount={getCartItemsCount()}
      />

      <main className="px-6 md:px-14 lg:px-24 py-6">
        <div className="mx-auto">
          <h2 className="text-3xl font-semibold mb-6">All Products Listing</h2>
          <ProductGrid
            products={products}
            cartItems={cartItems}
            onAddToCart={handleAddToCart}
          />
        </div>
      </main>
    </div>
  );
}
