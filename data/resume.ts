import { ResumeData } from '../types';
import { projects } from './projects';

export const resumeData: ResumeData = {
  name: "Utku Cengiz Acar",
  contact: {
    email: "utkucengizacar@gmail.com",
    location: "Ankara, Turkey",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    kaggle: "https://kaggle.com",
    hackerRank: "https://hackerrank.com"
  },
  languages: [
    { name: "Turkish", level: "Native" },
    { name: "English", level: "Professional" }
  ],
  skills: ["Python", "Matlab", "Microsoft Tools", "SQL", "Excel", "DevOps", "Market Analysis", "SEO"],
  projects: projects,
  workExperience: [
    {
      company: "Philip Morris",
      role: "Product Intern",
      period: "07/2025 | Remote",
      location: "Remote",
      description: [
        "Assisted in DevOps operations and participated in the maintenance, testing, and performance optimization of a mobile application in collaboration with development teams."
      ],
      skills: ["Python", "SQL", "Microsoft Tools"]
    },
    {
      company: "Garanti BBVA",
      role: "Risk Management Intern",
      period: "07/2024 – 02/2025",
      location: "Remote",
      description: [
        "Risk Management intern responsible for the examination and analysis of financial and operational risks.",
        "Involved in data classification and process optimization."
      ],
      skills: ["Microsoft Tools"]
    },
    {
      company: "TUSAS",
      role: "Engineering Intern",
      period: "06/2024 – 07/2024",
      location: "Ankara",
      description: [
        "Industrial Engineering intern focused on process optimization."
      ],
      skills: ["SQL", "Excel"]
    },
    {
      company: "Etsy - Arbitrage and Digital Product Marketing",
      role: "Owner",
      period: "10/2021 – 02/2023",
      location: "Online, Turkey",
      description: [
        "I own an online shop on Etsy.",
        "Market analysis, SEO."
      ]
    }
  ],
  education: [
    {
      institution: "Middle East Technical University",
      degree: "Industrial Engineering Undergraduate",
      period: "10/2020 – present",
      location: "Ankara, Turkey",
      details: "CGPA 3.2/4"
    },
    {
      institution: "Middle East Technical University",
      degree: "Economics",
      period: "10/2023 – present",
      location: "Ankara, Turkey",
      details: "Minor"
    }
  ],
  awards: [
    {
      title: "European Schools Chess Championship",
      year: "2015",
      description: "I was third in the European Championships in 2015."
    },
    {
      title: "Turkish Youth Chess Championship Champion",
      organization: "Turkish Chess Federation",
      year: "2012-2014",
      description: "In 2012-2013-2014, I became the champion for 3 years in a row."
    }
  ],
  organizations: [
    {
      name: "METU Chess Club",
      role: "Director and Coordinator",
      period: "09/2021 – 2024",
      location: "Ankara, Turkey",
      description: "My responsibilities at the chess club include directing chess tournaments, organizing club events, managing social media."
    }
  ],
  courses: [
    {
      title: "General Entrepreneurship Courses",
      provider: "Oyun ve Uygulama Akademisi",
      period: "12/2022 – 2023"
    }
  ]
};