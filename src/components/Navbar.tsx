"use client";

import { Menu, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./ui/modetoggle";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MenuItems = ({ isMobile }: { isMobile: boolean }) => {
  const Links = ["Explore NFTs", "Listed NFTs", "My NFTs"];

  return (
    <>
      {isMobile ? (
        <div className=" flex flex-col items-start space-y-5 mt-10">
          {Links.map((item: string, i: number) => {
            return (
              <div
                className="hover:text-black text-sm cursor-pointer w-full bg-blue-500 rounded-md p-4 text-white transition-all"
                key={i + 1}
              >
                {item}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <div className=" flex  items-start space-x-5">
            {Links.map((item: string, i: number) => {
              return (
                <div
                  className="hover:text-black/20 text-sm cursor-pointer text-black transition-all"
                  key={i + 1}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-14 w-full fixed z-10 p-4 flex-row border-b dark:bg-zinc-950 bg-white dark:border-zinc-700 border-neutral-400">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div className="font-semibold text-md ml-1 cursor-pointer">
            NFT_MARKET
          </div>
        </Link>
      </div>

      {/* Search bar */}

      {/* Mobile Menu */}

      <div className="flex items-center gap-2">
        <div className=" md:hidden block">
          <Sheet>
            <SheetTrigger>
              <Button size={"sm"}>
                <Menu width={20} height={20} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <MenuItems isMobile={true} />
            </SheetContent>
          </Sheet>
        </div>
        {/* Desktop links */}
        <div className=" hidden md:flex items-center mr-2">
          <MenuItems isMobile={false} />
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
