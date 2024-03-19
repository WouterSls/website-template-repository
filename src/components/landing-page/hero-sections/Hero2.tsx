import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HeroProps } from "./interfaces/HeroProps";

const propVid: string = "/minimal-1.jpg";

const HeroSection: React.FC<HeroProps> = ({
  heroTag,
  subTag,
  tagLine,
  button1,
  button2,
  heroImage,
}) => {
  return (
    <>
      <section>
        <Image
          src={heroImage}
          alt="temp-hero-image"
          layout="fill"
          objectFit="cover"
        ></Image>

        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <h2 className="mt-[10rem] md:mt-[20rem] font-bold text-2xl md:text-6xl ">
            {heroTag}
          </h2>
          <p className="my-4 text-xs md:text-lg lg:text-xl"> {subTag}</p>
          <Link
            href={button1.link}
            className={cn(
              "my-8",
              buttonVariants({ variant: "default", size: "lg" })
            )}
          >
            {button1.text}
          </Link>
          <div className=" flex flex-row text-center align-center justify-center">
            <Link href={button2.link} className="text-xs opacity-80 mb-20">
              of{" "}
              <span className="bg-gray-200/20 hover:bg-gray-400 text-black p-2 rounded-xl border-b border-2 transition ease-in-out ">
                {button2.text}
              </span>
            </Link>
          </div>

          <Image
            src={propVid}
            alt="temp hero image"
            width={800}
            height={800}
            className="lg:my-8 rounded-xl mx-auto max-w-xs md:max-w-xl lg:max-w-4xl"
          ></Image>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
