"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { X, ChevronDown, ChevronRight } from "lucide-react";

export function SidebarMenu({ onClose, showCloseButton = false }) {
  const [isMakeupOpen, setIsMakeupOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <div className="space-y-4">
      {/* {showCloseButton && (
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Close Menu</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      )} */}

      <Collapsible open={isCategoriesOpen} onOpenChange={setIsCategoriesOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full pt-10 p-4 text-left hover:bg-gray-100 rounded transition-colors">
          <span className="font-medium">Categories</span>
          {isCategoriesOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 space-y-2">
          <Collapsible open={isMakeupOpen} onOpenChange={setIsMakeupOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-100 rounded transition-colors">
              <span>Makeup</span>
              {isMakeupOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start text-sm hover:bg-gray-50"
              >
                Face Makeup
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm hover:bg-gray-50"
              >
                Lip Makeup
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm hover:bg-gray-50"
              >
                Eye Makeup
              </Button>
            </CollapsibleContent>
          </Collapsible>
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-50"
          >
            Brushes & Tools
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
