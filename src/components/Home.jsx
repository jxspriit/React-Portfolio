import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div id="home">
    <section className="min-h-screen flex items-center px-6 md:px-20 pt-24 text-white">

      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >

          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-cyan-400">Jaspreet </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300">
            I'm a{" "}
            <span className="text-cyan-400 font-semibold">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "React Developer",
                  "Frontend Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-gray-400 max-w-lg">
            I build modern and responsive web applications using React,
            Tailwind CSS and JavaScript. I love creating beautiful UI and
            smooth user experiences.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            <Link to="projects" smooth={true} duration={400} activeClass="active" spy={true}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              View Projects
            </motion.button>
            </Link>


               <Link to="contact" smooth={true} duration={400} activeClass="active" spy={true}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className=" cursor-pointer px-6 py-3 border border-white/30 rounded-lg hover:border-cyan-400 transition"
            >
             <span>Contact me</span>
              
            </motion.button>
            </Link>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <motion.img
            src="https://img.pikbest.com/png-images/20240617/lion-logo-vector-illustration_10621866.png!w700wp"
            alt="developer"
            className="w-[280px] md:w-[420px]"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

        </motion.div>

      </div>

    </section>
    </div>
  );
};

export default Home;