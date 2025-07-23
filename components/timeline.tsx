"use client";

import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

const experiences = [
  {
    title: "Technical Lead",
    company: "Flux IT",
    period: "June 2024 - Present",
    description: `
    Led the technical team, making strategic decisions on cloud architecture and infrastructure. Acted as the main technical liaison with the client to validate requirements and ensure project feasibility. Mentored developers, fostering a healthy and collaborative work culture. Performed code reviews, managed Sprint-to-Sprint delivery cycles, and built the technical backlog. Conducted interviews for new team members, contributed to branding content, and participated in high-level tech department decisions to align with the company’s long-term vision and mission.`,
  },
  {
    title: "Technical Lead",
    company: "Swiss Medical Group",
    period: "September 2022 - June 2024",
    description: `
    Led the technical team with a focus on architecture and cloud infrastructure. Collaborated directly with the client to validate technical requirements and assess feasibility. Mentored developers to support professional growth and promote teamwork. Conducted code reviews, managed delivery cycles, maintained the technical backlog, and interviewed candidates for the team and other projects.`,
  },
  {
    title: "Software Developer",
    company: "Potentia Analytics",
    period: "September - November 2023",
    description: `
    Developed mobile application features and implemented serverless endpoints using MongoDB Atlas. Conducted code reviews and added accessibility features. Worked closely with the business team in a startup environment to ensure product alignment and fast iteration.`,
  },
  {
    title: "Software Engineer",
    company: "Vantek",
    period: "September - November 2023",
    description: `
    Delivered end-to-end features across the entire stack, including database, backend, and frontend. Conducted code reviews, mentored junior developers, documented technical aspects of the project, and created UML diagrams and reports. Was also responsible for deployments across different environments.`,
  },
  {
    title: "Software Developer",
    company: "Municipalidad de Maipú",
    period: "June 2021 - September 2022",
    description: `
    Worked on full-stack development, implementing features from database to frontend. Performed code reviews, created project documentation and UMLs, and led training sessions and product demos for municipal staff. Handled deployments to various environments.`,
  },
  {
    title: "Software Developer",
    company: "Freelancer.com",
    period: "January 2019 - March 2020",
    description: `
    Maintained existing applications, containerized them with Docker, and implemented version control. Configured and managed Linux servers (Debian/Ubuntu) and handled SQL database setup and management.`,
  },
];

export function Timeline() {
  const isMobile = useMobile();

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${
              index % 2 === 0 ? "md:pl-10" : "md:pr-10"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
