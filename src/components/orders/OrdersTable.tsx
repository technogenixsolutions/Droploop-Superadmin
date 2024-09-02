import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";

import PaginatedComponent from "@/common/PaginatedComponent";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// const invoices = [
//   {
//     id: 58,
//     input: <Checkbox className="h-6 w-6 border-none bg-gray-500" disabled />,
//     orderId: '#343',
//     date: '8/28/2024',
//     user: 'User 2',
//     order: 'Received',
//     payment: 'unpaid',
//     total: '$250.00',
//     status: 'Pending',
//     productDetails: {
//       name: 'product name',
//       color: '#f5365c',
//     },
//   },
// ];

const tableHeader = [
  {
    id: 1,
    className: "",
    name: "Name",
  },
  {
    id: 2,
    className: "",
    name: "Create Date",
  },
  {
    id: 3,
    className: "",
    name: "Customer name",
  },
  {
    id: 4,
    className: "",
    name: "Customer Email",
  },
  {
    id: 5,
    className: "",
    name: "Total",
  },
  {
    id: 6,
    className: "",
    name: "Payment Status",
  },
  {
    id: 7,
    className: "text-center",
    name: "",
  },
];

export default function OrdersTable() {
  return (
    <ScrollArea className="">
      <div className="mx-auto mt-4 w-[95%]">
        <Input placeholder="Search" />
      </div>
      <div className="overflow-x-auto">
        <Table className="max-w-[100%]">
          <TableHeader>
            <TableRow className="items-center hover:bg-transparent">
              {tableHeader.map((item) => (
                <TableHead className={item.className} key={item.id}>
                  {item.name}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="cursor-pointer font-medium text-slate-900">
              {/* <TableCell className="font-medium">
                <Checkbox
                  className="h-6 w-6 border-none bg-gray-500"
                  disabled
                />
              </TableCell> */}
              <TableCell>
                <a
                  target="_blank"
                  href={`#`}
                  className="underline hover:text-gray-400"
                  rel="noreferrer"
                >
                  product name
                </a>
              </TableCell>
              <TableCell>20/2/24</TableCell>
              <TableCell>human names</TableCell>
              <TableCell>user@gmail.com</TableCell>
              <TableCell>
                {" "}
                <p>200</p>{" "}
              </TableCell>
              <TableCell className="h-auto">
                <span
                  className={`rounded-full bg-green-200  : "bg-yellow-300"
                  } px-4 py-2 text-sm text-slate-900`}
                >
                  paid
                </span>
              </TableCell>
              <TableCell className="text-right">
                <button
                  type="button"
                  className="rounded-lg bg-purple-300 px-4 py-2 text-sm text-slate-900"
                >
                  View Items
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <PaginatedComponent currentPage={2} setCurrentPage={4} totalPages={25} />
    </ScrollArea>
  );
}
