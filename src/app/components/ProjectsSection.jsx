"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "To Do List App",
    description: "Real Time App Designed to Manage Task For Housechores",
    image: "/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harrisazmi/Project1ToDoListFE",
    previewUrl: "https://project1frontendcf.harrisviewcodes.uk/",
  },
  {
    id: 2,
    title: "Expense and Receipt Tracker",
    description: "Managing Expenses and Receipt Especially For LHDN",
    image: "/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Web Scraper App - NumazuScraper ",
    description:
      "Scraping Data from Japan Meteorological Agency for Warning on High Tide",
    image: "/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harrisazmi/Project3NumazuScraper",
    previewUrl: "https://project3frontendcf.harrisviewcodes.uk/",
  },
  {
    id: 4,
    title: "Groceries App - TheGroceriesUNeed",
    description: "Groceries for The People ",
    image: "/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Login and Registration Template",
    description: "Authentication and CRUD Operations using next.js",
    image: "/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Food Ordering",
    description:
      "Crafted to optimize food ordering workflows and enhancing operational efficiency for restaurants.",
    image: "/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Online Portfolio",
    description:
      "Crafted a personal portfolio website to showcase skills and achievements.",
    image: "/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harrisazmi/OnlinePortfolio",
    previewUrl: "https://portfoliocf.harrisviewcodes.uk/",
  },
  {
    id: 8,
    title: "Server Engineering",
    description: "On Premise Server Building and Provisioning",
    image: "/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Server Engineering",
    description:
      "On Premise Backend App Server, Database Server and Client Server Provisioning",
    image: "/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "System Administrator",
    description:
      "Manage the application servers, database servers, and client servers",
    image: "/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Dev Ops - Load Balancing",
    description:
      "Load Balancing with Nginx or Kemp or Cloudflare: A Comprehensive Guide",
    image: "/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Network Infra and Security",
    description: "Port Forwarding vs Reverse Proxy vs Tunneling",
    image: "/projects/12.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 13,
    title: "Dev Ops",
    description: "Proxy Management and DNS",
    image: "/projects/13.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 14,
    title: "Dev OPs - Terraform",
    description:
      "Automate deployment, scaling, and management of applications and services.",
    image: "/projects/14.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 15,
    title: "Dev Ops - Prometheus and Grafana",
    description:
      "Prometheus is Open-source tool for real-time monitoring and data collection, Grafana for Visualization and analytics platform, integrates seamlessly with Prometheus for data-driven insights.",
    image: "/projects/15.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const paragraphStyle = {
    textAlign: "justify",
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div></div>
      <h2 className="text-center text-4xl font-bold text-white mt-32 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul
        ref={ref}
        style={paragraphStyle}
        className="grid md:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
