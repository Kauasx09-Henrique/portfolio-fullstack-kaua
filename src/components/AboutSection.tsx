"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaWhatsapp, FaEnvelope, FaLinkedinIn } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Mantido para FaMapMarkerAlt se não estiver em fa6

type AboutSectionProps = {
  currentAccent: string;
};
const SocialIcon = ({
  href,
  children,
  currentAccent
}: {
  href: string;
  children: React.ReactNode;
  currentAccent: string;
}) => (
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

const AboutSection: React.FC<AboutSectionProps> = ({ currentAccent }) => {
  const calculateAge = () => {
    const birthday = new Date('2005-07-06');
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  };

  const [age, setAge] = useState(calculateAge());
  const [isHovered, setIsHovered] = useState(false); 

  useEffect(() => {
    setAge(calculateAge());
  }, []);

  const whatsappPhoneNumber = "556185543250"; 
  const whatsappPredefinedMessage = encodeURIComponent("Olá Kauã, vi seu portfólio e gostaria de conversar sobre um projeto!");

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0d071a]">
     
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <motion.div
          className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: `radial-gradient(circle, ${currentAccent}80, transparent 70%)` }}
          animate={{ y: [0, 30, 0], x: [0, -40, 0], rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-[5%] right-[10%] w-80 h-80 rounded-full blur-3xl opacity-25"
          style={{ background: `radial-gradient(circle, ${currentAccent}AA, transparent 70%)` }}
          animate={{ y: [0, -25, 0], x: [0, 30, 0], rotate: [0, -360], scale: [1, 0.9, 1] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
        ></motion.div>
      
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl opacity-15"
          style={{ background: `radial-gradient(circle, ${currentAccent}CC, transparent 70%)` }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }} 
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
    
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Sobre <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">Mim</span>
          </motion.h2>
          <motion.div
            className="w-28 h-1.5 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-indigo-400"
            initial={{ width: 0 }}
            whileInView={{ width: "7rem" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} // Transição mais lenta
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16 items-center">
          {/* Coluna da Imagem (Esquerda) */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -100, scale: 0.7 }} // Vem da esquerda e menor
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.5 }} // Animação de mola
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
         
              <motion.div 
                className="absolute -inset-6 rounded-full blur-xl opacity-70 animate-pulse-slow"
                style={{ background: `linear-gradient(135deg, ${currentAccent}E0, ${currentAccent}B0)` }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.9, 0.7],
                  rotate: [0, 10, -10, 0] // Leve rotação
                }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              ></motion.div>

              <motion.div
                className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl"
                animate={{
                  boxShadow: isHovered
                    ? `0 0 50px ${currentAccent}FF, 0 0 80px ${currentAccent}C0` 
                    : "0 10px 40px rgba(0, 0, 0, 0.5)" 
                }}
                transition={{ duration: 0.4 }} 
              >
                <Image
                  src="/Foto_Kaua.jpg"
                  alt="Foto de Kauã Henrique"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/600x600/1e0d3c/c4b5fd?text=Kauã+Henrique';
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d071a] opacity-30"
                  animate={{ opacity: isHovered ? 0.6 : 0 }} 
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.div>
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-bold shadow-xl" // Maior e com mais sombra
                initial={{ opacity: 0, y: 50, scale: 0.8 }} // Vem de mais abaixo e menor
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 50,
                  scale: isHovered ? 1 : 0.8
                }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }} // Transição de mola
              >
                Kauã Henrique
              </motion.div>
            </div>
          </motion.div>

          {/* Coluna de Conteúdo (Direita) */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-[#1e0d3c] rounded-2xl p-8 shadow-2xl border border-purple-700 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1, y: 0,
                transition: {
                  delay: 0.8, // Atraso para o bloco principal de texto
                  duration: 0.9,
                  ease: "easeOut",
                  staggerChildren: 0.15, // Atraso para os filhos
                  delayChildren: 0.9 // Atraso para o stagger
                }
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Elemento decorativo interno com movimento */}
              <motion.div
                className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-15"
                style={{
                  background: `radial-gradient(circle, ${currentAccent}AA, transparent 70%)`,
                }}
                animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1, 1.05, 1] }} // Leve movimento
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
              ></motion.div>

              <motion.h3
                className="text-3xl font-extrabold mb-6 flex items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", damping: 15, stiffness: 200, delay: 1 }} // Atraso para o título
              >
                <span className="mr-3 text-purple-400">👋</span>
                Desenvolvedor apaixonado por criar soluções inteligentes
              </motion.h3>

              <motion.div
                className="text-gray-200 mb-8 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 1.1 // Atraso para os parágrafos
                  }
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.p
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ type: "spring", damping: 15, stiffness: 200 }}
                >
                  Meu nome é <strong style={{ color: currentAccent }}>Kauã Henrique Santos de Araujo</strong>, tenho <strong style={{ color: currentAccent }}>{age} anos</strong> e sou um desenvolvedor com formação técnica em Informática pela Escola Técnica de Ceilândia.
                </motion.p>
                <motion.p
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ type: "spring", damping: 15, stiffness: 200 }}
                >
                  Atualmente, curso o 4º semestre de Análise e Desenvolvimento de Sistemas no IESB Oeste e atuo como estagiário de TI no Censipam.
                </motion.p>
                <motion.div
                  className="mt-4 p-5 rounded-xl border-l-4 bg-[#2a1a4a]"
                  style={{ borderColor: currentAccent }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  whileHover={{
                    scale: 1.01,
                    boxShadow: `0 12px 30px ${currentAccent}30`
                  }}
                >
                  <p className="text-gray-100">
                    Tenho experiência em desenvolvimento web e mobile com foco em front-end, back-end, banco de dados SQL e React Native. Busco unir desempenho, acessibilidade e uma boa experiência do usuário em cada projeto.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 1.2
                  }
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className="flex items-start bg-[#2a1a4a] p-5 rounded-xl border border-purple-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ type: "spring", damping: 15, stiffness: 200 }}
                  whileHover={{ y: -5, boxShadow: `0 8px 20px ${currentAccent}20` }}
                >
                  <div className="p-3 rounded-xl mr-4 bg-purple-700">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">Formação</h4>
                    <p className="text-gray-300">Técnico em Informática & Análise e Desenvolvimento de Sistemas</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start bg-[#2a1a4a] p-5 rounded-xl border border-indigo-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ type: "spring", damping: 15, stiffness: 200 }}
                  whileHover={{ y: -5, boxShadow: `0 8px 20px ${currentAccent}20` }}
                >
                  <div className="p-3 rounded-xl mr-4 bg-indigo-700">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">Experiência</h4>
                    <p className="text-gray-300">Estagiário de TI no Censipam</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="border-t border-purple-700 pt-6"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 1.3
                  }
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h4 className="font-bold text-lg text-white mb-4 flex items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ type: "spring", damping: 15, stiffness: 200 }}>
                  <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Entre em contato
                </motion.h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <motion.div
                    className="flex items-center rounded-xl p-4 bg-[#2a1a4a] border border-purple-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200 }}
                    whileHover={{ scale: 1.02, boxShadow: `0 8px 20px ${currentAccent}20` }}
                  >
                    <div className="p-3 rounded-xl mr-3 bg-purple-700 border border-purple-600">
                      <FaEnvelope className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="block text-sm text-purple-400 font-medium">Email</span>
                      <span className="text-gray-100 font-medium">kauahenriquesx09@gmail.com</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center rounded-xl p-4 bg-[#2a1a4a] border border-indigo-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200 }}
                    whileHover={{ scale: 1.02, boxShadow: `0 8px 20px ${currentAccent}20` }}
                  >
                    <div className="p-3 rounded-xl mr-3 bg-indigo-700 border border-indigo-600">
                      <a
                        href={`https://wa.me/${whatsappPhoneNumber}?text=${whatsappPredefinedMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full"
                        aria-label="Fale comigo no WhatsApp"
                      >
                        <FaWhatsapp className="h-5 w-5 text-white" />
                      </a>
                    </div>
                    <div>
                      <span className="block text-sm text-indigo-400 font-medium">WhatsApp</span>
                      <span className="text-gray-100 font-medium">+55 (61) 8544-3250</span>
                    </div>
                  </motion.div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-bold text-white">Redes sociais:</span>
                  <div className="flex gap-3">
                    <SocialIcon href="https://github.com/Kauasx09-Henrique" currentAccent="#a78bfa">
                      <FaGithub size={20} />
                    </SocialIcon>
                    <SocialIcon href="https://www.linkedin.com/in/kau%C3%A3-henrique-6b2617273/" currentAccent="#6366f1">
                      <FaLinkedinIn size={20} />
                    </SocialIcon>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;