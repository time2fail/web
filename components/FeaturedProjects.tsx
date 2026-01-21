
import React from 'react';
import { Project } from '../types';
import CollapsibleSection from './CollapsibleSection';

interface FeaturedProjectsProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects, onProjectSelect }) => {
  return (
    <CollapsibleSection id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group bg-white border border-gray-100 p-8 rounded-3xl hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all flex flex-col">
            <div className="flex-1 space-y-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">{project.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{project.shortDescription}</p>
            </div>
            <button 
              onClick={() => onProjectSelect(project)}
              className="mt-8 w-full py-3 bg-gray-50 text-blue-600 font-bold text-sm rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center gap-2"
            >
              Explore Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default FeaturedProjects;
