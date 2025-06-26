// src/app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { icons, ProjectIcons, profileImageUrl } from "@/app/data/appIcons";

// ============================================================================
// --- DADOS ORGANIZADOS ---
// As informações de habilidades e projetos estão aqui para fácil manutenção.
// ============================================================================

type Skill = keyof typeof icons;

const skillsData: Skill[] = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "PHP", "SQL",
  "Tailwind CSS", "React", "Next.js", "NestJS", "React Native"
];

const projectsData = [
  {
    id: "clinicaped",
    icon: ProjectIcons.mobile,
    title: "ClínicaPed - App Mobile para Gestão de Consultas",
    description: "ClínicaPed é um aplicativo mobile moderno desenvolvido com React Native, voltado para facilitar o agendamento e gerenciamento de consultas pediátricas.",
    tags: ["React Native", "TypeScript", "API REST", "JWT", "AsyncStorage"],
    githubUrl: "https://github.com/Kauasx09-Henrique/clinicaped-app-mobile",
  },
  {
    id: "disbussines",
    icon: ProjectIcons.web,
    title: "Disbussines Web - Sistema de Gestão de Negócios",
    description: "Aplicação web completa para gerenciamento de negócios, com controle de vendas, clientes, produtos e geração de relatórios. Projeto de conclusão de curso (TCC).",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Responsivo"],
    githubUrl: "https://github.com/Kauasx09-Henrique/disbussines-web",
  },
  {
    id: "portfolio",
    icon: ProjectIcons.personal,
    title: "Portfólio Pessoal",
    description: "Site pessoal (este que você está vendo) criado com as tecnologias mais modernas para exibir meus projetos, habilidades e informações de contato.",
    tags: ["Next.js", "Tailwind CSS", "React", "Framer Motion"],
    githubUrl: "https://github.com/Kauasx09-Henrique/portfolio-fullstack-kaua",
  },
];


// ============================================================================
// --- COMPONENTE PRINCIPAL (HOME) ---
// O componente visual que renderiza os dados acima.
// ============================================================================

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#111827] to-gray-900 text-gray-100 p-4 sm:p-8 flex flex-col items-center font-sans overflow-x-hidden">
      
      {/* Botão de voltar ao topo */}
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-full shadow-lg shadow-indigo-500/30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          aria-label="Voltar ao topo"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}

      {/* Cabeçalho */}
      <motion.header
        className="mb-12 text-center mt-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
          Kauã Henrique
        </h1>
        <motion.p
          className="text-lg text-gray-400 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Estudante de Análise e Desenvolvimento de Sistemas | Técnico em Informática | Desenvolvedor Fullstack
        </motion.p>
      </motion.header>

      {/* Foto de Perfil */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        whileHover={{ y: -10 }}
      >
        <div className="relative">
          {/* FOTO DO PERFIL: A classe 'z-10' a coloca na frente. */}
          <Image
            src={profileImageUrl}
            alt="Foto de Kauã Henrique"
            width={180}
            height={180}
            className="relative z-10 rounded-full border-4 border-indigo-500 shadow-xl shadow-indigo-500/30 object-cover"
            priority
          />
          {/* EFEITO DE BRILHO: Sem 'z-index', ele fica atrás dos elementos com 'z-index' (como a foto). */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
        </div>
      </motion.div>

      {/* Seção Sobre mim */}
      <motion.section
        className="max-w-3xl text-center mb-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6">Sobre mim</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Sou um desenvolvedor apaixonado por tecnologia e programação. Atualmente faço estágio no{" "}
          <span className="text-indigo-400 font-semibold">Censipam</span> na área de TI, e curso Análise e Desenvolvimento
          de Sistemas no <span className="text-indigo-400 font-semibold">IESB Oeste</span>. Tenho experiência com front-end,
          back-end, banco de dados SQL, PHP e frameworks modernos como React e Next.js. Gosto de criar
          soluções simples e eficientes que impactem positivamente as pessoas.
        </p>
      </motion.section>

      {/* Seção Habilidades */}
      <motion.section
        className="max-w-4xl w-full px-4 mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Habilidades</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center justify-center text-center border border-gray-700 transition-all"
              whileHover={{ y: -5, backgroundColor: "rgba(79, 70, 229, 0.2)", borderColor: "rgba(99, 102, 241, 0.5)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + index * 0.05, duration: 0.5 }}
            >
              <div className="h-8 flex items-center justify-center mb-2">
                {icons[skill]}
              </div>
              <span className="text-gray-200 font-medium text-sm">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Seção Projetos */}
      <motion.section
        className="max-w-4xl w-full px-4 mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projetos</h2>
        <div className="space-y-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500/50 transition-all group"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col sm:flex-row items-start">
                <div className="bg-indigo-600 p-4 rounded-lg mr-0 sm:mr-6 mb-4 sm:mb-0 flex-shrink-0">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-indigo-900/40 text-indigo-300 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors font-semibold"
                  >
                    Ver no GitHub
                    {ProjectIcons.github}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Rodapé */}
      <footer className="w-full text-center py-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Kauã Henrique. Todos os direitos reservados.
      </footer>
    </div>
  );
}