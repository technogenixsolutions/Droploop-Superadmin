import { ChevronRight } from "lucide-react";

import { DashboardCharts } from "../components/DashboardHome/DashboardCharts";
import ProgressComponents from "../components/DashboardHome/ProgressComponents";

import { ROUTES } from "@/routes";

export default function DashboardHome() {
  return (
    <div className="relative z-0 bg-gray-50">
      <header className="absolute left-0 right-0 z-10 h-40 bg-gradient-to-r from-[#8472ed] to-[#b786f6] p-6">
        <h1 className="ml-5 text-2xl font-bold text-white">Dashboard</h1>
      </header>

      <div className="relative left-0 right-0 top-16 z-20 space-y-6 p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="col-span-2">
            <DashboardCharts />
          </div>

          <div className="flex flex-col gap-10">
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-center justify-between text-sm text-gray-900">
                <h2 className="mb-4 text-xl font-semibold">Overview</h2>
                <div>Last 7 Days</div>
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex justify-between">
                  <span>Orders</span>
                  <span>0</span>
                </div>
                <div className="flex justify-between">
                  <span>Sales</span>
                  <span className="">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Costs</span>
                  <span>$0.00</span>
                </div>
                <div>
                  <hr className="my-7" />
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Profit</span>
                  <span className="text-green-500">$0.00</span>
                </div>
              </div>
            </div>
            <a
              href={ROUTES.DASHBOARD.ORDERS}
              className="rounded-lg bg-white p-6 shadow transition-all delay-200 duration-500 ease-in-out hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <div className="flex h-7 w-10 items-center justify-center rounded-full bg-[#ffda6b] text-sm font-medium text-black">
                    <span>0</span>
                  </div>
                  <h2 className="text-sm font-medium">Orders to fulfill</h2>
                </div>
                <ChevronRight />
              </div>
              <div className="pt-5">
                <ProgressComponents />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
