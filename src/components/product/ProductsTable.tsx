import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

export function ProductsTable() {
  return (
    <Table className="mt-9">
      <TableHeader className="w-full">
        <TableRow className="product_table w-full rounded-md bg-[#F2F4F8] px-1 py-5">
          <TableHead className="w-[200px] font-bold text-black">
            Image
          </TableHead>
          <TableHead className=" font-bold text-black">Series Name</TableHead>

          <TableHead className="text-center w-24 font-bold text-black">
            action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="product_table">
          <TableCell className="text-center font-medium">
            <img
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XJymLrGLvo1j24n6976WyUzudcFAQbeOcA&s`}
              alt="product img"
              className="h-12 w-12 object-cover"
            />
          </TableCell>
          <TableCell className=" font-medium">Glass Series</TableCell>

          <TableCell className="text-center flex items-center gap-6 justify-end">
            <Button>Edit</Button>
            <Button variant="destructive">delete</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
