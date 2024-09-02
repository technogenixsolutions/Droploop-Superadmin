import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../components/ui/button";
import { Form, FormControl, FormField, FormItem } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { toast } from "sonner";

function ConnectMyStore() {
  const formSchema = z.object({
    shop: z.string().min(1, "Shop Name is required"),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shop: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    //  somthing to do here
    toast.success(values.shop);
  }
  return (
    <div className="relative h-[300px] w-full bg-primary px-5">
      <div className="absolute left-1/2 top-10 w-full -translate-x-1/2 transform rounded-md bg-white px-3 lg:w-[1000px] lg:px-0">
        <div className="mx-auto w-full px-0 pb-4 pt-14 lg:w-[680px] lg:px-10">
          <div className="flex items-center justify-center">
            {/* <img
              className="h-full w-full bg-cover object-fill"
              src="https://app.zendrop.com/images/connect-store/zd-shopify-light.svg"
              alt=""
            /> */}
          </div>
          <div className="text-center">
            <h4 className="mt-10 text-3xl font-semibold">
              Time to Integrate Your Store with Aerodrop
            </h4>
            <h5 className="mb-3 mt-3 text-base">
              Few more steps to start your business
            </h5>
          </div>
          <div className="py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 justify-center rounded-full bg-primary">
                <p className="font-bold text-white">1</p>
              </div>
              <h5 className="font-bold">
                Add your Shopify store Name (Ex:
                https://admin.shopify.com/store/xxxx)
              </h5>
            </div>

            <div className="mt-5">
              <Form {...form}>
                <form
                  className="flex items-center space-x-2"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="shop"
                    render={({ field }) => (
                      <FormItem className="w-3/4">
                        <FormControl>
                          <Input
                            pattern="^https://admin\.shopify\.com/store/[\w-]+$"
                            placeholder="Shop Name"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        {/* <FormMessage /> */}
                      </FormItem>
                    )}
                  />

                  <Button type="submit">Authorize</Button>
                </form>
              </Form>
            </div>

            <div className="mt-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 justify-center rounded-full bg-primary">
                  <p className="font-bold text-white">2</p>
                </div>
                <h5 className="font-bold">
                  Click Install for One-Click Production Listing
                </h5>
              </div>

              <div className="mt-6">
                <p>
                  When accessing the app page, click Install to enable one-click
                  product listing and automatic order fulfillment for your
                  store.
                </p>
                <div className="mt-3 h-full w-full">
                  {/* <img
                    className="h-full w-full rounded-md border border-[#dfe2e6]"
                    src="https://app.zendrop.com/images/shopify-step-3.webp"
                    alt=""
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectMyStore;
