import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact">
    <section className="min-h-screen px-6 md:px-20 py-24 text-white">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Contact <span className="text-cyan-400">Me</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >

          <h3 className="text-2xl font-semibold">
            Let's Work Together
          </h3>

          <p className="text-gray-400">
            If you have a project idea or want to collaborate,
            feel free to send me a message. I'm always open
            to discussing new opportunities.
          </p>

          <div className="space-y-3 text-gray-300">
            <p>📧 Email: js2510870@gmail.com</p>
            <p>📱 Phone: +91 98123 45911</p>
            <p>📍 Location: India</p>
          </div>

        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
          action="https://api.web3forms.com/submit" method="POST"
        >

          <input type="hidden" name="access_key" value="6e374719-57ac-4932-8600-f0eb00a432e7" />
          <input
            type="text"
            name="username"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-white/20 rounded-lg bg-transparent outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-white/20 rounded-lg bg-transparent outline-none focus:border-cyan-400"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 border border-white/20 rounded-lg bg-transparent outline-none focus:border-cyan-400"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            type="submit"
          >
            Send Message
          </motion.button>

        </motion.form>

      </div>

    </section>
    </div>
  );
};

export default Contact;