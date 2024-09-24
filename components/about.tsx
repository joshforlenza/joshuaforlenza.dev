"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I first discovered my passion for programming during an introductory
        course at
        <span className="font-medium"> New York University</span>, where I
        earned a
        <span className="font-medium">
          {" "}
          Bachelor of Arts in Computer Science
        </span>
        . The
        <span className="italic"> problem-solving aspect</span> of coding
        captivated me, and I became interested in Web Development through
        courses like
        <span className="font-medium">
          {" "}
          Applied Internet Technology, Agile Software Development, and Software
          Engineering
        </span>
        . My core stack includes{" "}
        <span className="font-medium">
          {" "}
          React, Next.js, Node.js, and MongoDB
        </span>
        , and I am also proficient with
        <span className="font-medium"> TypeScript, Prisma, and PostgreSQL</span>
        . I'm always eager to learn new technologies and continuously improve my
        skills. I am currently working as a{" "}
        <span className="font-medium">Software Engineer at UKG.</span>
      </p>
      <p className="mb-3">
        <span className="italic">When I'm not coding</span>, I enjoy{" "}
        <span className="font-medium"> making music</span> and
        <span className="font-medium"> watching films</span>. Currently, I'm
        taking classical guitar lessons and learning Max MSP, a visual
        programming language for music and multimedia.
      </p>
    </motion.section>
  );
}
