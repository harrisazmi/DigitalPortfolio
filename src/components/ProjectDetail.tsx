"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/Button";
import TechStack, { TechTool } from "@/components/TechStack";
import { ArrowLeftIcon, BroadcastIcon, GitHubIcon } from "@/Icons";
import { cardVariants } from "@/lib/motionVariants";
import { clx } from "@/lib/utils";

interface SectionItem {
  heading: string;
  details: string[];
}

interface Section {
  title: string;
  items: SectionItem[];
}

interface ProjectSections {
  [key: string]: Section;
}

type ProjectLink = {
  label: string;
  href?: string;
  iconType?: "live" | "github";
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
};

interface ProjectLinkGroup {
  title?: string;
  className?: string;
  links: ProjectLink[];
}

interface ProjectDetailProps {
  projectImage: string;
  projectName: string;
  overview: string;
  linkGroups?: ProjectLinkGroup[];
  techStacks?: Array<{ title: string; tools: TechTool[] }>;
  sections?: ProjectSections;
  issues?: string;
  solutionsHeader?: string;
  solutionsList?: string[];
  solutionsConclusion?: string;
  infoNotes?: string[];
  heroBorder?: boolean;
  children?: ReactNode;
}

export function ProjectDetail({
  projectImage,
  projectName,
  overview,
  linkGroups,
  techStacks,
  sections,
  issues,
  solutionsHeader,
  solutionsList,
  solutionsConclusion,
  infoNotes,
  heroBorder = true,
  children,
}: ProjectDetailProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderSections = (sectionData?: ProjectSections) => {
    if (!sectionData) return null;

    return Object.values(sectionData).map((section) => (
      <div key={section.title}>
        <h2 className="font-semibold text-2xl pt-6">{section.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {section.items.map((item, index) => (
            <div
              key={`${section.title}-${index}`}
              className="flex flex-col gap-4 bg-gray-110 rounded-lg p-4"
            >
              <div>
                <h3 className="text-xl font-semibold pb-4">{item.heading}</h3>
                {item.details.map((detail, i) => (
                  <li
                    key={`${section.title}-${index}-${i}`}
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
          ))}
        </div>
      </div>
    ));
  };

  const renderLinkIcon = (link: ProjectLink) => {
    if (link.icon) return link.icon;

    switch (link.iconType) {
      case "github":
        return <GitHubIcon />;
      case "live":
      default:
        return <BroadcastIcon />;
    }
  };

  const renderLinkButton = (link: ProjectLink, key: string) => {
    const button = (
      <Button
        disabled={link.disabled || !link.href}
        className={clx(
          "flex gap-2 bg-white border border-gray-110 hover:cursor-pointer hover:bg-gray-110",
          (link.disabled || !link.href) &&
            "hover:text-gray-110 text-gray-130 cursor-not-allowed",
          link.className,
        )}
      >
        {renderLinkIcon(link)}
        <div>{link.label}</div>
      </Button>
    );

    if (link.disabled || !link.href) {
      return (
        <div key={key} className="shrink-0">
          {button}
        </div>
      );
    }

    return (
      <Link
        key={key}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {button}
      </Link>
    );
  };

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

        <div
          className={clx(
            "relative w-full mt-4",
            heroBorder
              ? "aspect-325/202 border-2 border-gray-110 rounded-3xl overflow-clip"
              : "aspect-325/202",
          )}
        >
          <Image
            src={projectImage}
            alt={projectName}
            width={3000}
            height={2000}
            quality={100}
          />
        </div>

        <h1 className="font-bold text-5xl">{projectName}</h1>
        <p className="text-lg text-gray-140">{overview}</p>

        {infoNotes?.map((note, index) => (
          <p key={`info-note-${index}`} className="font-bold text-orange-150">
            {note}
          </p>
        ))}

        {linkGroups?.map((group, groupIndex) => (
          <div key={`group-${groupIndex}`} className="w-full">
            {group.title && (
              <h2 className="font-bold text-2xl pt-2 pb-2">{group.title}</h2>
            )}
            <div
              className={clx(
                "flex flex-wrap gap-4 py-6 items-center",
                group.className,
              )}
            >
              {group.links.map((link, linkIndex) =>
                renderLinkButton(link, `group-${groupIndex}-link-${linkIndex}`),
              )}
            </div>
          </div>
        ))}

        {issues && (
          <section>
            <h2 className="font-bold text-2xl">Issues</h2>
            <p className="text-lg text-gray-140 pt-2">{issues}</p>
          </section>
        )}

        {solutionsHeader && (
          <section>
            <h2 className="font-bold text-2xl">Solutions</h2>
            <p className="text-lg text-gray-140 py-2">{solutionsHeader}</p>
            {solutionsList?.map((solution, index) => (
              <li key={`solution-${index}`} className="text-gray-140 text-lg">
                {solution}
              </li>
            ))}
            {solutionsConclusion && (
              <p className="text-lg text-gray-140 pt-2">
                {solutionsConclusion}
              </p>
            )}
          </section>
        )}

        {techStacks?.map((stack) => (
          <TechStack
            key={stack.title}
            title={stack.title}
            techStackTool={stack.tools}
          />
        ))}

        {renderSections(sections)}

        {children}
      </div>
    </motion.div>
  );
}
