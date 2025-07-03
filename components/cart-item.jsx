"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

export function CartItem({ item, onUpdateQuantity }) {
  return (
    <div className="">
      <div className="p-6">
        <div className="md:hidden space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <p className="font-semibold text-lg mt-2">₹{item.price}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                }
                disabled={item.quantity <= 1}
                className="rounded-none w-8 h-8 p-0 bg-gray-700 text-white border-gray-700 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-semibold">
                {item.quantity}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="rounded-none w-8 h-8 p-0 bg-gray-700 text-white border-gray-700 hover:bg-gray-800"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onUpdateQuantity(item.id, 0)}
              className="rounded-none ml-2 text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              Remove
            </Button>
            {/* <div className="font-semibold text-lg">
              ₹{item.price * item.quantity}
            </div> */}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-4 gap-4 items-center">
          <div className="flex items-center gap-4 col-span-2">
            <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>

          <div className="text-center font-semibold">₹{item.price}</div>

          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
              }
              disabled={item.quantity <= 1}
              className="rounded-none w-8 h-8 p-0 bg-gray-700 text-white border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="flex items-center justify-center w-8 h-8 bg-white text-center font-semibold">
              {item.quantity}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="rounded-none w-8 h-8 p-0 bg-gray-700 text-white border-gray-700"
            >
              <Plus className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onUpdateQuantity(item.id, 0)}
              className="rounded-none ml-2 text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              Remove
            </Button>
          </div>

          {/* <div className="text-center font-semibold">
            ₹{item.price * item.quantity}
          </div> */}
        </div>
      </div>
    </div>
  );
}
