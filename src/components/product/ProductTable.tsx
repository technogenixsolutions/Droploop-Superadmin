import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    id: 1,
    productImg:
      "https://file.zendrop.com/product_images/358/webp/gSg4oHTEezkAwrG.webp",
    SKU: "TSC8LTBHATTROP0560S",
    variant: "Black",
    productCost: "$250.00",
    shipping: "$9.49",
    total: "$43.69",
  },
  {
    id: 2,
    productImg:
      "https://file.zendrop.com/product_images/358/webp/gSg4oHTEezkAwrG.webp",
    SKU: "TSC8LTBHATTROP0560S",
    variant: "Black",
    productCost: "$250.00",
    shipping: "$9.49",
    total: "$43.69",
  },
  {
    id: 3,
    productImg:
      "https://file.zendrop.com/product_images/358/webp/gSg4oHTEezkAwrG.webp",
    SKU: "TSC8LTBHATTROP0560S",
    variant: "Black",
    productCost: "$250.00",
    shipping: "$9.49",
    total: "$43.69",
  },
  {
    id: 4,
    productImg:
      "https://file.zendrop.com/product_images/358/webp/gSg4oHTEezkAwrG.webp",
    SKU: "TSC8LTBHATTROP0560S",
    variant: "Black",
    productCost: "$250.00",
    shipping: "$9.49",
    total: "$43.69",
  },
  {
    id: 5,
    productImg:
      "https://file.zendrop.com/product_images/358/webp/gSg4oHTEezkAwrG.webp",
    SKU: "TSC8LTBHATTROP0560S",
    variant: "Black",
    productCost: "$250.00",
    shipping: "$9.49",
    total: "$43.69",
  },
  {
    id: 6,
    productImg:
      "https://file.zendrop.com/product_images/358/webp/gSg4oHTEezkAwrG.webp",
    SKU: "TSC8LTBHATTROP0560S",
    variant: "Black",
    productCost: "$250.00",
    shipping: "$9.49",
    total: "$43.69",
  },
  {
    id: 7,
    productImg:
      "https://file.zendrop.com/product_images/358/webp/gSg4oHTEezkAwrG.webp",
    SKU: "TSC8LTBHATTROP0560S",
    variant: "Black",
    productCost: "$250.00",
    shipping: "$9.49",
    total: "$43.69",
  },
];

export function ProductsTable() {
  return (
    <Table>
      <TableHeader className="w-full">
        <TableRow className="product_table w-full rounded-md bg-[#F2F4F8] px-1 py-5">
          <TableHead className="w-[100px] font-bold text-black">
            Product
          </TableHead>
          <TableHead className="w-[80px] font-bold text-black">SKU</TableHead>
          <TableHead className="text-center font-bold text-black">
            Variant
          </TableHead>
          <TableHead className="text-center font-bold text-black">
            Product Cost
          </TableHead>
          <TableHead className="text-right font-bold text-black">
            Shipping
          </TableHead>
          <TableHead className="text-right font-bold text-black">
            Total
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id} className="product_table">
            <TableCell className="text-center font-medium">
              <img
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XJymLrGLvo1j24n6976WyUzudcFAQbeOcA&s`}
                alt="product img"
                className="h-12 w-12 object-cover"
              />
            </TableCell>
            <TableCell className="text-center font-medium">
              {invoice.SKU}
            </TableCell>
            <TableCell className="text-center">{invoice.variant}</TableCell>
            <TableCell className="text-center">{invoice.productCost}</TableCell>
            <TableCell className="text-right">{invoice.shipping}</TableCell>
            <TableCell className="text-right">{invoice.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
