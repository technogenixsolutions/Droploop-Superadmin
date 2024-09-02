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
  defaultImageUrl: string;
}

export function ProductsTable({ variants, defaultImageUrl }: Props) {
  return (
    <Table>
      <TableHeader className="w-full">
        <TableRow className="product_table w-full rounded-md bg-[#F2F4F8] px-1 py-5">
          <TableHead className="w-[100px] font-bold text-black">
            Product
          </TableHead>
          <TableHead className="text-center font-bold text-black">
            Sku
          </TableHead>
          <TableHead className="text-center font-bold text-black">
            Color
          </TableHead>
          <TableHead className="text-center font-bold text-black">
            Size
          </TableHead>
          <TableHead className="text-center font-bold text-black">
            Quantity
          </TableHead>
          <TableHead className="text-center font-bold text-black">
            Product Cost
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {variants?.map((variant: any) => (
          <TableRow key={variant.sku} className="product_table">
            <TableCell className="text-center font-medium">
              <img
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XJymLrGLvo1j24n6976WyUzudcFAQbeOcA&s`}
                alt="product img"
                className="h-12 w-12 object-cover"
              />
            </TableCell>
            <TableCell className="text-center font-medium">
              {variant.sku}
            </TableCell>
            <TableCell className="text-center font-medium">
              {variant.color}
            </TableCell>

            <TableCell className="text-center">{variant.size}</TableCell>
            <TableCell className="text-center">
              {variant.totalQuantity}
            </TableCell>
            <TableCell className="text-center">{variant.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
