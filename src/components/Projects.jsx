// import React from "react";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Live Chat Application",
//     description:
//       "A real-time chat application built with React and Socket.io allowing users to send instant messages.",
//     tech: "React, Node.js, Socket.io",
//   },
//   {
//     title: "Employee Management System",
//     description:
//       "A web application to manage employees, including adding, editing, and deleting employee records.",
//     tech: "React, Tailwind CSS, JavaScript",
//   },
//   {
//     title: "Restaurant App",
//     description:
//       "A restaurant website where users can view menu items, explore dishes, and place orders online.",
//     tech: "React, Tailwind CSS",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="min-h-screen px-6 md:px-20 py-24 text-white">

//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.2 }}
//         className="text-4xl md:text-5xl font-bold text-center mb-20"
//       >
//         My <span className="text-cyan-400">Projects</span>
//       </motion.h2>

//       {/* Projects Grid */}
//       <div className="grid md:grid-cols-3 gap-10">

//         {projects.map((project, index) => (

//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2, delay: index * 0.2 }}
//             whileHover={{ scale: 1.05 }}
//             className="border border-white/10 rounded-xl p-6 backdrop-blur-md hover:border-cyan-400 transition duration-300"
//           >

//             <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
//               {project.title}
//             </h3>

//             <p className="text-gray-300 mb-4">
//               {project.description}
//             </p>

//             <p className="text-sm text-gray-400 mb-6">
//               {project.tech}
//             </p>

//             <button className="px-5 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">
//               View Project
//             </button>

//           </motion.div>

//         ))}

//       </div>

//     </section>
//   );
// };

// export default Projects;


import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Live Chat Application",
    description:
      "A real-time chat application built using React and Socket.io that allows users to communicate instantly.",
    tech: "React • Node.js • Socket.io",
  },
  {
    title: "Employee Management System",
    description:
      "A web application for managing employee data including adding, updating, and deleting employees.",
    tech: "React • Tailwind • JavaScript",
  },
  {
    title: "Restaurant App",
    description:
      "A responsive restaurant website where users can browse menus and explore food items.",
    tech: "React • Tailwind CSS",
  },
];

const Projects = () => {
  return (
    <div id="projects">
    <section className="min-h-screen px-6 md:px-20 py-24 text-white">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        My <span className="text-cyan-400">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="border border-white/20 rounded-xl p-6 transition duration-300 hover:border-cyan-400"
          >

            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            <p className="text-gray-400 text-sm mb-6">
              {project.tech}
            </p>

            <button className="px-5 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition duration-300">
              View Project
            </button>

          </motion.div>

        ))}

      </div>

    </section>
    </div>
  );
};

export default Projects;