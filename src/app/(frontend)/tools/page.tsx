"use client";
import Image from "next/image";
import { ToolsImages } from "@/data/ProjectsData";
import { ToolCategories } from "@/data/ToolCategories";
import { cardVariants } from "@/lib/motionVariants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TabTools() {
  return (
    <div>
      {ToolCategories.map((category) => (
        <ToolsSection
          key={category.type}
          type={category.type}
          label={category.label}
        />
      ))}
    </div>
  );
}

interface ToolSectionProps {
  type: string;
  label: string;
}

function ToolsSection({ type, label }: ToolSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredTools = ToolsImages.filter((tool) => tool.type === type);

  return (
    <div ref={ref}>
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold pb-8 text-center lg:text-left">
          {label}
        </h1>
        <div className="grid grid-cols-[300px] sm:grid-cols-[300px_300px]  gap-4 pb-8">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="bg-gray-110 rounded-lg flex items-center"
            >
              <div className="p-4">
                <Image
                  src={tool.path}
                  alt={tool.name}
                  width={60}
                  height={60}
                  quality={100}
                  className="rounded-lg"
                />
              </div>
              {tool.name}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
