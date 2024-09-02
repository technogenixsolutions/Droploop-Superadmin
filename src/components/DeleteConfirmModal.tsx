import { Trash2 } from "lucide-react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface Props {
  isOpen: boolean;
  close: () => void;
}
function DeleteConfirmModal({ isOpen, close }: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      {/* <DialogTrigger className="rounded bg-primary px-4 py-2 text-sm text-white">
      Publish
    </DialogTrigger> */}
      <DialogContent className="ml-2 mr-2 w-full max-w-full lg:w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-lg">Delete confirmation</DialogTitle>
          {/* <DialogDescription className="mt-4 w-full max-w-full">
            You can edit your product listing here and import it to your store,
            or add it to your store right away and make changes later on in your
            store.
          </DialogDescription> */}
          {/* <DialogClose asChild>
          <button className="absolute right-2 top-2">close</button>
        </DialogClose> */}
        </DialogHeader>
        <div className="rounded-lg bg-white p-4 text-center sm:p-5">
          <Trash2 className="mx-auto mb-3.5 h-11 w-11 text-gray-400" />

          <p className="mb-4 text-gray-500">
            Are you sure you want to delete this product?
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button
              data-modal-toggle="deleteModal"
              onClick={close}
              type="button"
              className="focus:ring-primary-300 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            >
              No, cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-red-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700"
            >
              Yes, I&apos;m sure
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteConfirmModal;
