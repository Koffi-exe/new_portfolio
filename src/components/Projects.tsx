import React from "react";
import ProjectCard from "./sections/ProjectCard";

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
    title: "Message X",
    description:
      "A web application that allows users to send and receive messages in real-time, with features like global chat, private messaging, and user authentication.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Render",
      "WebSocket",
      "Socket.IO",
    ],
    image:
      "https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubUrl: "https://github.com/Koffi-exe/MessageX",
    liveUrl: "https://message-x-nine.vercel.app/",
  },
  {
    title: "House Help",
    description:
      "A web application that connects users with local house help, allowing them to book and manage appointments easily.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Render",
    ],
    image:
      "https://images.pexels.com/photos/6647057/pexels-photo-6647057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubUrl: "https://house-help-fawn.vercel.app/",
    liveUrl: "https://house-help-git-main-koffi-exes-projects.vercel.app/",
  },
  {
    title: "Linux Academy",
    description:
      "A web application that provides a collection of Linux commands and tutorials for beginners and advanced users.",
    technologies: [
      "Linux",
      "Bash",
      "Markdown",
      "Xterm",
      "React",
      "Tailwind CSS",
      "Node.js",
      "AWS EC2",
    ],
    image:
      "https://images.pexels.com/photos/11035358/pexels-photo-11035358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubUrl: "https://github.com/Koffi-exe/LinuxAcadmey",
    liveUrl: "https://house-help-fawn.vercel.app/",
  },
  {
    title: "Signature Downloader",
    description:
      "An online tool for downloading email signatures with a user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.pexels.com/photos/48195/document-agreement-documents-sign-48195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubUrl: "https://github.com/Koffi-exe/Signature-Downloader",
    liveUrl:
      "https://signature-downloader.vercel.app/",
  },
  {
    title: "Certificate Generator",
    description:
      "A web application that allows users to generate custom certificates by filling out a form.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubUrl: "https://github.com/Koffi-exe/Certificate-Generator",
    liveUrl:
      "https://certificate-generator-sand-two.vercel.app/",
  },
  {
    title: "QR Code Generator",
    description:
      "A simple web application for generating QR codes from URLs or text, with customization options.",
    technologies: ["React", "JavaScript", "CSS", "Tailwind CSS"],
    image:
      "https://images.pexels.com/photos/278430/pexels-photo-278430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubUrl: "https://github.com/Koffi-exe/QRMaker",
    liveUrl: "https://qr-maker-ten.vercel.app/",
  },
  {
    title: "Keyboard Heatmap",
    description: "A webpage to track keystrokes",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    image:
      "https://images.pexels.com/photos/532173/pexels-photo-532173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubUrl: "https://github.com/Koffi-exe/Key_heat_map",
    liveUrl: "https://key-heat-map.vercel.app/",
  },
  {
    title: "Text to Speech ",
    description: "A web application that converts text to speech, allowing users to listen to written content.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    image:
      "https://images.pexels.com/photos/1611001/pexels-photo-1611001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubUrl: "https://github.com/Koffi-exe/TTS",
    liveUrl: "https://tts-opal-five.vercel.app/",
  },
  {
    title: "Google authentication with React",
    description:
      "A web application that allows users to sign in using their Google account, with secure authentication and user management.",
    technologies: ["React", "Firebase", "tailwind CSS"],
    image:
      "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubUrl: "https://github.com/Koffi-exe/Google-Auth0",
    liveUrl: "https://google-auth0.vercel.app/",
  },
  {
    title: "Weather Forecast App",
    description:
      "A weather application with 7-day forecasts, location-based weather data, and interactive maps for global weather patterns.",
    technologies: ["React", "Redux", "OpenWeather API", "Mapbox"],
    image:
      "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    githubUrl: "https://github.com/Koffi-exe/Weather_apk",
    liveUrl: "https://weather-apk-two.vercel.app/",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Projects and Works
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Here are some of the projects I've worked on. Each project
              showcases different skills and technologies.
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
