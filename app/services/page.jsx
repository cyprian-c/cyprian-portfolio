"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Full-stack development using modern frameworks and responsive design.",
    href: "#web-development",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Designing intuitive user experiences and interfaces that drive engagement.",
    href: "#ui-ux-design",
  },
  {
    num: "03",
    title: "Graphic Design",
    description: "Visual storytelling through branding, illustration, and digital assets.",
    href: "#graphic-design",
  },
  {
    num: "04",
    title: "SEO",
    description: "Improving visibility through structured content, analytics, and optimization.",
    href: "#seo",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {services.map((service) => (
            <div
              key={service.num}
              className="flex flex-col justify-center gap-6 group"
            >
              <div className="flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              <p className="text-white/60">{service.description}</p>

              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
