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
    onLogout?.(); // call logout prop if exists
  };

  return (
    <>
      <header className="px-6 md:px-14 lg:px-24 bg-gray-700 text-white py-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/products" className="text-3xl font-normal">
          {title}
        </Link>
        <div className="flex items-center gap-4">
          {showProducts && (
            <Button
              onClick={onProductsClick}
              variant="ghost"
              className="text-white text-3xl font-normal"
            >
              Products
            </Button>
          )}
          {showCart && (
            <Button
              onClick={onCartClick}
              variant="ghost"
              className="text-white text-3xl font-normal relative"
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
              className="text-white text-3xl font-normal"
            >
              Logout
            </Button>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white">
                <Menu className="mt-1.5 h-6 w-6 size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SidebarMenu showCloseButton={true} />
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
