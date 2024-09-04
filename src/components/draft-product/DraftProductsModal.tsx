import { X } from "lucide-react";
import ReactQuill from "react-quill";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";

import DraftModalDataTable from "./DraftModalDataTable";
import DraftProductImages from "./DraftProductImages";
import DraftProductModalActions from "./DraftProductModalActions";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

function DraftProductsModal() {
  const [isOpen] = useState(false);

  const handleAddTag = () => {
    //  somthing to do here
  };

  const tabToggle =
    "rounded-none border-0 border-b-2 border-b-transparent bg-transparent py-6   data-[state=active]:bg-transparent  data-[state=active]:shadow-none hover:text-[#8472ed] data-[state=active]:border-b-[#8472ed] data-[state=active]:text-[#8472ed]";
  return (
    <div>
      <Dialog open={!isOpen} onOpenChange={close}>
        <DialogContent className="ml-2 mr-2 w-full max-w-full lg:w-[1028px]">
          <DialogHeader>
            <DialogTitle className="mb-2 text-3xl font-medium">
              Review & Publish
            </DialogTitle>
            <DialogDescription className="mt-4 w-1/2 max-w-full">
              You can edit your product listing here and import it to your
              store, or add it to your store right away a nd make changes later
              on in your store.
            </DialogDescription>
          </DialogHeader>
          <div>
            <Tabs defaultValue="product_tabs" className="w-full">
              <TabsList className="w-full justify-normal gap-6 border-b bg-transparent py-8">
                <TabsTrigger value="product_tabs" className={tabToggle}>
                  Product
                </TabsTrigger>
                <TabsTrigger className={tabToggle} value="description_tabs">
                  Description
                </TabsTrigger>
                <TabsTrigger className={tabToggle} value="variants_tabs">
                  Variants
                </TabsTrigger>
                <TabsTrigger className={tabToggle} value="images_tabs">
                  Images
                </TabsTrigger>
              </TabsList>

              <TabsContent className="mx-8 mt-5" value="product_tabs">
                <div className="flex justify-between gap-5">
                  <div className="w-[30%]">
                    <div className="h-full w-full">
                      <img
                        className="aspect-square h-full w-full bg-cover"
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XJymLrGLvo1j24n6976WyUzudcFAQbeOcA&s"
                        }
                        alt="publishImg"
                      />
                    </div>
                  </div>
                  <div className="w-[65%]">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Product Name</h3>
                      <Input
                        className="border-0 bg-slate-100 focus-visible:ring-offset-0"
                        placeholder="Enter Product name"
                      />
                      <h3 className="font-semibold">Product Tags</h3>
                      <div className="flex w-full items-center gap-2">
                        <Input
                          className="w-[90%] border-dashed border-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Add new tag"
                        />
                        <Button
                          className="bg-transparent text-sm font-semibold text-black underline hover:bg-transparent hover:text-gray-500"
                          type="button"
                          onClick={handleAddTag}
                        >
                          Add
                        </Button>
                      </div>
                      <div className="mb-2 flex flex-wrap gap-2">
                        <button
                          type="button"
                          className="flex items-center gap-4"
                        >
                          <Badge variant="outline">
                            tag <X size={16} />
                          </Badge>
                        </button>
                      </div>

                      {/* <div className="flex items-center justify-between gap-5">
                        <div className="w-full">
                          <h3 className="mb-4 font-semibold">Product Type</h3>
                          <Input
                            className="border-0 bg-slate-100 focus-visible:ring-offset-0"
                            onChange={(e) => setProductType(e.target.value)}
                          />
                        </div>
                        <div className="w-full">
                          <h3 className="mb-4 font-semibold">Collection</h3>
                          <Input
                            className="border-0 bg-slate-100 focus-visible:ring-offset-0"
                            onChange={(e) =>
                              setProductCollection(e.target.value)
                            }
                          />
                        </div>
                      </div> */}
                    </div>
                    {/* <div className="pbulisd_input mt-4">
                      <h3 className="mb-4 font-semibold">Product Tags </h3>
                      <Input
                        className="w-[130px] border-2 border-dashed border-[#d5dde9] shadow-inherit"
                        placeholder="Beach Executive Hoodie"
                      />
                    </div> */}
                    {/* <div className="mt-4 flex items-center justify-between gap-8">
                      <div className="w-[48%]">
                        <div>
                          <h4>Product Type</h4>
                          <Input
                            className="mt-4"
                            placeholder="Beach Executive Hoodie"
                          />
                        </div>
                      </div>
                      <div className="w-[48%]">
                        <div>
                          <h4>Collection</h4>
                          <div className="mt-4">
                            <Select>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a fruit" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Fruits</SelectLabel>
                                  <SelectItem value="apple">Apple</SelectItem>
                                  <SelectItem value="banana">Banana</SelectItem>
                                  <SelectItem value="blueberry">
                                    Blueberry
                                  </SelectItem>
                                  <SelectItem value="grapes">Grapes</SelectItem>
                                  <SelectItem value="pineapple">
                                    Pineapple
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </TabsContent>
              <TabsContent className="mt-5" value="description_tabs">
                <ScrollArea className="h-80 w-full rounded-md">
                  <ReactQuill theme="snow" />
                </ScrollArea>
              </TabsContent>
              <TabsContent className="mt-5" value="variants_tabs">
                <DraftModalDataTable />
              </TabsContent>
              <TabsContent className="mt-5" value="images_tabs">
                <DraftProductImages />
              </TabsContent>
            </Tabs>
            <DraftProductModalActions />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DraftProductsModal;
