"use client";
import Image from "next/image";
import { ToolsImages } from "@/data/ProjectsData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TabTools() {
  return (
    <div>
      {categories.map((category) => (
        <ToolsSection
          key={category.type}
          type={category.type}
          label={category.label}
        />
      ))}
    </div>
  );
}

const categories = [
  { type: "languages", label: "Languages" },
  { type: "fullstack", label: "FullStack" },
  { type: "frontend", label: "Frontend" },
  { type: "backend", label: "Backend" },
  { type: "database", label: "Database" },
  { type: "devops", label: "Dev Ops" },
  { type: "management", label: "Management" },
  { type: "others", label: "Others" },
];

interface ToolSectionProps {
  type: string;
  label: string;
}

function ToolsSection({ type, label }: ToolSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

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
