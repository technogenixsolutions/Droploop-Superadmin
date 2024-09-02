import { ScrollArea } from "../ui/scroll-area";

export default function DraftProductImages() {
  return (
    <ScrollArea className="h-80 w-full rounded-md">
      <div className="grid grid-cols-4 gap-4">
        <button type="button" className={`rounded border p-2 border-red-500`}>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XJymLrGLvo1j24n6976WyUzudcFAQbeOcA&s"
            }
            alt="product img"
            className="h-64 w-full object-cover"
          />
        </button>
      </div>
    </ScrollArea>
  );
}
