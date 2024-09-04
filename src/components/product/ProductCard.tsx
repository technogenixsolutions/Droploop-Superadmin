import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";

import DeleteConfirmModal from "../DeleteConfirmModal";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { useState } from "react";

function ProductCard() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const product = {
    id: 1,
    title: "Product 1",
    vendorName: "Vendor 1",
    price: 100,
    quantity: 5,
    imageUrl: "https://example.com/image1.jpg",
    supplier: "supplier",
    currencySign: "USD",
  };

  return (
    <div
      className="group relative z-0 transition-all delay-100 duration-500 hover:z-30 hover:scale-105"
      // className={
      //   isInDraft()
      //     ? 'rounded-xl border-l-2 border-r-2 border-t-2 border-green-500'
      //     : ''
      // }
    >
      <Card
        className={`relative z-40 w-full border-4 border-[#63d295] transition-all duration-500 group-hover:border-destructive group-hover:rounded-b-none`}
      >
        <CardContent className="space-y-3 pb-2">
          <Link to={"#"} className="space-y-3">
            <img
              className="h-64 w-full object-cover"
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSye1MdZCpLodYOARXOi6uJbK00xyJ74x3fdw&s`}
              alt={"photo"}
            />

            <div className="flex flex-col items-center gap-1">
              <h2
                title={product?.title?.length <= 15 ? "" : product?.title}
                className="text-lg font-semibold text-gray-800 dark:text-gray-50"
              >
                {product?.title?.length <= 15
                  ? product?.title
                  : `${product?.title?.slice(0, 16)}...`}
              </h2>
              <span
                className="font-normal text-gray-600 dark:text-gray-300"
                title={
                  product?.vendorName?.length <= 18 ? "" : product?.vendorName
                }
              >
                {product?.vendorName?.length <= 18
                  ? product?.vendorName
                  : `${product?.vendorName?.slice(0, 19)}...`}
              </span>
              <span className="font-normal text-gray-600 dark:text-gray-300">
                {product?.supplier}
              </span>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-gray-800 dark:text-gray-50">
                  {`${product?.currencySign} ${product?.price}`}
                </span>
                <span className="text-sm text-gray-800 dark:text-gray-50">
                  Product Cost
                </span>
              </div>
            </div>
          </Link>
        </CardContent>
      </Card>
      <div className="absolute left-0 right-0 -z-0 -translate-y-40 transition-all delay-100 duration-500 group-hover:translate-y-0">
        <Button
          className="flex w-full items-center gap-2 rounded-lg rounded-t-none bg-[#63d295] py-3 text-white"
          type="button"
        >
          <ShoppingBasket size={20} />
          <span className="text-base">Add to Draft</span>
        </Button>
      </div>
      {isDeleteOpen && (
        <DeleteConfirmModal
          isOpen={isDeleteOpen}
          close={() => setIsDeleteOpen(false)}
        />
      )}
    </div>
  );
}

export default ProductCard;
