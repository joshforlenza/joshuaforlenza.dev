import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { RiRocketLine } from "react-icons/ri";

import concertsIO from "@/public/Concerts-io.png";
import voiceMemoRecorder from "@/public/Voice-memo.png";
import MusicIsMyPersonality from "@/public/MusicIsMyPersonality.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated New York University",
    location: "New York, NY",
    description:
      "I graduated magna cum laude with a BA in Computer Science from NYU's College of Arts and Sciences ",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
  {
    title: "Software Developer Intern",
    location: "Remote",
    description:
      "I worked as a Software Developer intern at GBCS Group for 3 months. During my time there, I was promoted to team lead and led the development of GBCS University, a full-stack Next.js web application for company onboarding.",
    icon: React.createElement(RiRocketLine),
    date: "April 2024 - June 2024",
  },
  {
    title: "Associate Software Engineer",
    location: "Branchburg, NJ",
    description: "I'm an incoming Software Engineer at UKG.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Voice Memo Recorder",
    description:
      "This was a team project for my Software Engineering course. We developed a web app that allows users to record voice recordings that are transcribed by an ML client.",
    tags: ["Flask", "Python", "MongoDB"],
    imageUrl: voiceMemoRecorder,
  },
  {
    title: "Concerts.io",
    description:
      "I worked as a developer on this project for my Agile Software Development course. My team and I created a full-stack web app that allows users to find local concerts for their favorite artists.",
    tags: ["React", "Express", "MongoDB"],
    imageUrl: concertsIO,
  },
  {
    title: "Music Is My Personality",
    description:
      "I developed an Express web app that analyzes Spotify users’ music libraries to generate personalized summaries oftheir music taste",
    tags: ["Node.js", "Express", "MongoDB"],
    imageUrl: MusicIsMyPersonality,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Framer Motion",
] as const;
