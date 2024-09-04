import { useEffect, useState } from "react";

import PaginatedComponent from "@/common/PaginatedComponent";
import ProductModal from "../components/product/ProductModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductsTable } from "@/components/product/ProductsTable";

function ProductList() {
  const [totalPages, setTotalPages] = useState(2);
  const [limit] = useState(12);
  const [isOpen, setIsOpen] = useState(false);

  const addNew = () => {
    // Add new product functionality
    setIsOpen(true);
  };

  useEffect(() => {
    const total = 20;
    if (limit > 0) {
      setTotalPages(Math.ceil(total / limit));
    }
  }, [limit]);

  return (
    <section className="relative z-0 mx-auto h-full min-h-screen w-full bg-gray-100 pb-60">
      <div className="absolute left-0 right-0 z-10 h-56 bg-gradient-to-r from-[#8472ed] to-[#b786f6]">
        <div className="product_cart mx-auto w-[90%] py-[30px]">
          <div className="flex items-center justify-between">
            <h3 className="m-0 pb-2 text-2xl font-bold leading-[50px] text-white">
              Series
            </h3>
            <Button onClick={addNew}>Add New</Button>
          </div>
        </div>
      </div>
      <div className="relative left-0 right-0 top-28 z-20">
        <div className="mx-auto mb-8 w-[90%] rounded-md bg-white pb-8 pt-4 shadow-lg">
          <div className="mt-6">
            <div className="mx-auto w-[95%]">
              <Input placeholder="Search" />
            </div>
            <div className="overflow-x-visible">
              <ProductsTable />
            </div>
            <PaginatedComponent
              setCurrentPage={1}
              currentPage={1}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
      <ProductModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}

export default ProductList;
