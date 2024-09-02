import { ScrollArea } from "../ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Customer {
  id: string;
  name: string;
  email: string;
  mobileNumber: string | null;
  imgUrl: string | null;
  address: string | null;
  signInMethod: string;
  createdAt: string;
}

interface Props {
  customerList: Customer[];
}
function CustomerTable({ customerList }: Props) {
  return (
    <ScrollArea className="h-96 w-full rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Img</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {customerList?.map((customer: any) => (
            <TableRow key={customer?.id}>
              <TableCell>{customer?.name}</TableCell>
              <TableCell>{customer?.email}</TableCell>
              <TableCell>{customer?.mobileNumber}</TableCell>
              <TableCell>
                <img
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XJymLrGLvo1j24n6976WyUzudcFAQbeOcA&s`}
                  alt={customer?.name}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}

export default CustomerTable;
