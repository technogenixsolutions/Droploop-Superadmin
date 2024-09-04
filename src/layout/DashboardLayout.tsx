import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

import { ScrollArea } from "@/components/ui/scroll-area";

function DashboardLayout() {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        {/* <main> */}
        <ScrollArea className="flex-1 pt-20">
          <Outlet />
        </ScrollArea>
        {/* </main> */}
      </div>
    </>
  );
}

export default DashboardLayout;
