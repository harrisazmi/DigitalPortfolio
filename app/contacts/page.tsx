"use client";
import Contact from "@/components/Contact";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div ref={ref} className="pb-8">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold pb-7">
          Let’s Connect and Collaborate!
        </h1>
        <Contact />
      </motion.div>
    </div>
  );
}
