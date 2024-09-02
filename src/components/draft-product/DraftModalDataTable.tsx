import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

function DraftModalDataTable() {
  return (
    <ScrollArea className="h-80 w-full rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Color</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {/* {variants.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5}>No variants found.</TableCell>
            </TableRow>
          )} */}
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XJymLrGLvo1j24n6976WyUzudcFAQbeOcA&s"
                }
                alt="product img"
                className="h-8 w-8 object-cover"
              />
            </TableCell>
            <TableCell>red</TableCell>
            <TableCell>18</TableCell>
            <TableCell>185</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ScrollArea>
  );
}

export default DraftModalDataTable;
