// /lib/resume-data.js (or any path you prefer)

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

// About data
export const about = {
  title: "About Me",
  description: "A passionate software engineer shaping the world through Web3.",
  info: [
    { fieldName: "Name", fieldValue: "Cyprian Ocharo" },
    { fieldName: "Phone", fieldValue: "(+254) 788 523 896" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "Reddit", fieldValue: "_ocharo" },
    { fieldName: "Nationality", fieldValue: "Kenyan" },
    { fieldName: "Email", fieldValue: "ocharo.dev@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Swahili" },
  ],
};

// Experience data
export const experience = {
  title: "My Experience",
  description: "Software engineering experience across multiple roles and domains.",
  items: [
    { company: "Tech254", position: "SEO Manager", duration: "3 months" },
    { company: "KenPro Kenya", position: "Back-End Developer (Intern)", duration: "3 months" },
    { company: "E-commerce Startup", position: "Freelance Web Developer", duration: "4 months" },
    { company: "Clemo Arts", position: "Graphic Designer", duration: "2022 - 2023" },
    { company: "Digital XP", position: "Freelance UI/UX Designer", duration: "5 months" },
    { company: "Stealth Devs", position: "Freelance Web Developer", duration: "7 months" },
  ],
};

// Education data
export const education = {
  title: "My Education",
  description: "Formal and professional training in software engineering and design.",
  items: [
    { institution: "Coursera / Udemy", degree: "Full Stack Web Development Certification", duration: "2023 - 2025" },
    { institution: "Cisco Academy", degree: "Front-End Track", duration: "2023 - 2024" },
    { institution: "IBM", degree: "Search Engine Optimization", duration: "2024" },
    { institution: "Canva Design School", degree: "Graphic Design Certification", duration: "2025" },
    { institution: "Designlab", degree: "UI/UX Design Certification", duration: "2025" },
    { institution: "Multimedia University of Kenya", degree: "BSc in Information Technology", duration: "2023 - Present" },
  ],
};

// Skills data
// **Optimization:** Store the component reference (e.g., FaHtml5) instead of the
// JSX element (e.g., <FaHtml5 />). This is more flexible.
export const skills = {
  title: "My Skills",
  description: "These are the core skills I possess in software engineering.",
  skillList: [
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3, name: "CSS3" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaReact, name: "React.js" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaFigma, name: "Figma" },
  ],
};