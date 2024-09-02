import { Button } from "../ui/button";

function DraftProductModalActions() {
  return (
    <div className="mb-3 mt-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex w-full items-center justify-end gap-3">
          <Button
            type="button"
            className="h-auto border-[#63d295] bg-[#63d295] px-10 py-4 text-lg font-medium text-white hover:bg-[#4ead79]"
          >
            Publish to my store
          </Button>
          {/* <Button
            className="h-auto border-2 border-gray-200 bg-transparent px-10 py-4 text-lg font-medium text-black hover:bg-gray-300 hover:text-black"
            type="button"
          >
            Save
          </Button> */}
        </div>
      </div>
      <div>
        <Button
          className="bg-transparent text-sm font-semibold text-black underline hover:bg-transparent hover:text-gray-500"
          type="button"
        >
          Remove from My Products
        </Button>
      </div>
    </div>
  );
}

export default DraftProductModalActions;
