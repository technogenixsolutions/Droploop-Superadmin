import { ScrollArea } from '../ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

function TransactionTable() {
  return (
    <ScrollArea className="h-96 w-full rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Color</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>Habib</TableCell>
            <TableCell>ariant.colorName</TableCell>
            <TableCell>riant.sizeName</TableCell>
            <TableCell>ariant.salePrice</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ScrollArea>
  );
}

export default TransactionTable;
