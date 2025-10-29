"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// **Optimization:** Import data from your new constants file
import { about, education, experience, skills } from "@/lib/resume-data"; // <-- Adjust this path

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // **Optimization:** `transition` prop moved to the root for clarity
      transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience Tab */}
            <TabsContent value="experience" className="w-full">
              <ScrollArea className="h-[60vh] pr-4">
                <h2 className="text-2xl font-semibold mb-4">{experience.title}</h2>
                <p className="text-gray-500 mb-6">{experience.description}</p>
                <ul className="space-y-4">
                  {experience.items.map((item) => (
                    // **Optimization:** Use a unique, stable string for the key
                    <li key={item.position} className="border-b border-gray-700 pb-2">
                      <p className="font-medium">{item.position}</p>
                      <p className="text-sm text-gray-400">{item.company}</p>
                      <p className="text-xs text-gray-500">{item.duration}</p>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="w-full">
              <ScrollArea className="h-[60vh] pr-4">
                <h2 className="text-2xl font-semibold mb-4">{education.title}</h2>
                <p className="text-gray-500 mb-6">{education.description}</p>
                <ul className="space-y-4">
                  {education.items.map((item) => (
                    // **Optimization:** Use a unique, stable string for the key
                    <li key={item.degree} className="border-b border-gray-700 pb-2">
                      <p className="font-medium">{item.degree}</p>
                      <p className="text-sm text-gray-400">{item.institution}</p>
                      <p className="text-xs text-gray-500">{item.duration}</p>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full">
              <ScrollArea className="h-[60vh] pr-4">
                <h2 className="text-2xl font-semibold mb-4">{skills.title}</h2>
                <p className="text-gray-500 mb-6">{skills.description}</p>
                
                {/* **Debug Fix:** Implement the Tooltip components */}
                <TooltipProvider>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.skillList.map((skill) => {
                      // **Optimization:** Create icon component from reference
                      const IconComponent = skill.icon;
                      return (
                        <Tooltip key={skill.name} delayDuration={100}>
                          <TooltipTrigger asChild>
                            <div className="flex flex-col items-center justify-center text-center p-4 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer">
                              <IconComponent className="text-4xl mb-2 text-primary" />
                              <p className="text-sm capitalize">{skill.name}</p>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                </TooltipProvider>
              </ScrollArea>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about" className="w-full">
              <ScrollArea className="h-[60vh] pr-4">
                <h2 className="text-2xl font-semibold mb-4">{about.title}</h2>
                <p className="text-gray-500 mb-6">{about.description}</p>
                
                {/* **Optimization:** Use semantic <dl> (description list) */}
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {about.info.map((item) => (
                    // **Optimization:** Use a unique, stable string for the key
                    <div key={item.fieldName} className="border-b border-gray-700 pb-2">
                      <dt className="font-medium text-gray-300">{item.fieldName}</dt>
                      <dd className="text-sm text-gray-400">{item.fieldValue}</dd>
                    </div>
                  ))}
                </dl>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;