
import React from 'react';
import { Education as EducationType } from '../types';
import CollapsibleSection from './CollapsibleSection';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <CollapsibleSection id="education" title="Education">
      <div className="grid md:grid-cols-2 gap-8">
        {education.map((edu, idx) => (
          <div key={idx} className="bg-gray-50/50 border border-gray-100 p-8 rounded-3xl space-y-3 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="font-bold text-xl text-gray-900">{edu.institution}</h3>
            <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">{edu.degree}</p>
            <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
              <span>{edu.period}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>{edu.location}</span>
            </div>
            {edu.details && (
              <div className="inline-block mt-2 bg-white px-3 py-1 rounded-full border border-blue-100 shadow-sm">
                <p className="text-blue-600 font-bold text-xs">GPA: {edu.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default Education;
