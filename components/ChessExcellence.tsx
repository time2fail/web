
import React from 'react';
import { Award } from '../types';
import CollapsibleSection from './CollapsibleSection';

interface ChessExcellenceProps {
  awards: Award[];
}

const ChessExcellence: React.FC<ChessExcellenceProps> = ({ awards }) => {
  return (
    <CollapsibleSection id="awards" title="Chess Excellence">
      <div className="grid md:grid-cols-2 gap-8">
        {awards.map((award, idx) => (
          <div key={idx} className="bg-yellow-50/30 border border-yellow-100 p-8 rounded-3xl relative group overflow-hidden">
            <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">🏆</div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-gray-900 pr-8">{award.title}</h3>
              <span className="text-xs font-black text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full shrink-0">{award.year}</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">{award.description}</p>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default ChessExcellence;
