import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

import { MobileSidebar } from "./MobileSidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/routes";
import LogoutLogoSvg from "@/svg/LogoutLogoSvg";
import ProfileLogoSvg from "@/svg/ProfileLogoSvg";

export default function Header() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    // somthing to do here
  };
  const handleProfile = async () => {
    navigate(ROUTES.DASHBOARD.PROFILE);
  };
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-20 items-center justify-between px-3 md:px-10">
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>
        <div className="">
          <Link to={ROUTES.DASHBOARD.HOME} className="text-3xl font-extrabold ">
            Super<span className="text-[#a990f0]">Admin </span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden cursor-pointer items-center gap-2 hover:text-gray-400 md:flex">
            <FaRegCircleQuestion className="text-xl" />
            Help center
          </div>
          <RxDividerVertical className="hidden h-10 text-gray-400 md:block" />
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <ProfileLogoSvg width="22px" height="22px" />
              <span className="hidden text-xl md:block">{""}</span>
              <IoIosArrowDown className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="flex items-center gap-3"
                onClick={handleProfile}
              >
                <ProfileLogoSvg /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-3"
                onClick={handleLogout}
              >
                <LogoutLogoSvg /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}
