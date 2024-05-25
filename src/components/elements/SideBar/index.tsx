"use client";
import { AiOutlineHome } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { MdDashboard } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";
import { RiLogoutCircleFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
import { SideBarProps } from "./interface";
import { SideBarContext } from "@/components/context/SideBarContext";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export const SideBar: React.FC<SideBarProps> = () => {
  const sidebarItems = [
    {
      name: "Home",
      href: "/",
      icon: AiOutlineHome,
    },
    {
      name: "Find Intern",
      href: "/intern",
      icon: MdWork,
    },
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: MdDashboard,
    },
    {
      name: "Login",
      href: "/login",
      icon: RiLoginCircleFill,
    },
    {
      name: "Register",
      href: "/register",
      icon: AiOutlineLogin,
    },
    {
      name: "Logout",
      href: "/logout",
      icon: RiLogoutCircleFill,
    },
  ];

  const router = useRouter();
  const pathname = usePathname();
  const { isCollapsed, toggleSideBarCollapse } = useContext(SideBarContext);

  return (
    <div className="relative">
      <button
        className="absolute mt-20 top-0 bg-yellow-400 right-0 w-6 h-6 border border-color-border rounded-full flex justify-center items-center cursor-pointer transform translate-x-1/2 text-base"
        onClick={toggleSideBarCollapse}
      >
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>

      <aside
        className={` min-h-screen bg-white p-4 transition-all duration-400 ${
          isCollapsed ? "w-20" : "w-72"
        }`}
      >
        <div className="flex items-center gap-4 pb-4 mb-4 border-b border-gray-300">
          <Image
            width={50}
            height={50}
            className="rounded-full"
            src="/assets/logo.png"
            alt="logo"
          />
          {!isCollapsed && <p className="text-xl font-semibold">JobStreet</p>}
        </div>
        <ul className="space-y-4">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li key={name}>
                <Link
                  href={href}
                  className={`flex items-center justify-start text-lg text-gray-800 px-4 py-2 rounded-md ${
                    pathname === href ? " bg-yellow-400 " : "bg-gray-200 "
                  }`}
                >
                  <span className="text-xl">
                    <Icon />
                  </span>
                  {!isCollapsed && <span className="ml-2">{name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};
