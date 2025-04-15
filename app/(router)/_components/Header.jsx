"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { BellDot, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

function Header() {
  const { user, isLoaded } = useUser();
  return (
    <div className="p-4 bg-white flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center shadow-sm">
      {/* Search bar  */}
      <div
        className="flex gap-2 border 
        p-2 rounded-md items-center w-full sm:w-auto"
      >
        <Search className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Іздеу..."
          className="outline-none w-full text-sm"
        />
      </div>

      {/* Get Started Button & bell Icon */}
      <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
        <BellDot className="text-gray-500" />
        {isLoaded && user ? (
          <UserButton afterSignOutUrl="/courses" />
        ) : (
          <Link href={"/sign-in"}>
            <Button size="sm">Тіркелу</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
