
import React from 'react';
import { WorkExperience as WorkExperienceType } from '../types';
import CollapsibleSection from './CollapsibleSection';

interface WorkExperienceProps {
  experience: WorkExperienceType[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experience }) => {
  return (
    <CollapsibleSection id="experience" title="Work Experience">
      <div className="grid gap-6">
        {experience.map((exp, idx) => (
          <div key={idx} className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition">{exp.company}</h3>
                <p className="text-blue-500 font-semibold">{exp.role}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold">
                  {exp.period}
                </span>
                <p className="text-xs text-gray-400 mt-2 font-medium tracking-wide uppercase">{exp.location}</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-600 leading-relaxed list-none">
              {exp.description.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            {exp.skills && (
              <div className="mt-8 flex flex-wrap gap-2">
                {exp.skills.map((s, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-widest font-black text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1 rounded-md">
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default WorkExperience;
