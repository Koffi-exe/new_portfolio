import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    githubUrl: string;
    liveUrl: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl h-full flex flex-col">
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <img
          src={project.image}
          alt={project.title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pb-6 flex space-x-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-md font-medium text-sm transition-colors"
          aria-label={`View ${project.title} code on GitHub`}
        >
          <Github className="w-4 h-4 mr-2" />
          <span>Code</span>
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium text-sm transition-colors"
          aria-label={`View ${project.title} live demo`}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;