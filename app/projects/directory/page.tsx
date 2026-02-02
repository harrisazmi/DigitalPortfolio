"use client";
import { Button } from "@/components/Button";
import { directoryPortfolio } from "@/data/ProjectInfo";
import { ArrowLeftIcon, BroadcastIcon, GitHubIcon, MailIcon } from "@/Icons";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import TechStack from "@/components/TechStack";

export default function Directory() {
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
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div ref={ref} className="max-w-3xl mx-auto p-6 lg:pt-0 space-y-6">
        <Link href="/projects">
          <Button className="flex gap-4 bg-white border border-gray-110 hover:cursor-pointer">
            <ArrowLeftIcon />
            All Projects
          </Button>
        </Link>

        <div className="relative w-full aspect-[325/202] mt-4">
          <Image
            src={directoryPortfolio.projectImage}
            alt={directoryPortfolio.projectName}
            width={3000}
            height={2000}
            quality={100}
          />
        </div>

        <h1 className="font-bold text-5xl">{directoryPortfolio.projectName}</h1>
        <p className="text-lg text-gray-140">{directoryPortfolio.overview}</p>
        <div>
          <p className="font-bold text-orange-150">
            Please note that the project has not yet launched. Live access and
            source code will remain unavailable until the official release.
          </p>
          <div className="flex gap-4 pt-6">
            <Link
              href={directoryPortfolio.livehref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                disabled
                className="flex gap-2 bg-white border border-gray-110 hover:text-gray-110 text-gray-130 cursor-not-allowed"
              >
                <BroadcastIcon />
                <div>View Live</div>
              </Button>
            </Link>

            <Link
              href={directoryPortfolio.githubhref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex gap-2 bg-white border border-gray-110 hover:cursor-pointer hover:bg-gray-110">
                <GitHubIcon />
                <div>View Code - GitHub</div>
              </Button>
            </Link>
          </div>
        </div>

        <TechStack
          title="Tech Stack (FE and DevOps)"
          techStackTool={directoryPortfolio.techstack.main}
        ></TechStack>

        <h2 className="font-semibold text-2xl pt-6">Frontend Contributions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {directoryPortfolio.sections.FrontendDevelopment.items.map(
            (item, index) => (
              <div
                key={index}
                className="flex  flex-col gap-4 bg-gray-110  rounded-lg p-4"
              >
                <div>
                  <h3 className="text-xl font-semibold pb-4">{item.heading}</h3>
                  {item.details.map((detail, i) => (
                    <li
                      key={i}
                      className="pb-2 leading-tight text-gray-140 text-base"
                    >
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <>{children}</>,
                          strong: ({ children }) => (
                            <strong className="font-bold text-gray-140">
                              {children}
                            </strong>
                          ),
                        }}
                      >
                        {detail}
                      </ReactMarkdown>
                    </li>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        <h2 className="font-semibold text-2xl pt-6">Devops Contributions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {directoryPortfolio.sections.DevopsDevelopment.items.map(
            (item, index) => (
              <div
                key={index}
                className="flex  flex-col gap-4 bg-gray-110  rounded-lg p-4"
              >
                <div>
                  <h3 className="text-xl font-semibold pb-4">{item.heading}</h3>
                  {item.details.map((detail, i) => (
                    <li
                      key={i}
                      className="pb-2 leading-tight text-gray-140 text-base"
                    >
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <>{children}</>,
                          strong: ({ children }) => (
                            <strong className="font-bold text-gray-140">
                              {children}
                            </strong>
                          ),
                        }}
                      >
                        {detail}
                      </ReactMarkdown>
                    </li>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}
