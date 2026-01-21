
import React from 'react';
import CollapsibleSection from './CollapsibleSection';

interface CertificationsProps {
  courses: {
    title: string;
    provider: string;
    period: string;
  }[];
}

const Certifications: React.FC<CertificationsProps> = ({ courses }) => {
  return (
    <CollapsibleSection title="Certifications & Courses">
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course, idx) => (
          <div key={idx} className="flex justify-between items-center group bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition">{course.title}</h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{course.provider}</p>
            </div>
            <span className="text-[10px] font-black text-blue-500 bg-blue-50 px-3 py-1 rounded-full shrink-0">{course.period}</span>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default Certifications;
