"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion'; // Importa AnimatePresence para o carrossel
import Image from 'next/image';

// --- Componente SocialIcon (mantido para compatibilidade, se usado em outras seções) ---
type SocialIconProps = {
  href: string;
  children: React.ReactNode;
  currentAccent: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ href, children, currentAccent }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md transform hover:scale-110"
    style={{
      backgroundColor: "#f0f9ff",
      color: currentAccent,
      boxShadow: `0 4px 12px ${currentAccent}40`,
    }}
    whileHover={{
      scale: 1.15,
      backgroundColor: currentAccent,
      color: "#fff",
      boxShadow: `0 0 25px ${currentAccent}BB`,
      y: -3
    }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.a>
);
// --- Fim do Componente SocialIcon ---


const HomeScreen = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);

  const projects = [
    {
      id: 1,
      title: "ClinicaPed+",
      description: "Sistema completo de marcação de consultas pediátricas com funcionalidades avançadas e gestão de prontuários.",
      tags: ["React Native", "NestJS", "PostgreSQL"],
      imagem: '/Clinicaped.jpg',
      accentColor: "#00f721ff" // Verde para este projeto
    },
    {
      id: 2,
      title: "Site Psicóloga Vanessa",
      description: "Plataforma profissional e responsiva com agendamento online intuitivo e área do paciente segura.",
      tags: ["React", "TypeScript", "UI/UX Design"],
      imagem: '/Vanessa_web.jpg',
      accentColor: "#8c00ffff" // Roxo para este projeto
    },
    {
      id: 3,
      title: "Sistema Disbusines",
      description: "Marketplace robusto para microempreendedores locais, incluindo gestão de produtos, pedidos e usuários.",
      tags: ["PHP", "MySQL", "JavaScript", "CSS3"],
      imagem: '/Disbusines.png',
      accentColor: "#00d9ffff" // Vermelho para este projeto
    },
    {
      id: 4,
      title: "MavaConnect+",
      description: "Plataforma voltada para igrejas com gestão de visitantes, integração com WhatsApp e painéis administrativos.",
      tags: ["Node.js", "Express", "React", "Tailwind", "PostgreSQL"],
      imagem: '/Mavaconnect.jpg',
      accentColor: "#5AC8FA" // Azul claro, cor já usada no tema
    }

  ];


  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHoveringCarousel) {
      interval = setInterval(() => {
        setCurrentProject(prev => (prev + 1) % projects.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isHoveringCarousel, projects.length]);

  const goToProject = useCallback((index: number) => {
    setCurrentProject(index);
  }, []);

  const currentAccent = projects[currentProject]?.accentColor || "#a78bfa";
  const textGradient = `linear-gradient(to right, #e2e8f0, #cbd5e1)`;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-12 md:pt-16 overflow-hidden relative"
      style={{
        background: 'radial-gradient(circle at 10% 20%, #0a192f 0%, #020617 100%)'
      }}
    >

      <motion.div
        className="absolute top-1/4 left-[15%] w-72 h-72 rounded-full mix-blend-screen blur-xl opacity-20"
        style={{ backgroundColor: currentAccent }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 20, 0], x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-[10%] w-96 h-96 rounded-full mix-blend-screen blur-xl opacity-25"
        style={{ backgroundColor: currentAccent }}
        animate={{ scale: [1, 0.9, 1], rotate: [0, -15, 0], x: [0, 25, 0], y: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, ${currentAccent}20, transparent 60%), radial-gradient(circle at 80% 20%, ${currentAccent}20, transparent 60%)`,
          backgroundSize: '200% 200%'
        }}
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 xl:gap-16 items-center px-4 relative z-10">

        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 bg-[#0f172a]/70 rounded-full border border-[#1e293b]/50 backdrop-blur-sm"
          >
            <span className="text-sm text-[#94a3b8]">Bem-vindo ao meu portfólio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent"
            style={{ backgroundImage: textGradient }}
          >
            Olá, eu sou <motion.span
              style={{ color: currentAccent }}
              animate={{ filter: [`drop-shadow(0 0px 0px ${currentAccent}00)`, `drop-shadow(0 0px 8px ${currentAccent}80)`, `drop-shadow(0 0px 0px ${currentAccent}00)`] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >Kauã Henrique</motion.span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-xl md:text-2xl text-[#94a3b8] mb-8 font-medium"
          >
            Desenvolvedor Full Stack & UI/UX
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-[#cbd5e1] mb-8 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed"
          >
            Transformo ideias em soluções digitais com tecnologias modernas e
            <span className="font-semibold" style={{ color: currentAccent }}> designs impactantes</span>.
            Especializado em criar experiências que encantam usuários e resolvem problemas reais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, staggerChildren: 0.15 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: `0 10px 30px -5px ${currentAccent}50` }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={700}
                className="inline-block font-bold py-3 px-8 rounded-full transition-all cursor-pointer"
                style={{
                  background: currentAccent,
                  color: '#0f172a',
                }}
              >
                Ver Projetos
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: `0 4px 20px -3px ${currentAccent}40` }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={700}
                className="inline-block font-bold py-3 px-8 rounded-full transition-all border-2 cursor-pointer"
                style={{
                  borderColor: currentAccent,
                  color: currentAccent,
                }}
              >
                Contato
              </Link>
            </motion.div>
          </motion.div>


          <motion.div
            className="p-6 rounded-xl max-w-lg mx-auto lg:mx-0 border border-[#1e293b]/70 bg-gradient-to-br from-[#0f172a] to-[#071427] shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            whileHover={{ scale: 1.01, boxShadow: `0 15px 40px -8px ${currentAccent}40` }} // Sombra no hover
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="p-3 rounded-full flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${currentAccent}30, ${currentAccent}10)` }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5, type: "spring", stiffness: 300 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" style={{ color: currentAccent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </motion.div>
              <div>
                <motion.h3
                  className="text-xl font-bold mb-3 text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                >Minha Jornada</motion.h3>
                <motion.p
                  className="text-[#cbd5e1] mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                >
                  Desenvolvedor full-stack com 3 anos de experiência criando soluções digitais.
                  Especializado em React, Node.js e design de interfaces que combinam
                  <span style={{ color: currentAccent }}> funcionalidade</span> e
                  <span style={{ color: currentAccent }}> estética</span>.
                </motion.p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "TypeScript", "UI/UX", "PHP", "JavaScript", "NestJS", "PostgreSQL", "React Native", "Tailwind CSS", "Figma"].map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        background: `linear-gradient(90deg, ${currentAccent}20, ${currentAccent}10)`,
                        color: '#e2e8f0',
                        border: `1px solid ${currentAccent}20`
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8 + index * 0.05, duration: 0.3 }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: `${currentAccent}30`,
                        borderColor: currentAccent
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative lg:h-[600px] flex items-center justify-center perspective-1000"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
        >
          <div
            className="relative w-full h-[500px] md:h-[550px] lg:h-full overflow-hidden rounded-3xl border border-[#1e293b] shadow-2xl transform-style-3d transition-all duration-300" // transform-style-3d
            onMouseEnter={() => setIsHoveringCarousel(true)}
            onMouseLeave={() => setIsHoveringCarousel(false)}
            style={{ boxShadow: `0 10px 40px -5px ${currentAccent}30` }}
          >
            <AnimatePresence initial={false} mode="wait">
              {projects.map((project, index) => (
                index === currentProject && (
                  <motion.div
                    key={project.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: 90 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.imagem && (
                      <Image
                        src={project.imagem}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        quality={90}
                        className="z-10"
                      />
                    )}
                    <div
                      className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8"
                      style={{ background: `linear-gradient(0deg, #000000D0 0%, ${project.accentColor}00 100%)` }}
                    >
                      <div className="text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                        <p className="mb-4 text-[#e2e8f0] max-w-md">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              className="px-3 py-1 rounded-full text-sm"
                              style={{
                                backgroundColor: `${project.accentColor}20`,
                                color: '#e2e8f0',
                                border: `1px solid ${project.accentColor}30`
                              }}
                              whileHover={{ scale: 1.05, backgroundColor: `${project.accentColor}40` }}
                              transition={{ duration: 0.2 }}>
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2 backdrop-blur-sm p-2 rounded-full bg-black/30">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentProject ? 'scale-125' : 'opacity-50 hover:opacity-100'}`}
                  style={{
                    backgroundColor: index === currentProject ? currentAccent : '#e2e8f0'
                  }}
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Ir para projeto ${index + 1}`}
                />
              ))}
            </div>
            <div
              className="absolute top-6 right-6 z-30 px-4 py-2 rounded-full font-bold backdrop-blur-sm"
              style={{
                backgroundColor: `${currentAccent}20`,
                color: '#e2e8f0',
                border: `1px solid ${currentAccent}30`
              }}
            >
              {currentProject + 1}<span className="text-[#94a3b8]">/{projects.length}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeScreen;