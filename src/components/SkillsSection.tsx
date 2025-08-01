// src/components/SkillsSection.js
"use client"; // Necessário para usar hooks do React e Framer Motion em componentes de cliente

import React from 'react';
import { motion } from 'framer-motion'; // Importa motion para animações
// Novos Ícones do Font Awesome 6 (fa6)
import {
  FaCode, // Ícone para "Conhecimentos Técnicos"
  FaGraduationCap, // Ícone para "Educação & Experiência"
  FaShieldHalved, // Ícone para "Minha Abordagem" (ou FaLightbulb, FaHeart, FaStar)
  FaCircleDot // Ícone para os pontos das skills
} from 'react-icons/fa6';


const SkillsSection = () => {
  // Define uma cor de destaque roxa para esta seção, para manter a coesão visual
  const sectionAccentColor = "#a78bfa"; // Roxo claro
  const sectionAccentDark = "#8b5cf6";  // Roxo médio
  const sectionAccentLight = "#c4b5fd"; // Roxo bem claro

  const technicalSkills = [
    { category: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "React Native", "Next.js", "Tailwind CSS"] },
    { category: "Backend", skills: ["Node.js", "Express.js", "NestJS", "PHP", "RESTful APIs"] },
    { category: "Banco de Dados", skills: ["MySQL", "PostgreSQL"] },
    { category: "Ferramentas", skills: ["Git", "GitHub", "Figma", "VSCode"] }
  ];

  const experience = [
    {
      title: "Curso Técnico em Informática",
      institution: "Escola Técnica de Ceilândia",
      period: "Concluído",
      description: "Formação técnica com foco em desenvolvimento web e programação."
    },
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "IESB Oeste",
      period: "4º semestre em andamento",
      description: "Graduação com ênfase em engenharia de software e arquitetura de sistemas."
    },
    {
      title: "Estagiário de TI",
      institution: "Censipam",
      period: "2025 - Presente", // Atualizado para o ano correto, se necessário
      description: "Desenvolvimento e manutenção de sistemas para proteção da Amazônia."
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0d071a] relative overflow-hidden">
      {/* Elementos decorativos de fundo animados */}
      <motion.div
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{ background: `radial-gradient(circle, ${sectionAccentDark}, transparent 70%)` }}
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full blur-3xl opacity-25"
        style={{ background: `radial-gradient(circle, ${sectionAccentColor}, transparent 70%)` }}
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            Minhas <span style={{ color: sectionAccentColor }}>Habilidades</span>
          </motion.h2>
          <motion.div
            className="w-28 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: "7rem" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            Tecnologias e conhecimentos que aplico para criar soluções inovadoras e robustas.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Card de Habilidades Técnicas */}
          <motion.div
            className="bg-[#1e0d3c] rounded-2xl p-8 shadow-xl border border-purple-800"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                damping: 18,
                stiffness: 150,
                delay: 0.4,
                staggerChildren: 0.1, // Animação em cascata para os filhos
                delayChildren: 0.2 // Atraso para os filhos começarem
              }
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="bg-purple-700 p-3 rounded-lg mr-4 shadow-md">
                <FaCode className="h-7 w-7 text-white" /> {/* Novo ícone */}
              </div>
              <h3 className="text-2xl font-bold text-white">Conhecimentos Técnicos</h3>
            </motion.div>

            <div className="space-y-6">
              {technicalSkills.map((category, index) => (
                <div key={index} className="mb-4">
                  <motion.h4
                    className="text-xl font-semibold mb-3 text-white flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.1 * index }} // Atraso para cada categoria
                  >
                    <span className="w-3.5 h-3.5 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mr-3 shadow-md"></span>
                    {category.category}
                  </motion.h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="px-4 py-2 bg-[#2a1a4a] text-gray-200 rounded-full flex items-center shadow-md transition-all duration-300 border border-purple-700"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ type: "spring", damping: 15, stiffness: 200, delay: (0.1 * index) + (0.05 * skillIndex) }} // Atraso duplo para efeito cascata mais complexo
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: sectionAccentColor,
                          color: '#fff',
                          boxShadow: `0 5px 15px ${sectionAccentColor}40`
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaCircleDot className="w-2.5 h-2.5 text-white rounded-full mr-2 shadow-sm" /> {/* Novo ícone de ponto */}
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card de Educação e Experiência */}
          <motion.div
            className="bg-[#1e0d3c] rounded-2xl p-8 shadow-xl border border-indigo-800"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                damping: 18,
                stiffness: 150,
                delay: 0.6, // Atraso um pouco maior que o primeiro card
                staggerChildren: 0.1, // Animação em cascata para os filhos
                delayChildren: 0.2 // Atraso para os filhos começarem
              }
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="bg-indigo-700 p-3 rounded-lg mr-4 shadow-md">
                <FaGraduationCap className="h-7 w-7 text-white" /> {/* Novo ícone */}
              </div>
              <h3 className="text-2xl font-bold text-white">Educação & Experiência</h3>
            </motion.div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 mb-6 border-l-2 border-gray-700"
                  initial={{ opacity: 0, x: -30 }} // Vem da esquerda
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.1 * index }} // Atraso para cada item da timeline
                  whileHover={{ x: 5, boxShadow: `0 5px 15px ${sectionAccentColor}20` }}
                >
                  <motion.div
                    className="absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 -translate-x-1/2 border-2 border-[#1e0d3c] shadow-sm"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * index + 0.5, duration: 0.3, type: "spring" }} // Animação do ponto na linha do tempo
                  ></motion.div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#2a1a4a] text-gray-300 rounded-full text-sm border border-purple-700">
                      {item.institution}
                    </span>
                    <span className="px-3 py-1 bg-[#2a1a4a] text-gray-300 rounded-full text-sm border border-indigo-700">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}

              {/* Box de Filosofia */}
              <motion.div
                className="bg-gradient-to-br from-[#1a0d3c] to-[#2a1a4a] p-6 rounded-xl border border-purple-700 mt-10 shadow-lg"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", damping: 18, stiffness: 150, delay: experience.length * 0.1 + 0.8 }} // Atraso após os itens de experiência
                whileHover={{ scale: 1.02, boxShadow: `0 10px 25px ${sectionAccentColor}30` }}
              >
                <motion.div
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: experience.length * 0.1 + 0.9 }}
                >
                  <div className="bg-purple-600 p-2 rounded mr-3 shadow-md">
                    <FaShieldHalved className="h-5 w-5 text-white" /> {/* Novo ícone */}
                  </div>
                  <h4 className="text-xl font-bold text-white">Minha Abordagem</h4>
                </motion.div>
                <motion.p
                  className="text-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: experience.length * 0.1 + 1.0 }}
                >
                  Busco unir desempenho, acessibilidade e experiência do usuário em cada projeto.
                  Minha filosofia é desenvolver soluções que não apenas funcionem bem, mas que também
                  sejam intuitivas e agradáveis de usar.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;