import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "../elements/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Megrim } from "next/font/google";

const mergrim = Megrim({ subsets: ["latin"], weight: ["400"] });

const link1: string = "ShoppingList";
const link2: string = "Archief";
const link3: string = "Login";

const Header = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          {/**Logo */}
          <Link
            href="/"
            className={cn("flex z-40 font-bold text-black", mergrim.className)}
          >
            ShopMe
          </Link>

          {/**right navbar */}
          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/kalender"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "default",
                  }),
                  "sm:hidden lg:inline"
                )}
              >
                {link1}
              </Link>
              {/**
               * 
               * Optional extra links
               * 
                <Link
                  href="/archief/alle"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "default",
                  })}
                >
                  {link2}
                </Link>
              */}
              <div className="border-r border h-10 border--200/75"></div>
              <Link
                href="/contact"
                className={buttonVariants({
                  variant: "default",
                  size: "default",
                })}
              >
                {link3}
              </Link>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Header;
