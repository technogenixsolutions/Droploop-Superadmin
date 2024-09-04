import PaginatedComponent from "@/common/PaginatedComponent";
import DraftProductsTable from "@/components/draft-product/DraftProductsTable";
import { Input } from "@/components/ui/input";

function DraftProducts() {
  return (
    <div className="bg-gray-100 pb-20">
      <section className="relative z-0 min-h-screen w-full">
        <div className="absolute left-0 right-0 z-10 h-40 bg-gradient-to-r from-[#8472ed] to-[#b786f6]">
          <div className="product_cart mx-auto w-[90%] py-[30px]">
            <h3 className="m-0 pb-2 text-2xl font-bold leading-[50px] text-white">
              Category
            </h3>
          </div>
        </div>
        <div className="relative left-0 right-0 top-28 z-20">
          <div className="mx-auto mb-8 w-[90%] rounded-md bg-white pb-8 pt-4 shadow-lg">
            <div>
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
            </div>
          </div>
        </div>
      </section>
      {/* <DraftProductsModal /> */}
    </div>
  );
}

export default DraftProducts;
