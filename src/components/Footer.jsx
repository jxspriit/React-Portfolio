import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 md:px-20 py-10 text-white border-t border-white/10">

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl font-semibold">
            Jaspreet <span className="text-cyan-400">Singh</span>
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Full Stack Developer
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-6 text-xl"
        >

          <motion.a
            href="https://github.com/jxspriit"
            whileHover={{ scale: 1.05 }}
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/jaspreet-singh-902831305/?skipRedirect=true"
            whileHover={{ scale: 1.05 }}
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/anshuu_.x1?igsh=MW80ZDB2Z2xpMXcyYw=="
            whileHover={{ scale: 1.05 }}
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaInstagram />
          </motion.a>

        </motion.div>

      </div>

      {/* Bottom Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-gray-500 text-sm mt-8"
      >
        © {new Date().getFullYear()} Jaspreet Singh. All Rights Reserved.
      </motion.div>

    </footer>
  );
};

export default Footer;