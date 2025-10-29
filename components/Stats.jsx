"use client";

import CountUp from "react-countup";

const stats = [
  { num: 2, text: "Years of Experience" },
  { num: 17, text: "Projects Completed" },
  { num: 8, text: "Technologies Mastered" },
  { num: 700, text: "Code Commits" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <div className="text-4xl xl:text-6xl font-extrabold">
                <CountUp end={item.num} duration={5} delay={2} />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
