import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  url: z.string().min(2, {
    message: "Image URL must be",
  }),
});

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductModal({ isOpen, setIsOpen }: ModalProps) {
  const [imageUrl, setImageUrl] = useState<string>(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8Qc25Asr1FA0sDwKA0iniNLa57dc3J6qSyP8PCFpB2keD-4Z2Woy6ivPm29dSkPuinI"
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      url: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="ml-2 mr-2 w-full max-w-full overflow-y-scroll overflow-hidden lg:w-[1028px]">
        <DialogHeader>
          <DialogTitle className="text-lg">Product Variants</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Type your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type your image url"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            setImageUrl(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" onClick={() => setIsOpen(false)}>
                  Submit
                </Button>
              </form>
            </Form>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              className="w-60 mx-auto rounded-lg border p-8"
              src={imageUrl}
              alt="photo"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
