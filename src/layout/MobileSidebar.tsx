import { MenuIcon } from "lucide-react";
import { useState } from "react";

import { DashboardNav } from "./DashboardNav";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ROUTES } from "@/routes";
import { NavItem } from "@/types";

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const [sideBarItems] = useState<NavItem[]>([
    {
      title: "Dashboard",
      href: `${ROUTES.DASHBOARD.HOME}`,
      icon: "dashboard",
      label: "Dashboard",
    },
    {
      title: "Find Products",
      href: `${ROUTES.DASHBOARD.FIND_PRODUCTS}`,
      icon: "Search",
      label: "findProduct",
    },
    {
      title: "Draft Products",
      href: `${ROUTES.DASHBOARD.DRAFT_PRODUCTS}`,
      icon: "Pickaxe",
      label: "draft",
    },
    {
      title: "My Products",
      href: `${ROUTES.DASHBOARD.MY_PRODUCTS}`,
      icon: "Shirt",
      label: "myProduct",
    },
    {
      title: "Orders",
      href: `${ROUTES.DASHBOARD.ORDERS}`,
      icon: "ShoppingBag",
      label: "orders",
    },
    {
      title: "Support Ticket",
      href: `${ROUTES.DASHBOARD.SUPPORT_TICKET}`,
      icon: "HeartHandshake",
      label: "orders",
    },
    {
      title: "Connect Store",
      href: `${ROUTES.DASHBOARD.CONNECT_STORE}`,
      icon: "add",
      label: "Dashboard",
    },
  ]);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="!px-0">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Overview
            </h2>
            <div className="space-y-1">
              <DashboardNav
                items={sideBarItems}
                isMobileNav
                setOpen={setOpen}
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
