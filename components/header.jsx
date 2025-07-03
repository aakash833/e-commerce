"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import { SidebarMenu } from "./sidebar-menu";
import Link from "next/link";

export function Header({
  title = "Hashtechy",
  showCart = false,
  showProducts = false,
  onCartClick,
  onProductsClick,
  onLogout,
  cartItemsCount = 0,
}) {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogoutConfirm = () => {
    setShowLogoutDialog(false);
    onLogout?.();
  };

  return (
    <>
      <header className="px-4 md:px-10 lg:px-24 bg-gray-700 text-white py-3 flex items-center justify-between sticky top-0 z-50">
        {/* Brand */}
        <Link href="/products" className="text-xl md:text-2xl font-medium">
          {title}
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {showProducts && (
            <Button
              onClick={onProductsClick}
              variant="ghost"
              className="text-white text-base md:text-xl font-normal hidden sm:inline-flex"
            >
              Products
            </Button>
          )}
          {showCart && (
            <Button
              onClick={onCartClick}
              variant="ghost"
              className="text-white text-base md:text-xl font-normal relative hidden sm:inline-flex"
            >
              Cart
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          )}
          {onLogout && (
            <Button
              onClick={() => setShowLogoutDialog(true)}
              variant="ghost"
              className="text-white text-base md:text-xl font-normal hidden sm:inline-flex"
            >
              Logout
            </Button>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-yellow-300 inline-flex sm:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SidebarMenu showCloseButton={true} />

              <div className="mt-4 space-y-2">
                {showProducts && (
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={onProductsClick}
                  >
                    Products
                  </Button>
                )}
                {showCart && (
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={onCartClick}
                  >
                    Cart ({cartItemsCount})
                  </Button>
                )}
                {onLogout && (
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-600"
                    onClick={() => setShowLogoutDialog(true)}
                  >
                    Logout
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Are you sure you want to logout?</DialogTitle>
          </DialogHeader>
          <DialogFooter className="flex justify-end gap-2">
            <Button
              variant="secondary"
              onClick={() => setShowLogoutDialog(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={handleLogoutConfirm}
            >
              Logout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
