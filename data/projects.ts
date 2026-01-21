
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "app-optimization",
    title: "Mobile App Performance Tuning",
    shortDescription: "Optimizing backend response times and user flow for a high-traffic mobile application.",
    fullDescription: "During my internship at Philip Morris, I spearheaded a project focused on the performance optimization of our core mobile application. By analyzing API response times and database query patterns, I identified bottlenecks that were affecting user retention. I worked closely with the DevOps team to implement a more efficient caching layer and refactored SQL queries to reduce load times by 35%.",
    technologies: ["Python", "SQL", "DevOps Tools", "Mobile Analytics"],
    outcomes: [
      "Reduced average API latency by 35%",
      "Improved user retention rate by 12% in the first quarter post-launch",
      "Streamlined the CI/CD pipeline for faster deployment cycles"
    ]
  },
  // Add more projects here as you grow your portfolio
];
