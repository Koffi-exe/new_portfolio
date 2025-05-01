import React from 'react';
import ProjectCard from './sections/ProjectCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const projectsData: Project[] = [
  {
    title: 'Signature Downloader',
    description: 'An online tool for downloading email signatures with a user-friendly interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.pexels.com/photos/48195/document-agreement-documents-sign-48195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/Koffi-exe/Signature-Downloader',
    liveUrl: 'https://signature-downloader.vercel.app/',
  },
  {
    title: 'QR Code Generator',
    description: 'A simple web application for generating QR codes from URLs or text, with customization options.',
    technologies: ['React', 'JavaScript', 'CSS','Tailwind CSS'],
    image: 'https://images.pexels.com/photos/278430/pexels-photo-278430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/Koffi-exe/QRMaker',
    liveUrl: 'https://qr-maker-git-master-koffi-exes-projects.vercel.app/',
  },
  {
    title: 'Google authentication with React',
    description: 'A web application that allows users to sign in using their Google account, with secure authentication and user management.',
    technologies: ['React', 'Firebase', 'tailwind CSS'],
    image: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/Koffi-exe/Google-Auth0',
    liveUrl: 'https://google-auth0.vercel.app/',
  },
  {
  title: 'Fitness Tracking App',
    description: 'Under Development, The links are not available yet.',
    technologies: ['React Native', 'GraphQL', 'AWS', 'Chart.js'],
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Weather Forecast App',
    description: 'A weather application with 7-day forecasts, location-based weather data, and interactive maps for global weather patterns.',
    technologies: ['React', 'Redux', 'OpenWeather API', 'Mapbox'],
    image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    githubUrl: 'https://github.com/username/weather-app',
    liveUrl: 'https://example-weather.com',
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            My Projects
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Here are some of the projects I've worked on. Each project showcases different skills and technologies.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;