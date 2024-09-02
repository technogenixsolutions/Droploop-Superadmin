import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props {
  variants: any;
  isOpen: boolean;
  close: () => void;
}
function MyProductModal({ variants, close, isOpen }: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="ml-2 mr-2 w-full max-w-full overflow-y-scroll lg:w-[1028px]">
        <DialogHeader>
          <DialogTitle className="text-lg">Product Variants</DialogTitle>
        </DialogHeader>
        <Table className="w-full">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="pl-8">Front Image</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Color Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {variants.map((product: any, id: any) => (
              <TableRow key={product?.id}>
                <TableCell
                  className={`flex items-center py-4 pl-8 ${
                    variants.length - 1 === id ? "border-b" : ""
                  }`}
                >
                  <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XJymLrGLvo1j24n6976WyUzudcFAQbeOcA&s`}
                    alt="Product 1"
                    className="mr-4 h-12 w-12 rounded-md object-cover"
                  />
                </TableCell>
                <TableCell
                  className={`px-4 py-2 ${
                    variants.length - 1 === id ? "border-b" : ""
                  }`}
                >
                  {product?.salePrice}
                </TableCell>
                <TableCell
                  className={`px-4 py-2 ${
                    variants.length - 1 === id ? "border-b" : ""
                  }`}
                >
                  {product?.sizeName}
                </TableCell>
                <TableCell
                  className={`px-4 py-2 ${
                    variants.length - 1 === id ? "border-b" : ""
                  }`}
                >
                  {product?.colorName}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}

export default MyProductModal;
