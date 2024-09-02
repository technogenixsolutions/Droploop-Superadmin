import { ChevronDown, ListFilter } from 'lucide-react';
// import { useEffect, useState } from 'react';

import OrdersTable from './orders/OrdersTable';
import { Button } from './ui/button';
import { Input } from './ui/input';
// import { Progress } from './ui/progress';
// import { Switch } from './ui/switch';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function Orders() {
  // const [setProgress] = useState(0);
  const tabToggle =
    'rounded-none border-0 border-b-2 border-b-transparent bg-transparent py-6  data-[state=active]:bg-transparent  data-[state=active]:shadow-none';

  const TabButton = [
    {
      value: 'all',
      tabToggle,
      name: 'All',
    },
    // {
    //   value: 'unpaid',
    //   tabToggle,
    //   name: 'Unpaid',
    // },
    // {
    //   value: 'sourse',
    //   tabToggle,
    //   name: 'Link or Source ',
    // },
    // {
    //   value: 'issues',
    //   tabToggle,
    //   name: 'Issues',
    // },
  ];

  const template = (
    <>
      <div className="flex gap-4">
        <Input type="search" className="bg-[#e5e7eb] focus-visible:ring-0" />
        <Button className="bg-gray-200 text-black transition-all delay-200 duration-500 ease-in-out hover:scale-105 hover:bg-gray-300 hover:text-black">
          <ListFilter className="mr-3 w-4" /> Filter
        </Button>
      </div>
      <h1 className="my-10 text-center text-xl font-medium">
        No orders found 🙅‍♀️
      </h1>
    </>
  );

  // useEffect(() => {
  //   const timer = setTimeout(() => setProgress(100), 500);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="min-h-screen bg-gray-100 pb-7">
      <section className="relative z-0 min-h-screen w-full">
        <div className="h-32 bg-gradient-to-r from-[#8472ed] to-[#b786f6]">
          <div className="product_cart mx-auto flex w-[90%] items-center justify-between py-[30px]">
            <h3 className="m-0 pb-2 text-2xl font-bold leading-[50px] text-white">
              Orders
            </h3>
            {/* <div className="flex items-center gap-10">
            <Button className="bg-white bg-opacity-30 transition delay-200 duration-500 ease-in-out hover:scale-105 hover:bg-white hover:bg-opacity-30">
              Top-Up
            </Button>
            <div className="cursor-pointer text-white">
              <h5 className="text-sm hover:underline">Credit Balance</h5>
              <h2 className="text-right text-xl font-bold">$0.20</h2>
            </div>
          </div> */}
          </div>
        </div>
        {/* <div className="mx-auto my-7 flex w-[90%] items-center justify-end gap-4">
        <div className="flex h-24 w-52 flex-col items-center justify-center space-y-2 rounded-lg border bg-white px-5">
          <h1 className="inline-block text-sm text-gray-400">
            Orders fulfilled:{' '}
            <span className="font-medium text-black">0/25</span>
          </h1>
          <Progress value={progress} className="h-2 w-full" />
        </div>
        <div className="flex h-24 w-52 flex-col items-center justify-center space-y-2 rounded-lg border bg-white px-5">
          <h1 className="flex items-center gap-2 text-sm font-medium text-gray-900">
            Branding
            <Switch />
          </h1>
        </div>
        <div className="flex h-24 w-60 flex-col items-center justify-center space-y-2 rounded-lg border bg-white px-5">
          <div className="flex items-center gap-2">
            <h1 className="flex cursor-pointer items-center gap-1 text-sm font-medium text-gray-900">
              <ChevronDown className="w-5" />
              Auto fulfillment
            </h1>
            <Switch />
          </div>
        </div>
      </div> */}
        <div className="relative -top-20 left-0 right-0 z-20">
          <div className="mx-auto my-8 w-[90%] rounded-md bg-white pb-8 pt-4 shadow-lg">
            <div>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="ml-6 w-[95%] justify-between gap-6 border-b bg-transparent py-8">
                  <div>
                    {TabButton.map((tab) => (
                      <TabsTrigger
                        value={tab.value}
                        className={`${tab.tabToggle} ${tab.value === 'issues' ? 'hover:text-[#ff7768] data-[state=active]:border-b-[#ff7768] data-[state=active]:text-[#ff7768]' : 'hover:text-[#8472ed] data-[state=active]:border-b-[#8472ed] data-[state=active]:text-[#8472ed]'}`}
                      >
                        {tab.name}
                      </TabsTrigger>
                    ))}
                  </div>
                  <Button className="h-auto rounded-md border-2 bg-transparent px-2 py-2 text-black hover:bg-gray-100">
                    <ChevronDown />
                  </Button>
                </TabsList>

                <TabsContent className="mx-auto my-4 w-[94%]" value="all">
                  <OrdersTable />
                </TabsContent>
                <TabsContent className="mx-auto my-4 w-[94%]" value="unpaid">
                  {template}
                </TabsContent>
                <TabsContent className="mx-auto my-4 w-[94%]" value="sourse">
                  {template}
                </TabsContent>
                <TabsContent className="mx-auto my-4 w-[94%]" value="issues">
                  {template}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Orders;
