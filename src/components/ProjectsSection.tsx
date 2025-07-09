"use client"; // Necessário para usar hooks do React e Framer Motion em componentes de cliente

import React from 'react';
import { motion } from 'framer-motion'; // Importa motion para animações
import { FaLaptopCode, FaGithub } from 'react-icons/fa6'; // Ícones para a seção e botões

const projects = [
  {
    title: 'Site Front-end Psicologa',
    description: 'Site institucional e profissional desenvolvido com foco em UX/UI, utilizando React e TypeScript.',
    link: 'https://github.com/Kauasx09-Henrique/Site_Vanessa_psicologa',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX'],
    accentColor: '#a78bfa' // Cor de destaque para o projeto
  },
  {
    title: 'CliniaPed+ Front-end',
    description: 'Aplicação mobile para gerenciamento de clínicas pediátricas, com agendamento de consultas e cadastro de pacientes.',
    link: 'https://github.com/Kauasx09-Henrique/clinicaped-app-mobile',
    technologies: ['React Native', 'Expo', 'Axios', 'Tailwind CSS', 'TypeScript', 'Node.js'],
    accentColor: '#6366f1' // Cor de destaque para o projeto
  },
  {
    title: 'CliniaPed+ Back-end API NEST',
    description: 'API RESTful robusta e escalável para o sistema CliniaPed+, construída com NestJS e PostgreSQL.',
    link: 'https://github.com/Kauasx09-Henrique/clinicaped-api-nestjs',
    technologies: ['NestJS', 'PostgreSQL', 'TypeScript', 'Node.js', 'TypeORM'],
    accentColor: '#8b5cf6' // Cor de destaque para o projeto
  },
  {
    title: 'Portfólio Pessoal',
    description: 'Este portfólio dinâmico que você está explorando, desenvolvido para apresentar minhas habilidades e projetos.',
    link: 'https://github.com/Kauasx09-Henrique/portfolio-fullstack-kaua',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    accentColor: '#c4b5fd' // Cor de destaque para o projeto
  },
  {
    title: 'DisBussines - E-commerce',
    description: 'Plataforma de e-commerce completa para microempreendedores, com funcionalidades de vitrine de produtos e sistema de pedidos.',
    link: 'https://github.com/Kauasx09-Henrique/Disbussines-web',
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap', 'API REST'],
    accentColor: '#ec4899' // Cor de destaque para o projeto (um rosa vibrante)
  }
];

const ProjectsSection = () => {
  // Cor de destaque principal para a seção (um roxo escuro)
  const sectionAccentColor = '#8b5cf6';
  const sectionTextSecondary = '#cbd5e1';

  return (
    <section id="projects" className="py-24 bg-[#0a192f] relative overflow-hidden"> {/* Fundo escuro */}
      {/* Elementos de fundo animados */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-15"
        style={{ backgroundColor: sectionAccentColor }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: '#6366f1' }} /* Outro tom de roxo/índigo */
        animate={{ scale: [1, 0.9, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Título da Seção */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Meus <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">Projetos</span>
          </h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e desafiadores, demonstrando minha paixão por criar soluções.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1e0d3c] p-8 rounded-2xl shadow-xl border border-transparent hover:border-white-800 relative group" /* Fundo escuro, borda transparente que muda no hover */
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 * index }} /* Animação em cascata */
              whileHover={{
                y: -10, /* Leve elevação no hover */
                boxShadow: `0 15px 40px ${project.accentColor}40`, /* Sombra colorida com a cor do projeto */
                border: `1px solid ${project.accentColor}`, /* Borda colorida no hover */
                scale: 1.02 /* Leve escala */
              }}
              whileTap={{ scale: 0.98 }} /* Diminui no clique */
            >
              {/* Overlay decorativo no canto do card, revela no hover */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: project.accentColor }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              ></motion.div>

              <h3 className="text-2xl font-bold mb-3 text-white"> {/* Título branco */}
                {project.title}
              </h3>
              <p className="text-gray-300 mb-5 leading-relaxed"> {/* Texto cinza claro */}
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-[#2a1a4a] text-gray-200 rounded-full text-sm border border-transparent transition-all duration-200" /* Fundo mais escuro, borda transparente */
                    whileHover={{ 
                      backgroundColor: project.accentColor, /* Cor de destaque no hover */
                      color: '#fff', 
                      borderColor: project.accentColor,
                      scale: 1.05 /* Leve escala na tag */
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-auto px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
                style={{ 
                  backgroundColor: project.accentColor, /* Fundo com a cor de destaque do projeto */
                  color: '#1a0d3c', /* Cor do texto no botão (roxo escuro) */
                  boxShadow: `0 5px 15px ${project.accentColor}50`
                }}
                whileHover={{
                  scale: 1.05, /* Aumenta um pouco no hover */
                  boxShadow: `0 8px 25px ${project.accentColor}70` /* Sombra mais intensa */
                }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGithub size={18} /> {/* Ícone do GitHub */}
                Ver no GitHub
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;