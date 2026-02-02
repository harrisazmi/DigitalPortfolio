"use client";
import { Button } from "@/components/Button";
import { ExpGovTech, ExpInfo } from "@/data/ExpInfo";
import { ArrowLeftIcon } from "@/Icons";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import PreviousExperience from "@/components/PreviousExperience";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { clx } from "@/lib/utils";

export default function GovtechPage() {
  const expRef = useRef(null);
  const isExpRefInView = useInView(expRef, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="pb-4">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isExpRefInView ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div ref={expRef}>
          <Link href="/experiences">
            <Button className="flex gap-4 bg-white border border-gray-110 hover:cursor-pointer">
              <ArrowLeftIcon />
              All Experiences
            </Button>
          </Link>
          <div className="py-8 flex flex-col gap-8">
            <div>
              <h1 className="font-bold text-5xl pb-1">{ExpGovTech.name}</h1>
              <p>{ExpGovTech.year}</p>
            </div>
            <div>
              <h2 className="font-bold text-4xl pb-4">Overview</h2>
              <p>{ExpGovTech.overview}</p>
            </div>
            <div className="flex flex-col gap-[14px]">
              <h2 className="font-bold text-4xl pb-4">Project Collaborated</h2>
              {ExpInfo.map((exp, index) =>
                exp.projects?.length ? (
                  <div
                    className="flex flex-wrap gap-2 items-center justify-center lg:justify-start"
                    key={index}
                  >
                    {exp.projects.map((project, idx) => (
                      <Link href={project.href} key={idx}>
                        <div
                          className={clx(
                            "w-[150px] h-[70px] rounded-xl flex items-center justify-center gap-3 px-6",
                            "border border-blue-110 hover:bg-orange-101 hover:border-orange-140"
                          )}
                        >
                          <div>{project.icon}</div>
                          <div className="font-semibold">{project.name}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : null
              )}
            </div>
            <div>
              <h2 className="font-bold text-4xl pb-4">My Role</h2>
              <p>{ExpGovTech.myRole}</p>
            </div>
            <div>
              <h2 className="font-bold text-4xl pb-6">
                Skills Acquired and Contributions
              </h2>
              <div className="space-y-4">
                {ExpGovTech.keyAchievementsAndContributions.map(
                  (achievement, index) => (
                    <div key={index} className="">
                      <h3 className="font-semibold text-xl">
                        {achievement.heading}
                      </h3>
                      <ul>
                        {achievement.details.map((detail, detailIndex) => (
                          <div key={detailIndex}>
                            <ReactMarkdown
                              components={{
                                p: ({ children }) => <>{children}</>,
                                strong: ({ children }) => (
                                  <strong className="font-bold">
                                    {children}
                                  </strong>
                                ),
                              }}
                            >
                              {detail}
                            </ReactMarkdown>
                          </div>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>

            <div>
              <h2 className="font-bold text-4xl pb-4">Impact</h2>
              <p>{ExpGovTech.impact}</p>
            </div>
            <div className="gap-4 flex flex-col">
              <p className="text-orange-150 font-bold">
                Please note that the website has not yet launched. Live access
                will remain unavailable until the official release.
              </p>
              <Link
                href="https://www.tech.gov.my/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  disabled
                  className="flex gap-2 px-8 py-2 bg-white border border-gray-110  hover:text-gray-110 text-gray-130  cursor-not-allowed"
                >
                  <div>Company Link</div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <div>
        <PreviousExperience />
      </div>
    </div>
  );
}
