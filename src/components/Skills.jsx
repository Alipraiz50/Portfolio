// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiGithubBadge,
} from "react-icons/di";
import { SiNextdotjs, SiTypescript, SiFramer } from "react-icons/si"; // Import new icons
import { motion } from "framer-motion";

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
      { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
      { name: 'Sass', icon: <DiSass className='text-pink-600' /> },
      { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
      { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
      { name: 'Next.js', icon: <SiNextdotjs className='text-black' /> }, // Add Next.js
      { name: 'TypeScript', icon: <SiTypescript className='text-blue-600' /> }, // Add TypeScript
    ],
  },
  {
    category: 'Fullstack',
    technologies: [
      { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
      { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
      { name: 'Framer Motion', icon: <SiFramer className='text-black' /> }, // Add Framer Motion
    ],
  },
];

const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      <p className="text-center mb-8">
        I worked on various frontend and fullstack projects.
      </p>

      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }} // Start off-screen and transparent
            animate={{ opacity: 1, x: 25 }} // Animate to on-screen and opaque
            exit={{ opacity: 0, x: 50 }} // Exit animation
            transition={{ duration: 0.5 }} // Adjusted animation duration
            className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2"
          >
            <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {skill.technologies.map((tech, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="text-2xl">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
