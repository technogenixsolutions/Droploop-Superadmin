import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function MyProductsTable() {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="pl-8">Product</TableHead>
          <TableHead>Brand</TableHead>
          <TableHead>Variants</TableHead>
          <TableHead>Last Modified Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className={`flex items-center py-4 pl-8 `}>
            <img
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XJymLrGLvo1j24n6976WyUzudcFAQbeOcA&s`}
              alt="Product 1"
              className="mr-4 h-12 w-12 rounded-md object-cover"
            />
            product name
          </TableCell>
          <TableCell className={`px-4 py-2 `}>
            <div className="flex items-center gap-2">suppliar name</div>
          </TableCell>
          <TableCell className={`px-4 py-2 `}>5</TableCell>
          <TableCell className={`px-4 py-2 `}>20/25/2525</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default MyProductsTable;
