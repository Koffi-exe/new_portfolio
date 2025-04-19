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
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    liveUrl: 'https://example-ecommerce.com',
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for organizing tasks with drag-and-drop functionality, deadline reminders, and team collaboration features.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Redux'],
    image: 'https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    githubUrl: 'https://github.com/username/task-management',
    liveUrl: 'https://example-tasks.com',
  },
  {
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for social media managers to track engagement metrics and schedule content across multiple platforms.',
    technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    githubUrl: 'https://github.com/username/social-dashboard',
    liveUrl: 'https://example-dashboard.com',
  },
  {
    title: 'Real-time Chat Application',
    description: 'A messaging platform with real-time communication, file sharing, and end-to-end encryption for secure conversations.',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    image: 'https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    githubUrl: 'https://github.com/username/chat-app',
    liveUrl: 'https://example-chat.com',
  },
  {
    title: 'Fitness Tracking App',
    description: 'A mobile-first web application for tracking workouts, setting fitness goals, and visualizing progress over time.',
    technologies: ['React Native', 'GraphQL', 'AWS', 'Chart.js'],
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    githubUrl: 'https://github.com/username/fitness-tracker',
    liveUrl: 'https://example-fitness.com',
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