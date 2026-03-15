import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "Tailwind", level: 85 },
  { name: "React", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js", level: 75 },
];

const SkillBar = () => {
  return (
    <div id="skill">
    <section className="min-h-screen px-6 md:px-20 py-24 text-white">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-20"
      >
        My <span className="text-cyan-400">Skills</span>
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 place-items-center">

        {skills.map((skill, index) => {

          const radius = 60;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (skill.level / 100) * circumference;

          return (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >

              <div className="relative w-[150px] h-[150px] flex items-center justify-center">

                <svg className="w-full h-full transform -rotate-90">

                  {/* Background Circle */}
                  <circle
                    cx="75"
                    cy="75"
                    r={radius}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="10"
                    fill="transparent"
                  />

                  {/* Animated Circle */}
                  <motion.circle
                    cx="75"
                    cy="75"
                    r={radius}
                    stroke="#22d3ee"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5 }}
                    strokeLinecap="round"
                  />

                </svg>

                {/* Percentage */}
                <span className="absolute text-lg font-semibold">
                  {skill.level}%
                </span>

              </div>

              {/* Skill Name */}
              <p className="mt-4 text-lg text-gray-300">
                {skill.name}
              </p>

            </motion.div>
          );

        })}

      </div>

    </section>
    </div>
  );
};

export default SkillBar;