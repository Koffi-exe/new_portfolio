import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'RGPV University',
    location: 'Indore, Madhya Pradesh',
    period: '2021 - 2025',
    description:
      'Specialized in Web Development and APIs. Completed project using Gemini AI’s API.',
  },
 {
    degree: 'Higher Secondary Certificate',
    institution: 'Mar Gregorios Memorial School (CBSE)',
    location: 'Indore, Madhya Pradesh',
    period: '2019 - 2020',
    description:
      'Completed Higher Secondary with a focus on Science and Mathematics.',
  },
  {
    degree: 'Secondary School Certificate',
    institution: 'Mar Gregorios Memorial School (CBSE)',
    location: 'Indore, Madhya Pradesh',
    period: '2017 - 2018',
    description:
      'Completed Secondary School with a focus on Science',
  },
];

const Education: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center mb-6">
        <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
      </div>

      <div className="space-y-8">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {item.degree}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {item.institution}, {item.location}
            </p>
            <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{item.period}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;