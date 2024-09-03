import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

import ProductCard from "./ProductCard";

import PaginatedComponent from "@/common/PaginatedComponent";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NewArrivalLogoSvg from "@/svg/NewArrivalLogoSvg";
import { Button } from "../ui/button";
import ProductModal from "./ProductModal";

function ProductList() {
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
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
          <h3 className="m-0 pb-2 text-2xl font-bold leading-[50px] text-white">
            Find Products
          </h3>

          <div className="flex items-center justify-center gap-4">
            <div className="relative w-[80%]">
              <input
                className="h-11 w-full rounded bg-[#ac94f3] px-8 font-semibold text-white placeholder-white placeholder:text-sm placeholder:font-semibold focus:outline-none focus-visible:outline-none"
                type="text"
                placeholder="Search Products"
              />
              <span className="absolute left-[10px] top-[18px]">
                <IoSearchSharp className="-mt-1 font-medium text-white" />
              </span>
            </div>

            <div className="flex w-full items-center justify-between gap-2">
              <Select>
                <SelectTrigger className="border-[#ac94f3] bg-[#ac94f3] text-white">
                  <SelectValue placeholder="Select Supplier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={"product"}>product</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="focus:border-2-[#ac94f3] border-[#ac94f3] bg-[#ac94f3] text-white">
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={"product"}>product</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="relative left-0 right-0 top-60 z-20">
        <div className="mx-auto w-[90%]">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-4 py-8 text-2xl font-bold text-black">
              <NewArrivalLogoSvg />
              New Arrivals
            </h3>
            <Button onClick={addNew}>Add New</Button>
          </div>
          <div className="my-3 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Render product cards here */}
            <ProductCard />
          </div>
          <PaginatedComponent
            setCurrentPage={setPage}
            currentPage={page}
            totalPages={totalPages}
          />
        </div>
      </div>
      <ProductModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}

export default ProductList;
