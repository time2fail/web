
import React, { useState } from 'react';

interface CollapsibleSectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ id, title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section id={id} className="scroll-mt-24 border-b border-gray-200 pb-4 last:border-0 print:border-0 print:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 hover:bg-gray-50 rounded-xl transition-all px-4 -mx-4 group text-left print:hover:bg-transparent print:py-2 print:px-0 print:mx-0"
      >
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-gray-800 print:text-xl">
          <span className="w-8 h-1 bg-blue-600 rounded-full group-hover:w-12 transition-all print:hidden"></span>
          {title}
        </h2>
        <div className={`p-2 rounded-full bg-gray-100 group-hover:bg-blue-50 transition-colors collapsible-icon print:hidden`}>
          <svg
            className={`w-6 h-6 text-gray-500 group-hover:text-blue-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div 
        className={`collapsible-content overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[3000px] opacity-100 pb-12' : 'max-h-0 opacity-0'
        } print:max-h-none print:opacity-100 print:pb-4`}
      >
        <div className="pt-4 print:pt-0">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CollapsibleSection;
