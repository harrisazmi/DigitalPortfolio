"use client";
import { Button } from "./Button";
import { IconAnimation } from "./IconAnimation";
import { clx } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { IconInfo } from "./IconInfo";
import { AvatarInfo } from "@/data/AvatarInfo";
import { TypeAnimation } from "react-type-animation";

export default function Avatar({ className }: { className?: string }) {
  return (
    <div
      className={clx(
        "h-[600px]  bg-gray-110 rounded-xl flex justify-center p-8 ",
        "max-lg:bg-white xl:w-[310px]",
        className
      )}
    >
      <div className="flex flex-col justify-between h-[536px]">
        <div className="items-center justify-center flex flex-col">
          <div className="h-[280px] w-[240px] rounded-lg mb-6 overflow-clip">
            <Image
              src={"/avatar/avatar-light.png"}
              alt={"avatar"}
              width={240}
              height={280}
            ></Image>
          </div>
          <div className="flex flex-col items-start space-y-1">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold  text-black">
                Harris Azmi
              </h1>
              <h2 className="text-xl font-medium">
                <span
                  className={`bg-gradient-to-br from-orange-110 to-orange-120 bg-clip-text text-transparent`}
                >
                  <TypeAnimation
                    sequence={[
                      "FullStack Web Developer",
                      1000,
                      "MERN Stack Developer",
                      1000,
                      "Frontend Specialist",
                      1000,
                      "Dev Ops Engineer",
                      1000,
                      "Home Lab Brewer",
                      1000,
                      "Self-hosted Infra Engineer",
                      1000,
                      "Chemical Engineer!",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h2>
              <p className="text-lg text-gray-130">Shah Alam, Malaysia</p>
            </div>
          </div>

          <div className="space-x-4 py-4 flex">
            {AvatarInfo.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                target="_blank"
                rel="noopener noreferrer"
                className={clx(
                  "p-2 rounded-xl relative group overflow-visible",
                  "hover:text-white"
                )}
              >
                <div className="relative z-10 flex items-center text-gray-130 group-hover:text-white">
                  {tab.icon}
                </div>
                <IconAnimation />
                <IconInfo className="top-11 bg-gray-120">{tab.label}</IconInfo>
              </Link>
            ))}
          </div>
        </div>
        <div className="items-center justify-center flex">
          <Link href={"/contacts"}>
            <Button className="px-10 py-2 hover:cursor-pointer text-white">
              Let's talk
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
