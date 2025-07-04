// src/components/HomeScreen.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Image from 'next/image';




const HomeScreen = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "ClinicaPed+",
      description: "Sistema completo de Marcação de Consultas",
      tags: ["ReactNative", "Nestjs", "PostgreSQL"],
      imagem: '/Clinicaped.jpg',
    },
    {
      id: 2,
      title: "Site para Psicóloga Vanessa",
      description: "Site institucional para psicóloga com agendamento online",
      tags: ["React", "TypeScript", "UI/UX"],
      imagem: '/Vanessa_web.jpg', 
    },
    {
      id: 3,
      title: "Sistema de E-Commerce",
      description: "Plataforma para visualizar microempreededores e seus produtos",
      tags: ["PHP", "MYSQL", "HTML/CSS" , "JavaScript"],
      imagem: '/Diss_tcc.jpg', 
    },
  ];

  // Rotação automática dos projetos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 md:pt-16 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4">
        {/* Coluna Esquerda - Texto e Botões */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Olá, eu sou <span className="text-[#57e9f8]">Kauã Henrique</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-gray-500 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            
          >
            Desenvolvedor Full Stack
          </motion.h2>

          <motion.p
            className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Transformo ideias em soluções digitais inovadoras com tecnologias modernas
            e código de qualidade. Especializado em criar experiências únicas que encantam usuários.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className="bg-[#57e9f8] hover:bg-[#1ad0e2] text-black font-bold py-3 px-8 rounded-full transition-all cursor-pointer shadow-lg hover:shadow-xl shadow-[#57e9f8]/30"
              >
                Ver Projetos
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#contact"
                className="border-2 border-[#57e9f8] text-[#57e9f8] hover:bg-[#57e9f8] hover:text-white font-bold py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Contato
              </a>
            </motion.div>
          </motion.div>

          {/* Seção "Sobre Mim" em destaque (RESTAURADA) */}
          <motion.div
            className="mt-16 bg-white p-6 rounded-xl border border-[#57e9f8]/20 shadow-lg max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-start">
              <div className="bg-[#57e9f8] p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#0a192f]">Sobre Mim</h3>
                <p className="text-gray-700">
                  Sou um desenvolvedor apaixonado por criar soluções digitais que fazem a diferença. Com experiência em diversas tecnologias, busco sempre aprender e me aprimorar para entregar o melhor resultado possível.
                </p>
              </div>
            </div>
            <motion.div
              className="mt-4 flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {["React", "Node.js", "TypeScript", "UI/UX", "PHP" , "JAVASCRIPT" , "NEST.JS","SQL" , "REACT NATIVE" , "TALLWIND CSS" , "HTML5" , "CSS3"].map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-[#e6fdfe] text-[#0a192f] rounded-full text-sm"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#57e9f8",
                    color: "#fff"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Coluna Direita - Carrossel de Projetos */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Container do carrossel */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="absolute inset-0"
                animate={{
                  opacity: index === currentProject ? 1 : 0,
                  scale: index === currentProject ? 1 : 0.95,
                  zIndex: index === currentProject ? 10 : 0,
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                {/* ✅ CORREÇÃO APLICADA AQUI */}
                {project.imagem && (
                  <Image
                    src={project.imagem}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    quality={85}
                    className="z-10"
                  />
                )}
                <div className="absolute inset-0 z-20 flex items-end bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <div className="p-8 text-white w-full">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-[#57e9f8] bg-opacity-20 text-[#a0f3fd] rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Controles do carrossel */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentProject ? 'bg-[#57e9f8] scale-125' : 'bg-white bg-opacity-50'
                  }`}
                  aria-label={`Ir para projeto ${index + 1}`}
                />
              ))}
            </div>

            {/* Indicador de projeto atual */}
            <div className="absolute top-6 right-6 z-30 bg-[#57e9f8] text-[#0a192f] px-4 py-2 rounded-full font-bold">
              {currentProject + 1}/{projects.length}
            </div>
          </div>

          {/* Elementos decorativos animados (RESTAURADOS) */}
          <motion.div
            className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#57e9f8] opacity-20 -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-[#57e9f8] opacity-30 -z-10"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeScreen;

