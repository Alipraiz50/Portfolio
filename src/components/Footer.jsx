// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
      <div className='space-y-4'>
        <h3 className='text-2xl text-gray-200 font-semibold'>Ali Praise</h3>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
          <a href="https://github.com/Alipraiz50/" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/praise-emmanuel-24ab142b2/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="alipraise1000@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <p className='text-gray-400'>@2024 Ali Praise</p>
    </div>
  );
}

export default Footer;
