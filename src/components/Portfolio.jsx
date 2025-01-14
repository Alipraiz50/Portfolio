/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project5.png";
import project5 from "../assets/project4.png";
import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai';

const projects = [
  {
    img: project1,
    title: "Ladun Agency",
    description: "This is a creative agency which was inspired by my love for creativity and innovation, is a dynamic and responsive web application designed to help creative agencies showcase their portfolio, services, and engage with potential clients. It combines the flexibility of React.js for building interactive user interfaces with the utility-first CSS framework, Tailwind CSS, to create a visually stunning and performant website.",
    links: {
      site: "https://ladun-ten.vercel.app/",
      github: "https://github.com/Alipraiz50/Ladun/tree/main",
    },
  },
 
  {
    img: project3,
    title: "Panite Blog",
    description: "Painite Blog is a cutting-edge SaaS platform tailored for content creators. Built using modern technologies like  Firebase, and TypeScript, it simplifies the content writing process by allowing users to quickly set up and manage their content-driven websites.",
    links: {
      site: "https://painiteblog.vercel.app/",
      github: "",
    },  
  },
  {
    img: project4,
    title: "Vibe",
    description: "vibe is designed to make your conversations flow effortlessly.whether you are cacthing up with friends, collaborating with colleagues or meeting new people.vibe provides a smooth and intutive chat experience.",
    links: {
      site: "https://vibe-rose.vercel.app/",
      github: "",
    },  
  },
  
  {
    img: project5,
    title: "Text-To-Speech",
    description: "This is a tool i built with Eleven labs Api and Next Js which helps end users in converting any type of text they want to audio format with different types of voice",
    links: {
      site: "https://ai-text-to-speech-rc6j.vercel.app/",
      github: "https://github.com/Alipraiz50/Ai-Text-To-Speech",
    },
  },
  {
    img: project6,
    title: "Task Hub",
    description: "TaskHub, a sophiscated task management solution revolutionizes how you handle projects.harnessing the power of react and typescript, taskhub efficiently helps end users to manage thier task",
    links: {
     site: "https://taskhub-site.netlify.app/",
    },
  },
];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }} // Start off-screen and transparent
          animate={{ opacity: 1, y: 30 }} // Animate to on-screen and opaque
          transition={{ duration: 9.5 }} // Animation duration
          className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}
        >
          <div className='w-full md:w-1/2 p-4'>
            <img
              src={project.img}
              alt={project.title}
              className='w-full h-full object-cover rounded-lg shadow-lg'
            />
          </div>
          <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
            <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
            <p className='text-gray-300 mb-4'>{project.description}</p>
            <div className='flex space-x-4'>
              <a href={project.links.site}
                className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                View Site
              </a>
              <a href={project.links.github}
                className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                <AiOutlineGithub />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Portfolio;
