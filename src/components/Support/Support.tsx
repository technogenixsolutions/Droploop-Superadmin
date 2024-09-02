import { Button } from "../ui/button";

import PaginatedComponent from "@/common/PaginatedComponent";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Support() {
  return (
    <div className="bg-gray-100 pb-20">
      <section className="relative z-0 min-h-screen w-full">
        <div className="absolute left-0 right-0 z-10 h-40 bg-gradient-to-r from-[#8472ed] to-[#b786f6]">
          <div className="product_cart mx-auto flex w-[90%] items-center justify-between py-[30px]">
            <h3 className="m-0 pb-2 text-2xl font-bold leading-[50px] text-white">
              Support And Tickets
            </h3>
            <Button>Add New</Button>
          </div>
        </div>

        <div className="relative left-0 right-0 top-28 z-20">
          <div className="mx-auto mb-8 w-[90%] rounded-md bg-white pb-8 pt-4 shadow-lg">
            <div className="mt-6">
              {/* <div className="mx-auto w-[95%]">
              <Input
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Search"
              />
            </div> */}
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="pl-8">Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Mobile</TableHead>
                    <TableHead>Text</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className={`flex items-center py-4 pl-8 `}>
                      product name
                    </TableCell>
                    <TableCell className={`px-4 py-2 `}>
                      <div className="flex items-center gap-2">
                        user@example.com
                      </div>
                    </TableCell>
                    <TableCell
                      onClick={() => {
                        // setVariants(product?.ProductVariant);
                        // setIsOpen(true);
                      }}
                      className={`px-4 py-2 `}
                    >
                      015545454545
                    </TableCell>
                    <TableCell className={`px-4 py-2 `}>
                      Support Message
                      {/* <Button>View</Button> */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <PaginatedComponent
                currentPage={2}
                setCurrentPage={4}
                totalPages={20}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;
