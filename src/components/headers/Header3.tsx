import React from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../../components/ui/button";
import Image from "next/image";
import MaxWidthWrapper from "../elements/MaxWidthWrapper";

const Header: React.FC = () => {
  return (
    <>
      <nav className="absolute inset-x-0 top-0 z-30 w-full  transition-all ">
        <MaxWidthWrapper>
          <div className="flex h-14 items-center justify-between  py-10 px-3 ">
            {/**Logo */}
            <Link href="/" className={cn("flex z-40 font-bold")}>
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
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default Header;
