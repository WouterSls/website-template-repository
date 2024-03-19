import React from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../../components/ui/button";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <>
      <nav className="absolute inset-x-0 top-0 z-30 w-full backdrop-blur-lg transition-all ">
        <div className="flex h-14 items-center justify-between  p-10">
          {/**Logo */}
          <Link href="/" className={cn("flex z-40 font-bold text-black")}>
            Temp
          </Link>

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
                Kalender
              </Link>

              <Link
                href="/archief/alle"
                className={buttonVariants({
                  variant: "ghost",
                  size: "default",
                })}
              >
                Archief
              </Link>
              <div className="border-r border h-10 border--200/75"></div>
              <Link
                href="/contact"
                className={buttonVariants({
                  variant: "default",
                  size: "default",
                })}
              >
                Contact
              </Link>
            </>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
