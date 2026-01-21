import React, { useState, useEffect } from 'react';
import { resumeData } from './data/resume';
import { Project } from './types';
import FeaturedProjects from './components/FeaturedProjects';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import CoreSkills from './components/CoreSkills';
import ChessExcellence from './components/ChessExcellence';
import Organizations from './components/Organizations';
import Certifications from './components/Certifications';

const ProjectDetailView: React.FC<{ project: Project; onBack: () => void }> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white animate-in fade-in duration-500 print:bg-white print:text-black">
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 px-6 py-4 print:hidden">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Main Page
          </button>
          <span className="text-gray-500 text-sm font-medium">Project Case Study</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 space-y-16 print:py-0">
        <header className="space-y-6">
          <div className="flex flex-wrap gap-2 print:hidden">
            {project.technologies.map((tech, i) => (
              <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-blue-600/20 text-blue-400 px-3 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter print:text-4xl">{project.title}</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl print:text-black print:text-base">{project.shortDescription}</p>
        </header>

        <section className="grid md:grid-cols-3 gap-12 border-t border-gray-800 pt-16 print:pt-8 print:grid-cols-1 print:gap-4">
          <div className="md:col-span-2 space-y-8 print:space-y-4">
            <h2 className="text-3xl font-bold print:text-2xl">Deep Dive</h2>
            <p className="text-gray-300 text-lg leading-relaxed print:text-black print:text-sm">{project.fullDescription}</p>
          </div>
          <div className="space-y-8 print:space-y-2">
            <h2 className="text-xl font-bold text-blue-400 print:text-black">Key Outcomes</h2>
            <ul className="space-y-4 print:space-y-1">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-400 font-medium print:text-black">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0 print:bg-gray-400"></span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-gray-800/50 p-10 rounded-3xl border border-gray-700 print:hidden">
           <h3 className="text-2xl font-bold mb-6">Want to learn more?</h3>
           <p className="text-gray-400 mb-8">This project represents a significant milestone in my journey as an Industrial Engineer. I'm happy to discuss the technical implementation and the data models used.</p>
           <a 
             href={`mailto:${resumeData.contact.email}?subject=Regarding Project: ${project.title}`}
             className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition"
           >
             Contact Utku
           </a>
        </section>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [imageError, setImageError] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Creating a temporary link to trigger the file download
    const link = document.createElement('a');
    link.href = 'Utku-Cengiz-Acar.pdf';
    link.download = 'Utku-Cengiz-Acar-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (activeProject) {
    return <ProjectDetailView project={activeProject} onBack={() => setActiveProject(null)} />;
  }

  return (
    <div className="min-h-screen selection:bg-blue-100 bg-white">
      <style>{`
        @media print {
          nav, footer, .print-hidden, .collapsible-icon, .social-links-row, .download-btn {
            display: none !important;
          }
          .collapsible-content {
            max-height: none !important;
            opacity: 1 !important;
            display: block !important;
          }
          body {
            background: white !important;
            color: black !important;
            padding: 0 !important;
          }
          .max-w-6xl {
            max-width: 100% !important;
            padding: 0 !important;
          }
          section {
            page-break-inside: avoid;
            margin-bottom: 2rem !important;
          }
          h1 { font-size: 2.5rem !important; margin-bottom: 0.5rem !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image { display: none !important; }
        }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 print:hidden">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600 tracking-tight">Utku C. Acar</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-500 hover:text-blue-600 transition">About</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-gray-500 hover:text-blue-600 transition">Projects</a>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="text-gray-500 hover:text-blue-600 transition">Experience</a>
            <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="text-gray-500 hover:text-blue-600 transition">Education</a>
            <a href="#awards" onClick={(e) => handleNavClick(e, 'awards')} className="text-gray-500 hover:text-blue-600 transition">Achievements</a>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleDownloadResume}
              className="text-gray-500 hover:text-blue-600 px-4 py-2 text-sm font-bold transition-all"
            >
              Resume
            </button>
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Print Header */}
      <div className="hidden print:block mb-8 border-b-2 border-gray-100 pb-4">
        <h1 className="text-4xl font-black">{resumeData.name}</h1>
        <div className="flex gap-4 text-sm text-gray-600">
          <span>{resumeData.contact.email}</span>
          <span>•</span>
          <span>{resumeData.contact.location}</span>
          <span>•</span>
          <span>LinkedIn: {resumeData.contact.linkedin.replace('https://', '')}</span>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-8 print:py-0">
        {/* Hero Section */}
        <section id="about" className="hero-grid grid md:grid-cols-2 gap-12 items-center py-16 scroll-mt-24 print:py-4">
          <div className="order-2 md:order-1 space-y-8 print:space-y-2">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-700 leading-none print:text-5xl">
              <span className="text-blue-600 whitespace-nowrap">Utku Cengiz</span> <br />
              <span className="block">Acar</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-medium print:text-base print:text-black">
              Industrial Engineering & Economics student at METU. 
              Data, Economics, Chess and Life.
            </p>
            <div className="flex flex-wrap gap-4 social-links-row print:hidden">
              <SocialLink href={resumeData.contact.linkedin} label="LinkedIn" />
              <SocialLink href={resumeData.contact.github} label="GitHub" />
              <SocialLink href={resumeData.contact.kaggle} label="Kaggle" />
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center hero-image print:hidden">
            <div className="relative w-64 h-64 md:w-72 md:h-72 group">
              <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-10"></div>
              <div className="absolute inset-0 bg-blue-100 rounded-[2.5rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500 opacity-50"></div>
              
              {imageError ? (
                <div className="relative z-10 w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] shadow-2xl border-4 border-white flex items-center justify-center text-white text-5xl font-black select-none">
                  UA
                </div>
              ) : (
                <img
                  src="image-640.png"
                  srcSet="
                    image-320.png 320w,
                    image-640.png 640w,
                    image-1024.png 1024w
                  "
                  sizes="(min-width: 768px) 320px, 256px"
                  alt="Utku Cengiz Acar"
                  onError={() => setImageError(true)}
                  className="relative z-10 w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]"
                />
              )}
            </div>
          </div>
        </section>

        {/* Modular Sections */}
        <FeaturedProjects projects={resumeData.projects} onProjectSelect={setActiveProject} />
        <WorkExperience experience={resumeData.workExperience} />
        <Education education={resumeData.education} />
        <CoreSkills skills={resumeData.skills} languages={resumeData.languages} />
        <ChessExcellence awards={resumeData.awards} />
        <Organizations organizations={resumeData.organizations} />
        <Certifications courses={resumeData.courses} />

        {/* Footer */}
        <footer className="border-t border-gray-100 pt-16 pb-32 text-center md:text-right print:hidden">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
             <p className="text-gray-400 text-sm font-medium">© {new Date().getFullYear()} Utku Cengiz Acar. Ankara, Turkey.</p>
             <div className="flex gap-8 text-sm text-gray-600 font-bold uppercase tracking-widest">
                <a href={`mailto:${resumeData.contact.email}`} className="hover:text-blue-600 transition">Email</a>
                <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">LinkedIn</a>
                <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">GitHub</a>
             </div>
           </div>
        </footer>
      </main>
    </div>
  );
};

const SocialLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-white border border-gray-200 rounded-2xl text-sm font-bold text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:shadow-xl hover:shadow-blue-500/10 transition-all flex items-center gap-2"
  >
    {label}
    <svg className="w-4 h-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </a>
);

export default App;