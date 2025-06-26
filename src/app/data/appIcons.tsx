// app/data/appIcons.tsx
"use client";

import React from 'react';

// IMPORTANTE: Importamos os ícones diretamente da biblioteca react-icons
import {
  DiReact,
  DiPhp,
  DiMysql,
  DiJavascript1,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
} from 'react-icons/di';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
} from 'react-icons/si';

// --- 1. Ícones das Tecnologias (usando react-icons) ---
// Agora os ícones são componentes React, mais confiáveis e fáceis de customizar.
export const icons = {
  React: (
    <DiReact size={32} className="mx-auto text-cyan-400" />
  ),
  "Next.js": (
    <SiNextdotjs size={32} className="mx-auto" /> // Este ícone já é preto e branco por padrão
  ),
  PHP: (
    <DiPhp size={32} className="mx-auto text-indigo-400" />
  ),
  SQL: (
    <DiMysql size={32} className="mx-auto text-blue-500" />
  ),
  JavaScript: (
    <DiJavascript1 size={32} className="mx-auto text-yellow-400 bg-black" />
  ),
  TypeScript: (
    <SiTypescript size={32} className="mx-auto text-blue-500" />
  ),
  "Tailwind CSS": (
    <SiTailwindcss size={32} className="mx-auto text-cyan-500" />
  ),
  "Node.js": (
    <DiNodejsSmall size={32} className="mx-auto text-green-500" />
  ),
  "React Native": (
    <DiReact size={32} className="mx-auto text-cyan-400" /> // Reutilizando o ícone do React
  ),
  NestJS: (
    <SiNestjs size={32} className="mx-auto text-red-500" />
  ),
  HTML5: (
    <DiHtml5 size={32} className="mx-auto text-orange-500" />
  ),
  CSS3: (
    <DiCss3 size={32} className="mx-auto text-blue-600" />
  ),
  "MySQL Workbench": (
    <DiMysql size={32} className="mx-auto text-blue-500" /> // Reutilizando o ícone do MySQL
  ),
};

// --- 2. Ícones dos Projetos (ESSA PARTE NÃO MUDOU) ---
export const ProjectIcons = {
  mobile: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  web: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 01-9-9" />
    </svg>
  ),
  personal: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  github: (
    <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
};

// --- 3. Imagem de Perfil (ESSA PARTE NÃO MUDOU) ---
// Garanta que a imagem "Kaua.jpg" esteja na pasta /public do seu projeto.
export const profileImageUrl = "/Kaua.jpg";