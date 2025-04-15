"use client";
import { useUser } from "@clerk/nextjs";
import {
  BookOpen,
  LayoutDashboard,
  Mail,
  Menu as MenuIcon,
  X,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function SideNav() {
  const { user, signOut } = useUser();
  const path = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menu = [
    {
      id: 8,
      name: "Бақылау тақтасы",
      icon: LayoutDashboard,
      path: "/dashboard",
      auth: user,
    },
    {
      id: 1,
      name: "Барлық курстар",
      icon: BookOpen,
      path: "/courses",
      auth: true,
    },
    {
      id: 5,
      name: "Ұсыныс Жасау",
      icon: Mail,
      path: "/newsletter",
      auth: true,
    },
  ];

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setMobileMenuOpen(false); // закрывать меню при смене страницы
  }, [path]);

  return (
    <>
      {/* Mobile toggle button */}
      <div className="md:hidden p-4 flex justify-between items-center bg-white shadow-sm border-b">
        <Image src="/ulttuq.png" width={100} height={20} alt="logo" />
        <button onClick={toggleMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-white shadow-sm border p-5 
        fixed top-0 left-0 h-full z-50 w-64 
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block`}
      >
        <Image src="/ulttuq.png" width={125} height={20} alt="logo" />
        <hr className="mt-7" />

        <div className="mt-5">
          {menu.map(
            (item) =>
              item.auth && (
                <Link key={item.id} href={item.path}>
                  <div
                    className={`group flex gap-3 mt-2 p-3 text-[18px] items-center
                    text-gray-500 cursor-pointer hover:bg-primary hover:text-white
                    rounded-md transition-all ease-in-out duration-200
                    ${path.includes(item.path) && "bg-primary text-white"}`}
                  >
                    <item.icon className="group-hover:animate-bounce" />
                    <h2>{item.name}</h2>
                  </div>
                </Link>
              )
          )}
        </div>

        {/* Logout Button */}
        {user && (
          <div className="mt-5">
            <button
              onClick={() => signOut()}
              className="group flex gap-3 mt-2 p-3 text-[18px] items-center
                text-gray-500 cursor-pointer hover:bg-primary hover:text-white
                rounded-md transition-all ease-in-out duration-200"
            >
              <LogOut className="group-hover:animate-bounce" />
              <h2>Шығу</h2>
            </button>
          </div>
        )}
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}

export default SideNav;
