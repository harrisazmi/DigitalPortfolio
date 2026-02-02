"use client";
import { Button } from "@/components/Button";
import { ExpChemiz } from "@/data/ExpInfo";
import { ArrowLeftIcon } from "@/Icons";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import PreviousExperience from "@/components/PreviousExperience";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ChemizPage() {
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
              <h1 className="font-bold text-5xl pb-1">{ExpChemiz.name}</h1>
              <p>{ExpChemiz.year}</p>
            </div>
            <div>
              <h2 className="font-bold text-4xl pb-4">Overview</h2>
              <p>{ExpChemiz.overview}</p>
            </div>
            <div>
              <h2 className="font-bold text-4xl pb-4">My Role</h2>
              <p>{ExpChemiz.myRole}</p>
            </div>
            <div>
              <h2 className="font-bold text-4xl pb-6">
                Skills Acquired and Contributions
              </h2>
              <div className="space-y-4">
                {ExpChemiz.keyAchievementsAndContributions.map(
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
              <div className="space-y-4">
                {ExpChemiz.impact.map((impact, index) => (
                  <div key={index} className="">
                    <h3 className="font-semibold text-xl">{impact.heading}</h3>
                    <ul>
                      {impact.details.map((detail, detailIndex) => (
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
                ))}
              </div>
            </div>

            <Link
              href="https://chemiz.my/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="px-8 py-2 text-white">Company Link</Button>
            </Link>
          </div>
        </div>
      </motion.div>
      <PreviousExperience />
    </div>
  );
}
