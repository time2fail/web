
import React from 'react';
import CollapsibleSection from './CollapsibleSection';

interface CoreSkillsProps {
  skills: string[];
  languages: { name: string; level: string }[];
}

const CoreSkills: React.FC<CoreSkillsProps> = ({ skills, languages }) => {
  return (
    <CollapsibleSection title="Core Skills">
      <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Technical Stack</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span key={idx} className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-bold hover:border-blue-500 hover:text-blue-600 transition-all cursor-default shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Languages</h4>
            <div className="grid gap-4">
              {languages.map((l, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <span className="font-bold text-gray-900">{l.name}</span>
                  <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
};

export default CoreSkills;
