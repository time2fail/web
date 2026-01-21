
import React from 'react';
import CollapsibleSection from './CollapsibleSection';

interface OrganizationsProps {
  organizations: {
    name: string;
    role: string;
    period: string;
    location: string;
    description: string;
  }[];
}

const Organizations: React.FC<OrganizationsProps> = ({ organizations }) => {
  return (
    <CollapsibleSection title="Organizations">
      <div className="grid md:grid-cols-2 gap-8">
        {organizations.map((org, idx) => (
          <div key={idx} className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-shadow group">
             <h3 className="font-bold text-xl mb-1 group-hover:text-blue-600 transition">{org.name}</h3>
             <p className="text-blue-500 text-sm font-bold mb-4 uppercase tracking-wider">{org.role}</p>
             <p className="text-sm text-gray-600 leading-relaxed mb-6">{org.description}</p>
             <div className="flex justify-between items-center pt-6 border-t border-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <span>{org.period}</span>
                <span className="px-2 py-0.5 border border-gray-100 rounded">{org.location}</span>
             </div>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default Organizations;
