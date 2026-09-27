"use client";

import { easeIn, motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full-Stack System",
    title: "SkolarTrak SIS & E-Library",
    description:
      "A production-grade cloud Student Information System (SIS) and digital revision E-Library built specifically for Kenyan CBE primary schools and JSS. Features 4-rubric CBC academic grading, dynamic student fee ledgers with real-time M-Pesa STK Push / IntaSend integration, Advanta Africa Bulk SMS dispatch, staged secretary edit approvals, and automated PDF report cards.",
    stack: [
      { name: "Laravel 11" },
      { name: "PHP 8.4" },
      { name: "MySQL" },
      { name: "Tailwind CSS" },
      { name: "Alpine.js" },
      { name: "M-Pesa API" },
    ],
    image: "/assets/work/thumbnail1.png",
    live: "https://skolartrak.com",
    github: "https://github.com/cyprian-c",
  },
  {
    num: "02",
    category: "Full-Stack & Advisory",
    title: "DreamRoots Kenya Consultancy",
    description:
      "Strategic management, HR advisory, ICT solutions, and educational research consultancy platform serving institutional clients across East Africa. Developed with ultra-responsive UI, institutional service discovery, structured client inquiry workflows, and high-performance modern web standards.",
    stack: [
      { name: "React 19" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Lucide" },
    ],
    image: "/assets/work/thumbnail2.png",
    live: "https://dreamrootskenya.com",
    mirror: "https://dreamroots.vercel.app",
    github: "https://github.com/cyprian-c",
  },
  {
    num: "03",
    category: "Full-Stack Web App",
    title: "SafariTrak — Transit & Journey Safety",
    description:
      "Real-time journey safety and tracking platform designed for East African travel. Features interactive transit tracking, trusted emergency contact notifications, group travel management, and automated safety check-in mechanisms.",
    stack: [
      { name: "PHP" },
      { name: "JavaScript" },
      { name: "MySQL" },
      { name: "Leaflet Maps" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/thumbnail3.png",
    live: "",
    github: "https://github.com/cyprian-c",
  },
  {
    num: "04",
    category: "Front-End & UI/UX",
    title: "Modern Developer Portfolio & Presence",
    description:
      "Interactive personal portfolio engineered with Next.js 15 App Router, React 19, Framer Motion animations, Radix UI accessible primitives, and AI-optimized metadata architecture (Schema.org JSON-LD, llms.txt, and sitemap generation).",
    stack: [
      { name: "Next.js 15" },
      { name: "React 19" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Radix UI" },
    ],
    image: "/assets/work/thumbnail5.png",
    live: "https://cyprian-portfolio.vercel.app",
    github: "https://github.com/cyprian-c/cyprian-portfolio",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 0.5,
          ease: easeIn,
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-8 xl:py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Details column */}
          <div className="w-full xl:w-[50%] flex flex-col justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="text-7xl xl:text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </span>
                <span className="text-accent text-sm uppercase tracking-widest bg-[#27272c] px-3 py-1 rounded-full border border-accent/20">
                  {project.category}
                </span>
              </div>

              <h2 className="text-[28px] md:text-[38px] font-bold leading-tight text-white transition-all duration-300">
                {project.title}
              </h2>

              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack tags */}
              <ul className="flex flex-wrap gap-2 pt-2">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-xs md:text-sm text-accent bg-accent/10 px-2.5 py-1 rounded-md font-mono"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-white/20 my-2"></div>

              {/* Action buttons */}
              <div className="flex items-center gap-4">
                {project.live ? (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live site for ${project.title}`}
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/20 transition-all duration-300">
                          <BsArrowUpRight className="text-white text-2xl group-hover:text-accent transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Visit Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center opacity-40 cursor-not-allowed">
                        <BsArrowUpRight className="text-white text-2xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Internal / Private Deployment</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}

                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/20 transition-all duration-300">
                          <BsGithub className="text-white text-2xl group-hover:text-accent transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Slider column */}
          <div className="w-full xl:w-[50%] mb-8 xl:mb-0">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[480px] mb-6"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[360px] md:h-[420px] relative group flex justify-center items-center bg-[#27272c]/40 rounded-xl overflow-hidden border border-white/10">
                      <div className="absolute top-0 w-full h-full bg-black/20 z-10"></div>

                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                          alt={`Screenshot preview of ${item.title}`}
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-4 z-20 w-full justify-between xl:w-max xl:justify-none px-4 xl:px-0"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-md"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
