"use client";
import { Button } from "@/components/Button";
import { ExpBateriku } from "@/data/ExpInfo";
import { ArrowLeftIcon } from "@/Icons";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import PreviousExperience from "@/components/PreviousExperience";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function BaterikuPage() {
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
              <h1 className="font-bold text-5xl pb-1">{ExpBateriku.name}</h1>
              <p>{ExpBateriku.year}</p>
            </div>
            <div>
              <h2 className="font-bold text-4xl pb-4">Overview</h2>
              <p>{ExpBateriku.overview}</p>
            </div>
            <div>
              <h2 className="font-bold text-4xl pb-4">My Role</h2>
              <p>{ExpBateriku.myRole}</p>
            </div>
            <div>
              <h2 className="font-bold text-4xl pb-6">
                Skills Acquired and Contributions
              </h2>
              <div className="space-y-4">
                {ExpBateriku.keyAchievementsAndContributions.map(
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
              <p>{ExpBateriku.impact}</p>
            </div>

            <Link
              href="https://www.bateriku.com/"
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
