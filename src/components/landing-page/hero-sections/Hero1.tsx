import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HeroProps } from "./interfaces/HeroProps";

const HeroSection: React.FC<HeroProps> = ({
  heroTag,
  subTag,
  tagLine,
  button1,
  button2,
  heroImage,
}) => {
  return (
    <section className="bg-gray-200">
      <div className="grid grid-cols-12 min-h-[80svh]">
        <div className="col-span-6 px-20">
          <h2 className="text-7xl font-bold pt-40">{heroTag}</h2>
          <div className="absolute h-[225px] w-[100%] bottom-0"></div>
          <div>
            <p className="pt-8 text-2xl">{subTag}</p>
          </div>
          <div className="flex align-left pt-8 gap-2">
            <Link
              href={button1.link}
              className={buttonVariants({ variant: "secondary" })}
            >
              {button2.text}
            </Link>
            <Link
              href="example.com"
              className={cn(buttonVariants({ variant: "default", size: "lg" }))}
            >
              {button2.link}
            </Link>
          </div>
        </div>
        <div className="relative col-span-6 bg-red-200/40">
          <Image src={heroImage} alt="temp hero image" fill></Image>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
