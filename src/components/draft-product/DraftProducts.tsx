import { Input } from "../ui/input";

// import DraftProductsModal from "./DraftProductsModal";
import DraftProductsTable from "./DraftProductsTable";

import PaginatedComponent from "@/common/PaginatedComponent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function DraftProducts() {
  const tabToggle =
    "rounded-none border-0 border-b-2 border-b-transparent bg-transparent py-10  data-[state=active]:bg-transparent  data-[state=active]:shadow-none";

  const TabButton = [
    {
      value: "import_list",
      tabToggle,
      name: "Import List",
    },
    {
      value: "store_listing",
      tabToggle,
      name: "Store Listings & Sourcing",
    },
    {
      value: "issues",
      tabToggle,
      name: "Issues",
    },
  ];

  return (
    <div className="bg-gray-100 pb-20">
      <section className="relative z-0 min-h-screen w-full">
        <div className="absolute left-0 right-0 z-10 h-40 bg-gradient-to-r from-[#8472ed] to-[#b786f6]">
          <div className="product_cart mx-auto w-[90%] py-[30px]">
            <h3 className="m-0 pb-2 text-2xl font-bold leading-[50px] text-white">
              Draft Products
            </h3>
          </div>
        </div>
        <div className="relative left-0 right-0 top-28 z-20">
          <div className="mx-auto mb-8 w-[90%] rounded-md bg-white pb-8 pt-4 shadow-lg">
            <div>
              <Tabs defaultValue="import_list" className="w-full">
                <TabsList className="ml-6 w-[95%] justify-normal gap-6 border-b bg-transparent py-12">
                  {TabButton.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className={`${tab.tabToggle} ${
                        tab.value === "issues"
                          ? "hover:text-[#ff7768] data-[state=active]:border-b-[#ff7768] data-[state=active]:text-[#ff7768]"
                          : "hover:text-[#8472ed] data-[state=active]:border-b-[#8472ed] data-[state=active]:text-[#8472ed]"
                      }`}
                    >
                      {tab.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent className="py-5" value="import_list">
                  <div className="mx-auto w-[95%]">
                    <Input placeholder="Search" />
                  </div>

                  <div className="mt-6">
                    <div className="overflow-x-visible">
                      <DraftProductsTable />
                    </div>
                    <PaginatedComponent
                      setCurrentPage={2}
                      currentPage={2}
                      totalPages={20}
                    />
                  </div>
                </TabsContent>
                <TabsContent className="px-4" value="store_listing">
                  <div className="mx-auto flex w-[95%] flex-col justify-between gap-4 pt-4 lg:flex-row">
                    <div className="w-full lg:w-[48%]">
                      <h3 className="mb-3 font-semibold">
                        Store Listings & Sourcing
                      </h3>
                      <p className="text-base text-gray-500">
                        The Store Listings section will show all of the product
                        listings that you have live on your Shopify Store. It
                        will also display the quote and connection status of
                        your Store Listings.
                      </p>
                      <div className="mt-5">
                        <h3 className="mb-3 font-semibold">
                          How does it work?
                        </h3>

                        <ul className="relative pl-0">
                          <li className="relative mb-5 flex items-center text-sm">
                            <span className="mr-3 flex items-center font-bold">
                              1
                            </span>
                            Add products to your Shopify Store
                          </li>
                          <li className="relative mb-5 flex items-center text-sm">
                            <span className="mr-3 flex items-center font-bold">
                              2
                            </span>
                            View them all here in one easy-to-find place
                          </li>
                          <li className="relative mb-5 flex items-center text-sm">
                            <span className="mr-3 flex items-center font-bold">
                              3
                            </span>
                            Link or source your product, and ensure all your
                            store s products are connected to Aerodrop for
                            automated fulfillment.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[48%]">
                      {/* video  */}
                      <iframe
                        className="h-[250px] w-full rounded-md"
                        src="https://www.youtube.com/embed/your-video-id"
                        allowFullScreen
                        title="Video description"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent className="px-4" value="issues">
                  <div className="mx-auto flex w-[95%] flex-col justify-between gap-4 pt-4 lg:flex-row">
                    <div className="w-full lg:w-[48%]">
                      <h3 className="mb-3 font-semibold">Issues</h3>
                      <p className="text-base text-gray-500">
                        The Store Listings section will show all of the product
                        listings that you have live on your Shopify Store. It
                        will also display the quote and connection status of
                        your Store Listings.
                      </p>
                      <p className="mt-10">
                        For a flawless fulfillment process, it is crucial that
                        you{" "}
                        <span className="font-semibold">
                          promptly address and resolve these issues.
                        </span>
                      </p>
                    </div>
                    <div className="w-full lg:w-[48%]">
                      {/* video  */}
                      <iframe
                        className="h-[250px] w-full rounded-md"
                        src="https://www.youtube.com/embed/your-video-id"
                        allowFullScreen
                        title="Video description"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      {/* <DraftProductsModal /> */}
    </div>
  );
}

export default DraftProducts;
