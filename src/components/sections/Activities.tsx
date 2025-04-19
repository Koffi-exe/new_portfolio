import React from 'react';
import { Users, Briefcase, BookOpen } from 'lucide-react';

interface Activity {
  type: 'community' | 'professional' | 'personal';
  title: string;
  organization?: string;
  period: string;
  description: string;
}

const activitiesData: Activity[] = [
  {
    type: 'personal',
    title: 'AI Prompting Challenge',
    organization: 'University',
    period: '2024',
    description: 'Participated in a university-wide AI Prompting Challenge, where I got the first place for my innovative approach to AI prompt engineering.',  
  },
  {
    type: 'professional',
    title: 'Internship at NetDev',
    organization: 'Web Developer',
    period: 'September - March 2023',
    description: 'Worked as a web developer intern at NetDev, where I contributed to the development of a new feature for their flagship product. Gained hands-on experience in React and Node.js.',  
  },
  {
    type: 'professional',
    title: 'Internship at Preet Design Agency',
    organization: 'Design Intern',
    period: 'June - August 2023',
    description: 'Assisted in the design and development of marketing materials for various clients. Collaborated with the design team to create visually appealing graphics and layouts.',
  },
];

const Activities: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'community':
        return <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'professional':
        return <Briefcase className="w-5 h-5 text-green-600 dark:text-green-400" />;
      case 'personal':
        return <BookOpen className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center mb-6">
        <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Activities</h3>
      </div>

      <div className="space-y-6">
        {activitiesData.map((activity, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">{getIcon(activity.type)}</div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {activity.title}
                </h4>
                {activity.organization && (
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {activity.organization}
                  </p>
                )}
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  {activity.period}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {activity.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;