/* eslint-disable react-hooks/exhaustive-deps */
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

import { DashboardNav } from "./DashboardNav";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/routes";
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
      title: "Series",
      href: `${ROUTES.DASHBOARD.FIND_PRODUCTS}`,
      icon: "Search",
      label: "findProduct",
    },
    {
      title: "Series category",
      href: `${ROUTES.DASHBOARD.DRAFT_PRODUCTS}`,
      icon: "Pickaxe",
      label: "draft",
    },
    {
      title: " Products List",
      href: `${ROUTES.DASHBOARD.MY_PRODUCTS}`,
      icon: "Shirt",
      label: "myProduct",
    },
  ];

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
          <div className="mt-3 space-y-1">
            <DashboardNav isMinimized={isMinimized} items={sideBarItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
