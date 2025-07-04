// src/components/ProjectsSection.jsx
import { link } from 'fs';
import { title } from 'process';
import React from 'react';

const projects = [
  {
    title: 'Site Front-end Psicologa',
    description: 'Site realizado com react com base typscript.',
    link: 'https://github.com/Kauasx09-Henrique/Site_Vanessa_psicologa',
    technologies: ['React', 'Typescript', 'Tailwind CSS'],
  },
  {
    title: 'CliniaPed+ Front-end',
    description: 'Projeto de um sistema de gerenciamento de clinicas, com funcionalidades de agendamento, cadastro de pacientes.',
    link: 'https://github.com/Kauasx09-Henrique/clinicaped-app-mobile',
    technologies: ['React Native', 'workbench', 'Expo', 'Axios', 'Tailwind CSS', 'TypeScript' ,'Node.js'],
  },
   {
    title: 'CliniaPed+ Back-end API NEST',
    description: 'Projeto de um sistema de gerenciamento de clinicas, com funcionalidades de agendamento, cadastro de pacientes.',
    link: 'https://github.com/Kauasx09-Henrique/clinicaped-api-nestjs',
    technologies: ['React Native', 'workbench', 'Expo', 'Axios', 'Tailwind CSS', 'TypeScript' ,'Node.js'],
  },
  {
    title: 'Site de Portfólio',
    description: 'Portfólio pessoal desenvolvido com Next.js e Tailwind CSS.',
    link: 'https://github.com/Kauasx09-Henrique/portfolio-fullstack-kaua',
    technologies: [ 'React', 'TypeScript'],
  },
  {
    title: 'DisBussines',
    description: 'E-comerce desenvolvido para atender a demanda de empresas que desejam ser vistas e vender seus produtos online.',
    link: 'https://github.com/Kauasx09-Henrique/Disbussines-web',  
    technologies: [ 'php', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap' ,'API REST'],
  }

];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#0a192f]">
        Projetos
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#f8fdfe] p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-2 text-[#0a192f]">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#57e9f8]/20 text-[#0a192f] rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-[#fff] bg-[#57e9f8] px-4 py-2 rounded-md font-medium hover:bg-[#45c8d8] transition-colors"
            >
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
