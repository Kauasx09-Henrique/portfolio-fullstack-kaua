"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- Ícones para as Habilidades ---
const icons = {
  React: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={32} height={32} className="mx-auto" />
  ),
  "Next.js": (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" width={32} height={32} className="mx-auto bg-white rounded-full" />
  ),
  PHP: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" width={32} height={32} className="mx-auto" />
  ),
  SQL: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width={32} height={32} className="mx-auto" />
  ),
  JavaScript: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width={32} height={32} className="mx-auto" />
  ),
  TypeScript: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width={32} height={32} className="mx-auto" />
  ),
  "Tailwind CSS": (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" width={32} height={32} className="mx-auto" />
  ),
  "Node.js": (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width={32} height={32} className="mx-auto" />
  ),
  "React Native": (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" width={32} height={32} className="mx-auto" />
  ),
  NestJS: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" alt="NestJS" width={32} height={32} className="mx-auto" />
  ),
  HTML5: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width={32} height={32} className="mx-auto" />
  ),
  CSS3: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width={32} height={32} className="mx-auto" />
  ),
  "MySQL Workbench": (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL Workbench" width={32} height={32} className="mx-auto" />
  ),
};

// --- Ícones para os Projetos ---
const ProjectIcons = {
  mobile: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  ),
  web: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 01-9-9"
      />
    </svg>
  ),
  personal: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  ),
  github: (
    <svg
      className="h-5 w-5 ml-2"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
      />
    </svg>
  ),
};

// --- Foto do perfil ---
const profileImageUrl = "/Kaua.jpg"; // coloque sua imagem na pasta public com esse nome

export { icons, ProjectIcons, profileImageUrl };



export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Atualizado para incluir as novas habilidades
  const skills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "React",
    "React Native", // Adicionado React Native aqui
    "Next.js",
    "JavaScript",
    "TypeScript",
    "NestJS", // Adicionado NestJS
    "PHP",
    "MySQL", // Adicionado MySQL
    "MySQL Workbench", // Adicionado MySQL Workbench
    // Se Node.js ou SQL forem habilidades separadas, você pode adicionar aqui:
    // "Node.js",
    // "SQL", // Se 'SQL' for uma habilidade genérica além de MySQL
  ];

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

      {/* Foto */}
      <motion.div
        className="mb-10 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        whileHover={{ y: -10 }}
      >
        <div className="relative">
     <Image
  src="/Kaua.jpg"
  alt="Foto de Kauã Henrique"
  width={180}
  height={180}
  className="rounded-full border-4 border-indigo-500 shadow-xl shadow-indigo-500/30 object-cover"
/>

          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full blur-xl opacity-30 animate-pulse z-0"></div>
        </div>
      </motion.div>

      {/* Sobre mim */}
      <motion.section
        className="max-w-3xl text-center mb-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center text-gray-100">
          Sobre mim
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Sou um desenvolvedor apaixonado por tecnologia e programação. Atualmente faço estágio no{" "}
          <span className="text-indigo-400 font-semibold">Censipam</span> na área de TI, e curso Análise e Desenvolvimento
          de Sistemas no <span className="text-indigo-400 font-semibold">IESB Oeste</span>. Tenho experiência com front-end,
          back-end, banco de dados SQL, PHP e frameworks modernos como React e Next.js. Gosto de criar
          soluções simples e eficientes que impactem positivamente as pessoas.
        </p>
      </motion.section>

      {/* Habilidades */}
      <motion.section
        className="max-w-4xl w-full px-4 mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg text-center border border-gray-700 transition-all"
              whileHover={{
                y: -5,
                backgroundColor: "rgba(79, 70, 229, 0.2)",
                borderColor: "rgba(99, 102, 241, 0.5)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
            >
              <div className="text-indigo-400 mb-2">
                {icons[skill as keyof typeof icons]}
              </div>
              <span className="text-gray-200 font-medium">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projetos */}
      <motion.section
        className="max-w-4xl w-full px-4 mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Projetos</h2>
        <div className="space-y-8">
          {/* Projeto ClínicaPed */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500/50 transition-all group"
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col sm:flex-row items-start">
              <div className="bg-indigo-600 p-4 rounded-lg mr-0 sm:mr-6 mb-4 sm:mb-0">
                {ProjectIcons.mobile}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                  ClínicaPed - App Mobile para Gestão de Consultas
                </h3>
                <p className="mb-4 text-gray-400">
                  ClínicaPed é um aplicativo mobile moderno desenvolvido com React Native, voltado para facilitar o agendamento e gerenciamento de consultas pediátricas.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "React Native", "TypeScript", "API REST", "JWT", "AsyncStorage",
                  ].map((tag) => (
                    <span key={tag} className="text-xs bg-indigo-900/40 text-indigo-300 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/Kauasx09-Henrique/clinicaped-app-mobile"
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

          {/* Projeto Disbussines Web */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500/50 transition-all group"
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col sm:flex-row items-start">
              <div className="bg-indigo-600 p-4 rounded-lg mr-0 sm:mr-6 mb-4 sm:mb-0">
                {ProjectIcons.web}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                  Disbussines Web - Sistema de Gestão de Negócios
                </h3>
                <p className="mb-4 text-gray-400">
                  Aplicação web completa para gerenciamento de negócios, com controle de vendas, clientes, produtos e geração de relatórios. Projeto de conclusão de curso (TCC).
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Responsivo",
                  ].map((tag) => (
                    <span key={tag} className="text-xs bg-indigo-900/40 text-indigo-300 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/Kauasx09-Henrique/disbussines-web"
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

          {/* Projeto Portfólio Pessoal */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500/50 transition-all group"
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col sm:flex-row items-start">
              <div className="bg-indigo-600 p-4 rounded-lg mr-0 sm:mr-6 mb-4 sm:mb-0">
                {ProjectIcons.personal}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                  Portfólio Pessoal
                </h3>
                <p className="mb-4 text-gray-400">
                  Site pessoal (este que você está vendo) criado com as tecnologias mais modernas para exibir meus projetos, habilidades e informações de contato.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js", "Tailwind CSS", "React", "Framer Motion"].map((tag) => (
                    <span key={tag} className="text-xs bg-indigo-900/40 text-indigo-300 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/kauahenriquedev/portfolio"
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
        </div>
      </motion.section>

      {/* Rodapé */}
      <footer className="w-full text-center py-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Kauã Henrique. Todos os direitos reservados.
      </footer>
    </div>
  );
}