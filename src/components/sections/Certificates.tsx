import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  description: string;
  url?: string;
}

const certificatesData: Certificate[] = [
  {
    name: 'Basics of Python Programming',
    issuer: 'HackerRank',
    date: 'August 2023',
    description: 'Completed a course on Python programming fundamentals.',
    url: 'https://www.hackerrank.com/certificates/ff644214c206',
  },
  {
    name: '5 Stars on C++', 
    issuer: 'HackerRank',
    date: 'March 2023',
    description: 'Achieved 5 stars in C++ programming on HackerRank.',
    url: 'https://www.hackerrank.com/profile/adithyaasasi',
  },
  {
    name: 'Crash Course on Python',
    issuer: 'Google',
    date: 'August 2023',
    description: 'Completed a crash course on Python programming.',
    url: 'https://www.coursera.org/account/accomplishments/certificate/ZUQSWXJ5BV9F',
  },
  {
    name:'Google UI/UX Design Professional Certificate',
    issuer: 'Google',
    date: 'June 2023',
    description: 'Completed a professional certificate in UI/UX design.',
    url: 'https://www.coursera.org/account/accomplishments/professional-cert/BBTK6BHDTFFG',
  },
  {
    name:' High-Fidelity Designs and Prototypes in Figma',
    issuer: 'Google',
    date: 'May 2023',
    description: 'Completed a course on creating high-fidelity designs and prototypes in Figma.',
    url: 'https://www.coursera.org/account/accomplishments/verify/KFHAFKFY2W33'
  },
  {
    name:'Foundations of User Experience (UX) Design',
    issuer: 'Google',
    date: 'May 2023',
    description: 'Completed a course on the foundations of UX design.',
    url:'https://www.coursera.org/account/accomplishments/verify/AHP26N3WTYAA'
  },
  {
    name:'Wireframes and Low-Fidelity Prototypes',
    issuer: 'Google',
    date: 'May 2023',
    description: 'Completed a course on creating wireframes and low-fidelity prototypes.',
    url:'https://www.coursera.org/account/accomplishments/verify/4W8S2F7R4TDZ'
  },
  {
    name:'UX Design Process: Empathize, Define, and Ideate',
    issuer: 'Google',
    date: 'May 2023',
    description: 'Completed a course on the UX design process.',
    url:'https://www.coursera.org/account/accomplishments/verify/R9NFPTLR9Z9G'
  },
  {
    name:'Dynamic User Interfaces (UI) for Websites',
    issuer: 'Google',
    date: 'May 2023',
    description: 'Completed a course on creating dynamic user interfaces for websites.',
    url:'https://www.coursera.org/account/accomplishments/verify/H2XGHGLYAPWC'
  },
  {
    name:'UX Research and Test Early Concepts',
    issuer: 'Google',
    date: 'May 2023',
    description: 'Completed a course on UX research and testing early concepts.',
    url:'https://www.coursera.org/account/accomplishments/verify/S6UP6TCVWCT4'
  }
];

const Certificates: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center mb-6">
        <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Certificates</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificatesData.map((certificate, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {certificate.name}
            </h4>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
              {certificate.issuer}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
              {certificate.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              {certificate.description}
            </p>
            {certificate.url && (
              <a
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors"
              >
                View Certificate
                <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;