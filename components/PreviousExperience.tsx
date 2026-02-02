"use client";
import { ExpInfo } from "@/data/ExpInfo";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { clx } from "@/lib/utils";
import router from "next/router";
import { Button } from "./Button";
import { ArrowRightIcon } from "@/Icons";

type PreviousExperienceProps = {
  sub?: boolean;
};

export default function PreviousExperience({
  sub = true,
}: PreviousExperienceProps) {
  const pathname = usePathname();
  const modifiedPathname = pathname.replace("/experiences/", "");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {sub && (
          <h1 className="font-bold text-5xl pb-6">Previous Experiences</h1>
        )}
        <div ref={ref} className="gap-4 flex flex-col">
          {ExpInfo.map((exp, index) => {
            if (modifiedPathname === exp.name.toLowerCase()) {
              return null;
            }

            return (
              <div
                key={index}
                className="bg-white h-auto rounded-2xl flex flex-col justify-between p-6 border border-blue-110 gap-11"
              >
                <div className="flex flex-col gap-7">
                  <div className="sm:flex sm:justify-between sm:items-center">
                    <div className="flex items-center justify-center gap-4.5 max-sm:gap-2 ">
                      <div className="rounded-full size-16 overflow-hidden shrink-0 border border-gray-130">
                        <Image
                          src={exp.path}
                          alt={exp.name}
                          width={64}
                          height={64}
                          quality={100}
                        />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{exp.name}</div>
                        <div className="text-sm text-gray-140">
                          {exp.position}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-140 max-sm:pt-2">
                      {exp.year}
                    </div>
                  </div>
                  <div className="text-base text-gray-140">{exp.details}</div>
                  {(exp.projects?.length ?? 0) > 0 && (
                    <div className="flex flex-col gap-[14px]">
                      <h2 className="tracking-[2px] text-gray-140 text-xs font-medium">
                        PROJECTS INVOLVED
                      </h2>
                      <div className="flex flex-wrap gap-2 items-center justify-center ">
                        {(exp.projects?.length ?? 0) > 0
                          ? exp.projects!.map((project, index) => (
                              <Link href={project.href} key={index}>
                                <div
                                  key={index}
                                  className={clx(
                                    "w-[150px] h-[70px] rounded-xl flex items-center justify-center gap-3 px-6",
                                    "border border-blue-110 hover:bg-orange-101 hover:border-orange-140"
                                  )}
                                >
                                  <div>{project.icon}</div>
                                  <div className="font-semibold">
                                    {project.name}
                                  </div>
                                </div>
                              </Link>
                            ))
                          : null}
                      </div>
                    </div>
                  )}
                </div>
                <Link href={exp.href}>
                  <Button className="flex items-center gap-2 flex-shrink-0 text-white hover:cursor-pointer ">
                    More Info
                    <ArrowRightIcon />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
