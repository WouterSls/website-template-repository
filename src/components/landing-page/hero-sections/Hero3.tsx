import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { HeroProps } from "./interfaces/HeroProps";

const sm_hero_tag_size: string = "7xl";
const md_hero_tag_size: string = "4xl";
const lg_hero_tag_size: string = "7xl";

const sm_sub_tag_size: string = "3xl";
const md_sub_tag_size: string = "4xl";
const lg_sub_tag_size: string = "7xl";

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
      {/**hero image*/}
      <div className="relative">
        <Image
          priority
          src={heroImage}
          alt="hero-image"
          width={1920}
          height={1120}
          className={cn(
            "pointer-events-none select-none",
            "h-[70vh] md:h-[80vh] w-full"
          )}
          style={{ objectFit: "cover", objectPosition: "65%" }}
        />

        {/**Text on image */}
        <div className="absolute top-1/4 right-1/2 transform -x-translate-1/2 -y-translate-1/2">
          <h1 className={` text-left max-w-2xl text-${sm_hero_tag_size}`}>
            {heroTag}
          </h1>

          <h2 className={`mt-10 text-${sm_sub_tag_size} `}>{subTag}</h2>

          <h3 className="hidden absolute top-[22rem] left-[10%] text-xl max-w-xl">
            {tagLine}
          </h3>

          {/** buttons */}
          <div className="mt-10 flex gap-4">
            <Link
              href={button1.link}
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              {button1.text}
            </Link>
            <Link
              href={button2.link}
              className={buttonVariants({ size: "lg", variant: "default" })}
            >
              {button2.text}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
