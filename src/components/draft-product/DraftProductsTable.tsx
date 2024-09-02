import { Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DraftProductsTable() {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow className="justify-between hover:bg-transparent">
          <TableHead className="pl-8">Product</TableHead>
          <TableHead className="pr-12 text-right">Connection Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className={`flex items-center py-4 pl-8 border-b`}>
            <img
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XJymLrGLvo1j24n6976WyUzudcFAQbeOcA&s`}
              alt="Product 1"
              className="mr-4 h-12 w-12 rounded-md object-cover"
            />
            <Link to={`#`} className="text-sm font-bold hover:underline">
              Product name
            </Link>
          </TableCell>
          <TableCell className={`px-4 py-2 border-b`}>
            <div className="flex items-center justify-end gap-1">
              <Button
                type="button"
                className="bg-[#ffda6b] px-5 py-3 text-black hover:bg-[#b99c44]"
              >
                Review & Publish
              </Button>
            </div>
          </TableCell>
          <TableCell className={`border-b px-4 py-2 `}>
            <div className="flex items-center justify-end gap-3">
              {/*  dot Action */}
              {/* <DotAction /> */}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-auto px-3 py-1">
                    {" "}
                    <Ellipsis className="w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="relative -left-24 -top-11">
                  {/* <DropdownMenuItem className="cursor-pointer">
                      Override
                    </DropdownMenuItem> */}

                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-red-500">
                    Remove from my product
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
