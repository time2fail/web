export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  outcomes: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string;
}

export interface Award {
  title: string;
  organization?: string;
  year: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ResumeData {
  name: string;
  contact: {
    email: string;
    location: string;
    linkedin: string;
    github: string;
    kaggle: string;
    hackerRank: string;
  };
  languages: { name: string; level: string }[];
  projects: Project[];
  workExperience: WorkExperience[];
  education: Education[];
  awards: Award[];
  skills: string[];
  organizations: {
    name: string;
    role: string;
    period: string;
    location: string;
    description: string;
  }[];
  courses: {
    title: string;
    provider: string;
    period: string;
  }[];
}