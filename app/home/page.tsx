"use client";

import { HomeInfo } from "@/data/HomeInfo";
import { clx } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import HorizontalCard from "@/components/HorizontalCard";
import { ArrowRightIcon } from "@/Icons";
import Link from "next/link";
import Contacts from "@/components/Contact";
import { Button } from "@/components/Button";
import { collabProjectsData } from "@/data/ProjectsData";
import { ExpInfo } from "@/data/ExpInfo";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div
          ref={ref}
          className={clx(
            "flex flex-col items-center space-y-8 pt-8",
            "lg:items-start lg:pt-0 w-full"
          )}
        >
          <div className="border-b-1 border-blue-110">
            <h1 className="text-4xl font-extrabold lg:text-left">
              {HomeInfo.titleHook.split("\n").map((line, id) => (
                <span key={id}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="text-gray-140 pb-8 pt-3">{HomeInfo.descHook}</p>
          </div>
          <h2 className="tracking-[2px] text-gray-130 text-xs font-medium text-start w-full ">
            WORK EXPERIENCE
          </h2>
          <div className=" gap-8 flex flex-col w-full text-left">
            {ExpInfo.map((exp, index) => (
              <div
                key={index}
                className="flex w-full rounded-2xl items-center "
              >
                <div className="pr-4">
                  <div className="rounded-full size-16 overflow-hidden shrink-0 border border-gray-110">
                    <Image
                      src={exp.path}
                      alt={exp.name}
                      width={64}
                      height={64}
                      quality={100}
                    />
                  </div>
                </div>
                <div>
                  <div className="text-xl font-semibold">{exp.name}</div>
                  <div className="text-gray-140 font-light text-sm">
                    {exp.position}
                  </div>
                  <div className="text-gray-140 font-light text-sm">
                    {exp.year}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full border-b border-blue-110">
            <h2 className="tracking-[2px] text-gray-130 text-xs font-medium text-start">
              EDUCATION
            </h2>
            <div className="py-8 gap-6 flex flex-col">
              {HomeInfo.education.map((edu, index) => (
                <div key={index} className="flex justify-between ">
                  <div>
                    <div className="text-xl font-medium">{edu.title}</div>
                    <div className="text-gray-140 font-light text-sm">
                      {edu.major}
                    </div>
                    <div className="text-gray-140 font-light text-sm">
                      {edu.year}
                    </div>
                  </div>

                  <div className=" shrink-0 ml-4">
                    <Image
                      src={edu.path}
                      alt={edu.name}
                      width={120}
                      height={60}
                      quality={100}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <HorizontalCard title={"CERTIFICATES"}>
            {HomeInfo.certificate.map((certificate, index) => (
              <div
                key={index}
                className="rounded-lg border border-blue-110 bg-white p-3 flex justify-between items-center flex-shrink-0 snap-start"
              >
                <div>
                  <div
                    className="font-medium"
                    style={{ maxWidth: "20ch", wordWrap: "break-word" }}
                  >
                    {certificate.title}
                  </div>
                  <div className="text-xs text-gray-140">
                    {certificate.issuer}, {certificate.year}
                  </div>
                  <div className="text-xs font-light text-gray-140">
                    {certificate.credID}
                  </div>
                </div>
                <div className="pl-4">
                  <Image
                    src={certificate.path}
                    alt={certificate.issuer}
                    width={32}
                    height={32}
                    quality={100}
                  />
                </div>
              </div>
            ))}
          </HorizontalCard>
          <div className="w-full border-b border-blue-110 pb-8 gap-8 flex flex-col">
            <div className="justify-between flex">
              <h2 className="tracking-[2px] text-gray-130 text-xs font-medium items-center flex">
                RECENT PROJECTS
              </h2>
              <Link
                href="/projects"
                className="text-xs bg-gradient-to-r from-orange-110 to-orange-120 bg-clip-text text-transparent hover:cursor-pointer"
              >
                <Button className="text-sm bg-gradient-to-r from-orange-110 to-orange-120 bg-clip-text text-transparent hover:cursor-pointer">
                  View All
                </Button>
              </Link>
            </div>

            <div className="flex flex-col gap-12">
              {collabProjectsData.map((project, index) => (
                <div key={index} className="flex flex-col gap-6">
                  <Link href={project.href}>
                    <div className="relative w-full aspect-[325/202] hover:cursor-pointer">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={3000}
                        height={2000}
                        quality={100}
                      />
                    </div>
                  </Link>
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold text-xl">{project.title}</div>
                    <div className="text-gray-140">
                      {project.shortDescription}
                    </div>
                    <div className="mt-3">
                      <Link
                        href={project.href}
                        className="text-xs bg-gradient-to-r from-orange-110 to-orange-120 bg-clip-text text-transparent"
                      >
                        <Button className="flex items-center gap-2 flex-shrink-0 text-white hover:cursor-pointer">
                          More Info{" "}
                          <ArrowRightIcon className="text-white shrink-0" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <HorizontalCard
            title={"WORKING WITH  KEMENTERIAN DIGITAL AND MYDIGITAL CORP"}
          >
            {HomeInfo.gallery.map((about, index) => (
              <div
                key={index}
                className="rounded-lg w-[400px] h-[300px] border border-blue-110 bg-white gap-2.5 flex flex-col items-start flex-shrink-0 snap-start overflow-clip"
              >
                <div className="flex items-center gap-2.5 justify-start">
                  <div className="w-fit h-fit overflow-hidden shrink-0">
                    <Image
                      src={about.path}
                      alt={about.name}
                      width={400}
                      height={300}
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            ))}
          </HorizontalCard>
          <HorizontalCard title={"WHAT PEOPLE SAY ABOUT ME"}>
            {HomeInfo.sayAboutMe.map((about, index) => (
              <div
                key={index}
                className="rounded-lg w-[310px] border border-blue-110 bg-white gap-2.5 flex flex-col p-3 items-start flex-shrink-0 snap-start"
              >
                <div className="flex items-center gap-2.5 justify-start">
                  <div className="rounded-full size-8 overflow-hidden shrink-0">
                    <Image
                      src={about.path}
                      alt={about.name}
                      width={32}
                      height={32}
                      quality={100}
                    />
                  </div>
                  <div>
                    <div
                      className="font-medium"
                      style={{ maxWidth: "20ch", wordWrap: "break-word" }}
                    >
                      {about.name}
                    </div>
                    <div className="text-xs text-gray-140">
                      {about.position}, {about.company}
                    </div>
                  </div>
                </div>

                <p className="text-xs font-light text-gray-140">
                  {about.comments}
                </p>
              </div>
            ))}
          </HorizontalCard>
          <Contacts title={"LET'S CONNECT WITH ME!"} />
        </div>
      </motion.div>
    </div>
  );
}
