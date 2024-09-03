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

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductModal({ isOpen, setIsOpen }: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="ml-2 mr-2 w-full max-w-full overflow-y-scroll overflow-hidden lg:w-[1028px]">
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
            <TableRow>
              <TableCell className={`flex items-center py-4 pl-8 `}>
                <img
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XJymLrGLvo1j24n6976WyUzudcFAQbeOcA&s`}
                  alt="Product 1"
                  className="mr-4 h-12 w-12 rounded-md object-cover"
                />
              </TableCell>
              <TableCell className={`px-4 py-2 `}>52</TableCell>
              <TableCell className={`px-4 py-2 `}>25</TableCell>
              <TableCell className={`px-4 py-2 `}>red</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}
