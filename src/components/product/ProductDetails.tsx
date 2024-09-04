import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

import Loader from "../Loader";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

import { ProductsTable } from "./ProductsTable";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCreateDraftProductMutation } from "@/redux/api/draft-productApi";
import { useGetProductByIdQuery } from "@/redux/api/productApi";
import { useGetUserProfileQuery } from "@/redux/api/userApi";

function ProductDetails() {
  const navigate = useNavigate();
  const { data: Profile } = useGetUserProfileQuery(undefined);
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const supplierName = searchParams.get("supplier");
  const { data } = useGetProductByIdQuery({
    params: { id, supplier: supplierName },
  });
  const [createProduct] = useCreateDraftProductMutation();
  const [Image, setImage] = useState<string>();

  if (!data) {
    return <Loader />;
  }
  const {
    productId,
    vendor,
    categoryName,
    categoryId,
    title,
    imageUrl,
    variants,
    price,
    currencySign,
    images,
    supplier,
  } = data.data;

  const handleDraftProduct = async () => {
    if (Profile?.data?.Shop?.length === 0) {
      toast("Please, Connect your store first");
      return;
    }
    try {
      const res: any = await createProduct({
        title,
        imageUrl,
        currencySign,
        productId,
        price,
        supplier,
        vendorName: vendor,
        categoryName,
        categoryId,
      });
      if (res?.data?.success) {
        toast(res?.data?.message);
      } else {
        toast(res?.error?.data?.message);
      }
    } catch (error: any) {
      toast(error?.message);
    }
  };

  return (
    <div className="relative z-0 min-h-screen bg-gray-100 pb-20">
      <header className="absolute left-0 right-0 z-10 h-40 bg-gradient-to-r from-[#8472ed] to-[#b786f6] p-6" />

      <div className="relative right-0 top-16 z-20 space-y-6 p-6">
        <div className="mx-auto w-[95%] rounded-lg bg-gray-50 shadow-2xl">
          <div className="sticky top-0 z-10 flex h-36 flex-col items-center justify-between gap-3 rounded-lg bg-white px-3 py-3 lg:flex-row lg:px-6 lg:py-4">
            <div className="w-full">
              <h3 className="text-3xl font-bold" title={title}>
                {title?.length < 24 ? title : `${title?.slice(0, 24)}...`}
              </h3>
              <div className="mt-4">
                <div className="flex w-full items-center gap-5">
                  <div className="flex items-center gap-1">
                    <span>Supplier:</span>
                    <span className="underline">
                      <strong>{supplier}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>Processing time: </span>
                    <span className="">
                      <strong>3-5 days</strong>
                    </span>
                  </div>

                  {/* <div className="lg:w-[48%]">
                  <span>
                    Processing time:{' '}
                    <strong className="text-xs underline">3-5 days</strong>{' '}
                  </span>
                </div> */}
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-end gap-3">
              <Button
                type="button"
                className="h-auto border-[#63d295] bg-[#63d295] px-10 py-5 text-lg font-medium text-white hover:bg-[#4ead79]"
                onClick={handleDraftProduct}
              >
                Add to Draft
              </Button>
              <Button
                className="flex h-auto gap-3 border-2 border-gray-200 bg-transparent px-10 py-5 text-lg font-medium text-black hover:bg-gray-300 hover:text-black"
                type="button"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft /> Back
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-3 px-3 py-3 lg:flex-row lg:px-6 lg:py-6">
            <div className="flex flex-col items-center gap-3">
              <div className="w-full">
                <img
                  className="w-full object-cover"
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XJymLrGLvo1j24n6976WyUzudcFAQbeOcA&s`}
                  alt={title}
                />
              </div>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full max-w-sm"
              >
                <CarouselContent>
                  {images.map((item: any) => (
                    <CarouselItem
                      key={item}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Card
                          className="cursor-pointer"
                          onClick={() => setImage(`${item}`)}
                        >
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <img
                              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XJymLrGLvo1j24n6976WyUzudcFAQbeOcA&s`}
                              alt=""
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              {/* <Button className="flex items-center gap-2 bg-[linear-gradient(260deg,#f39c42_1%,#ffd187_50%,#f9d57f_0%)]">
                <ArrowUpLeft /> Find Ads & Competitors on Minea
              </Button> */}
            </div>
            <div className="mx-auto w-full space-y-6 lg:w-[58%]">
              {/* <div
                className="py-5 text-lg"
                dangerouslySetInnerHTML={{ __html: description }}
              /> */}
              <h3 className="text-3xl font-bold" title={title}>
                {title}
              </h3>
              <div className="">
                <p className="text-sm">Product Cost</p>
                <h1 className="mt-1 text-2xl font-bold">
                  {`${currencySign} ${price}`}
                </h1>
              </div>
              {/* <div className="pb-4 pt-10">
                <p className="text-right text-sm">
                  Average <b>Shipping</b> Time: <b>1-12</b> Days
                </p>
              </div> */}

              {/* products table  */}
              <ScrollArea className="h-[60vh]">
                <ProductsTable variants={variants} defaultImageUrl={imageUrl} />
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
