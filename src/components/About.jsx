import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    year: "2024 - present",
    desc: "Studied core computer science subjects including web development, data structures, and programming."
  },
  {
    title: "Higher Secondary (12th)",
    year: "2023 - 2024",
    desc: "Completed higher secondary education with Commerce."
  },
  {
    title: "Secondary School (10th)",
    year: "Completed 2022",
    desc: "Completed basic education and developed interest in technology and programming."
  }
];

const About = () => {
  return (
    <div id="about">
    <section  className="min-h-screen px-6 md:px-20 py-24 text-white">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        About <span className="text-cyan-400">Me</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >

          <p className="text-gray-300 leading-relaxed">
            Hello! I'm <span className="text-cyan-400 font-semibold">Jaspreet Singh</span>,
            a passionate Full Stack Developer who enjoys building modern and
            responsive web applications using React, JavaScript and Tailwind CSS.
          </p>

          <p className="text-gray-400">
            I love creating clean UI, smooth animations and user-friendly
            applications. I am always learning new technologies to improve
            my development skills.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            Download Resume
          </motion.button>

        </motion.div>

        {/* Education Section */}
        <div className="space-y-6">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="border border-white/20 rounded-xl p-6 hover:border-cyan-400 transition"
            >

              <h3 className="text-xl font-semibold text-cyan-400">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mb-2">
                {item.year}
              </p>

              <p className="text-gray-300">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
    </div>
  );
};

export default About;