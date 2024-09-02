import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { ScrollArea } from '../ui/scroll-area';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Props {
  isOpen: boolean;
  close: any;
  lineItems: any;
}
function ViewLineItems({ isOpen, close, lineItems }: Props) {
  const billingAddress = lineItems?.billingAddress;
  const shippingAddress = lineItems?.shippingAddress;
  const tableHeader = [
    {
      id: 1,
      className: '',
      name: 'Name',
    },
    {
      id: 2,
      className: '',
      name: 'Price',
    },
    {
      id: 3,
      className: '',
      name: 'Quantity',
    },
  ];
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      {/* <DialogTrigger className="rounded bg-primary px-4 py-2 text-sm text-white">
      Publish
    </DialogTrigger> */}
      <DialogContent className="ml-2 mr-2 w-full max-w-full lg:w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-lg">Line Items</DialogTitle>
          {/* <DialogDescription className="mt-4 w-full max-w-full">
            You can edit your product listing here and import it to your store,
            or add it to your store right away and make changes later on in your
            store.
          </DialogDescription> */}
          {/* <DialogClose asChild>
          <button className="absolute right-2 top-2">close</button>
        </DialogClose> */}
        </DialogHeader>
        <ScrollArea className="h-[60vh]">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Billing Address</CardTitle>
              </CardHeader>
              <CardContent className="-mt-10">
                <p>
                  <strong>Name:</strong> {billingAddress.name}
                </p>
                <p>
                  <strong>Address:</strong> {billingAddress.address1}
                </p>
                <p>
                  <strong>City:</strong> {billingAddress.city}
                </p>
                <p>
                  <strong>Province:</strong> {billingAddress.province}
                </p>
                <p>
                  <strong>Country:</strong> {billingAddress.country}
                </p>
                <p>
                  <strong>Postal Code:</strong> {billingAddress.zip}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Shipping Address</CardTitle>
              </CardHeader>
              <CardContent className="-mt-10">
                <p>
                  <strong>Name:</strong> {shippingAddress.name}
                </p>
                <p>
                  <strong>Address:</strong> {shippingAddress.address1}
                </p>
                <p>
                  <strong>City:</strong> {shippingAddress.city}
                </p>
                <p>
                  <strong>Province:</strong> {shippingAddress.province}
                </p>
                <p>
                  <strong>Country:</strong> {shippingAddress.country}
                </p>
                <p>
                  <strong>Postal Code:</strong> {shippingAddress.zip}
                </p>
              </CardContent>
            </Card>
          </div>
          <Table>
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
              {lineItems?.LineItems.map((invoice: any) => (
                <TableRow
                  className="cursor-pointer font-medium text-slate-900"
                  key={invoice.id}
                >
                  <TableCell>
                    <span className="">{invoice.name}</span>
                  </TableCell>

                  <TableCell>{invoice.price}</TableCell>
                  <TableCell>{invoice?.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default ViewLineItems;
