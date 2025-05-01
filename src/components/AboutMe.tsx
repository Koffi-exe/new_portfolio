import React from 'react';
import Education from './sections/Education';
import Certificates from './sections/Certificates';
import Activities from './sections/Activities';

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              I'm a passionate developer with experience in creating beautiful, functional websites and applications. 
              Here's a bit more about my background and what I do.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-16">
          <div className="order-2 lg:order-1">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I specialize in building modern, responsive web applications using React, TypeScript, and Node.js. I'm passionate about creating clean, efficient code and delivering exceptional user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I am familiar with tools like Git, PostMan, Supabase, Cursor AI, Figma, Adobe XD and currently focusing on AWS cloud and Generative AI.            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, I am reading books, listening to music and exploring new technologies. I love to learn and grow, and I'm always looking for new challenges to tackle.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              {/* <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Profile"
                className="w-full h-full object-cover"
              /> */}
            </div>
          </div>
        </div>

        <div className="space-y-24">
          <Education />
          <Certificates />
          <Activities />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;