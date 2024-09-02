/* eslint-disable react-hooks/exhaustive-deps */
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

import { DashboardNav } from "./DashboardNav";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/routes";
import SpotifyLogoSvg from "@/svg/SpotifyLogoSvg";
import TreeLogoSvg from "@/svg/TreeLogoSvg";
import { NavItem } from "@/types";

export default function Sidebar() {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [status, setStatus] = useState(false);
  const [sideBarItems, setSideBarItems] = useState<NavItem[]>([]);
  const sidebar: NavItem[] = [
    {
      title: "Dashboard",
      href: `${ROUTES.DASHBOARD.HOME}`,
      icon: "ChartColumnBig",
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
      icon: "Shirt",
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
  ];
  // const adminSidebar: NavItem[] = [
  //   {
  //     title: "Dashboard",
  //     href: `${ROUTES.DASHBOARD.HOME}`,
  //     icon: "dashboard",
  //     label: "Dashboard",
  //   },
  //   {
  //     title: "Customers",
  //     href: `${ROUTES.DASHBOARD.CUSTOMER_LIST}`,
  //     icon: "profile",
  //     label: "Customers",
  //   },
  //   {
  //     title: "Transactions",
  //     href: `${ROUTES.DASHBOARD.TRANSACTIONS}`,
  //     icon: "usd",
  //     label: "Transactions",
  //   },
  //   {
  //     title: "Role",
  //     href: `${ROUTES.DASHBOARD.ROLES}`,
  //     icon: "kanban",
  //     label: "Customers",
  //   },
  //   {
  //     title: "Connect Store",
  //     href: `${ROUTES.DASHBOARD.CONNECT_STORE}`,
  //     icon: "add",
  //     label: "Dashboard",
  //   },
  // ];
  const handleToggle = () => {
    setStatus(true);
    setIsMinimized((prev) => !prev);
    setTimeout(() => setStatus(false), 500);
  };
  useEffect(() => {
    setSideBarItems(sidebar);
  }, []);

  return (
    <nav
      className={cn(
        `relative z-10 hidden h-screen flex-none border-r pt-20 md:block`,
        status && "duration-500",
        !isMinimized ? "w-48" : "w-[72px]"
      )}
    >
      <ChevronLeft
        className={cn(
          "absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground",
          isMinimized && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <a
            target="_blank"
            // href={`https://admin.shopify.com/store/${profile?.Shop[0]?.name.split('.myshopify.com')[0]}`}
            className="mb-12 mt-8 flex items-center justify-center rounded-lg border border-dashed py-3"
            rel="noreferrer"
          >
            <h2 className="flex items-center gap-2 text-sm font-medium">
              <SpotifyLogoSvg />
              {isMinimized || (
                <span className="truncate duration-500">order: 1</span>
              )}
            </h2>
          </a>
          <div className="mt-3 space-y-1">
            <DashboardNav isMinimized={isMinimized} items={sideBarItems} />
          </div>
        </div>
      </div>
      <div
        className={`fixed bottom-0 left-0 z-30 flex h-24 items-center justify-center border-t border-dashed bg-white ${
          status && "duration-500"
        } ${!isMinimized ? "w-48" : "w-[72px]"}`}
      >
        <div className="flex items-center gap-4">
          <TreeLogoSvg />
          <div className={`${isMinimized && "hidden"}`}>
            <h2 className="font-medium">Free plan</h2>
            <p className="font-semibold text-[#8974ed] underline">Upgrade</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
