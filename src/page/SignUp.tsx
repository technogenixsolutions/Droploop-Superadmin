import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// import { useRegisterMutation } from "@/redux/slices/AuthenticationSlice";
import { ROUTES } from "@/routes";
import GoogleLogoSvg from "@/svg/GoogleLogoSvg";
import ZendropLogoSvg from "@/svg/ZendropLogoSvg";
import CheckMarkLogoSvg from "@/svg/CheckMarkLogoSvg";

function Test() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get("accessToken");
  const refreshToken = searchParams.get("refreshToken");
  const cookieToken = Cookies.get("accessToken");
  // const [register] = useRegisterMutation();
  const formSchema = z.object({
    name: z
      .string({ required_error: "Name is required" })
      .trim()
      .min(1, { message: "Name must be at least 1 characters" }),
    email: z.string().email("Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    conditions: z.boolean().optional(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      conditions: false,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // try {
    //   const payload = { ...values };
    //   delete payload.conditions;
    //   const res = await register(payload);
    //   if (res?.data?.success) {
    //     toast(res?.data?.message);
    //     navigate(ROUTES.LOG_IN);
    //   }
    // } catch (error) {
    //   toast("Something went wrong");
    //   console.error(error);
    // }
    toast.success(values.email);
  }

  const handleSocialLogin = (url: string) => {
    window.open(url, "_self");
  };
  useEffect(() => {
    if (accessToken && refreshToken) {
      Cookies.set("accessToken", accessToken);
      Cookies.set("refreshToken", refreshToken);
      navigate(ROUTES.DASHBOARD.HOME);
    }
  }, [accessToken, navigate, refreshToken]);
  useEffect(() => {
    if (cookieToken) {
      navigate(ROUTES.DASHBOARD.HOME);
    }
  }, [cookieToken, navigate]);
  const inputStyle =
    "h-12 border-[#e9ecf1] bg-[#f7f8fb] text-lg text-gray-900 placeholder:text-lg placeholder:font-semibold placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0";

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex min-h-screen flex-1 flex-col justify-center">
        <div className="mx-auto w-2/3 rounded-lg p-8 pt-0">
          <h2 className="mb-10 mt-3 text-left text-3xl font-bold text-gray-900">
            Create an account
          </h2>
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your Name"
                        type="text"
                        className={inputStyle}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your Email"
                        type="email"
                        className={inputStyle}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your Password"
                        type="password"
                        className={inputStyle}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="conditions"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="h-5 w-5 rounded-none border-gray-400 data-[state=checked]:border-0 data-[state=checked]:bg-[#63d295] data-[state=checked]:text-white"
                        />
                      </FormControl>
                      <div className="relative space-y-1 leading-none">
                        <FormLabel className="text-gray-400">
                          I want Free Tiktok Ad Credits
                        </FormLabel>
                        <FormMessage className="absolute -left-7 w-56" />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Button
                  className="ease mb-2 h-auto w-full rounded-lg bg-[#63d295] px-9 py-3 text-xl text-white transition delay-0 duration-300 hover:scale-105 hover:bg-[#63d295]"
                  type="submit"
                >
                  Create an account
                </Button>
                <p className="text-center text-sm text-gray-500">
                  By signing up, you agree to the{" "}
                  <span className="text-[#977af1]">
                    <a className="hover:underline" href="http//">
                      Terms & Conditions
                    </a>{" "}
                    &{" "}
                    <a className="hover:underline" href="http//">
                      Privacy Policy
                    </a>
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-between py-4 text-gray-500">
                <Separator className="w-[45%]" />
                <p>OR</p>
                <Separator className="w-[45%]" />
              </div>
              <div className="flex justify-center space-x-4">
                <Button
                  className="h-auto w-full rounded-lg border border-gray-300 bg-gray-200 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() =>
                    handleSocialLogin(
                      `${import.meta.env.VITE_BASEURL}/auth/google/redirect`
                    )
                  }
                >
                  <GoogleLogoSvg width="30" height="31" />
                </Button>
              </div>
            </form>
          </Form>
          <p className="mt-5 text-center text-lg text-gray-400">
            Already have an account?{" "}
            <Link to={ROUTES.LOG_IN} className="text-[#977af1]">
              Log In
            </Link>
          </p>
          {/* <a
            href="http//"
            className="mt-10 flex w-full items-center justify-center gap-5"
          >
            <span className="text-2xl">Excellent</span>
            <span>152245 review on</span>
            <span className="text-lg font-semibold">Truthpilot</span>
          </a> */}
        </div>
      </div>
      <div className="flex min-h-screen flex-1 flex-col justify-center bg-gradient-to-br from-[#8472ed] to-[#b786f6]">
        <div className="mx-auto w-[85%]">
          <h1 className="flex items-center justify-center gap-4 text-4xl font-bold text-white">
            <ZendropLogoSvg /> Why people love Zendrop
          </h1>
          <div className="mt-16 flex cursor-help justify-center gap-3 text-white">
            <div className="w-[45%] space-y-1">
              <h3 className="flex items-center gap-2 text-base">
                <CheckMarkLogoSvg />
                Source Anything from our Chinese Warehouse
              </h3>
              <h3 className="flex items-center gap-2 text-base">
                <CheckMarkLogoSvg />
                Learn How To Sell Anything to Anyone
              </h3>
              <h3 className="flex items-center gap-2 text-base">
                <CheckMarkLogoSvg />
                Discover Top Trending Products
              </h3>
            </div>
            <div className="space-y-1">
              <h3 className="flex items-center gap-2 text-base">
                <CheckMarkLogoSvg />
                Create a Brand
              </h3>
              <h3 className="flex items-center gap-2 text-base">
                <CheckMarkLogoSvg />
                Automate Fulfillment
              </h3>
              <h3 className="flex items-center gap-2 text-base">
                <CheckMarkLogoSvg />
                24/7 World Class Support
              </h3>
              <h3 className="flex items-center gap-2 text-base">
                <CheckMarkLogoSvg />
                US Based Product Catalog
              </h3>
            </div>
          </div>
          <div className="mx-auto mt-12 w-[90%] rounded-lg border border-white border-opacity-20 bg-white bg-opacity-10 p-8 shadow-lg">
            <div className="mb-4 flex items-center">
              <div className="h-24 w-24 rounded-full p-1">
                <img
                  className="h-full w-full rounded-full border-4"
                  src="https://cdn2.vectorstock.com/i/1000x1000/08/61/person-gray-photo-placeholder-little-boy-vector-23190861.jpg"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-white">
                  Michael Aririguzo
                </h2>
                <p className="text-sm text-gray-300">Zendrop Select Client</p>
                <div className="mt-1 flex items-center">
                  <svg
                    className="h-4 w-4 fill-current text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.902c.969 0 1.372 1.24.588 1.81l-3.97 2.868a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.97-2.868a1 1 0 00-1.176 0l-3.97 2.868c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.993 9.1c-.784-.57-.38-1.81.588-1.81h4.902a1 1 0 00.95-.69l1.518-4.674z" />
                  </svg>
                  <svg
                    className="h-4 w-4 fill-current text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.902c.969 0 1.372 1.24.588 1.81l-3.97 2.868a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.97-2.868a1 1 0 00-1.176 0l-3.97 2.868c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.993 9.1c-.784-.57-.38-1.81.588-1.81h4.902a1 1 0 00.95-.69l1.518-4.674z" />
                  </svg>
                  <svg
                    className="h-4 w-4 fill-current text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.902c.969 0 1.372 1.24.588 1.81l-3.97 2.868a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.97-2.868a1 1 0 00-1.176 0l-3.97 2.868c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.993 9.1c-.784-.57-.38-1.81.588-1.81h4.902a1 1 0 00.95-.69l1.518-4.674z" />
                  </svg>
                  <svg
                    className="h-4 w-4 fill-current text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.902c.969 0 1.372 1.24.588 1.81l-3.97 2.868a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.97-2.868a1 1 0 00-1.176 0l-3.97 2.868c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.993 9.1c-.784-.57-.38-1.81.588-1.81h4.902a1 1 0 00.95-.69l1.518-4.674z" />
                  </svg>
                  <svg
                    className="h-4 w-4 fill-current text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.902c.969 0 1.372 1.24.588 1.81l-3.97 2.868a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.97-2.868a1 1 0 00-1.176 0l-3.97 2.868c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.993 9.1c-.784-.57-.38-1.81.588-1.81h4.902a1 1 0 00.95-.69l1.518-4.674z" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="leading-relaxed text-gray-200">
              I have built multiple 7 figure drop shipping businesses and
              Aerodrop has been by far the best team to work with. They have
              continued to over deliver in the dropshipping business compared to
              other competitors. Aerodrop is much easier, faster and the only
              encompassing drop shipping solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
