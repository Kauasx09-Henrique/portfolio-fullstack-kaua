// src/components/AboutSection.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full bg-[#e6fdfe] text-[#0a192f] flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md"
    whileHover={{
      scale: 1.1,
      backgroundColor: "#57e9f8",
      color: "#fff",
      boxShadow: "0 0 15px rgba(87, 233, 248, 0.5)"
    }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const AboutSection = () => {
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

  useEffect(() => {
    setAge(calculateAge());
  }, []);

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-[#f0fcfe]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-[#0a192f]"
          >
            Sobre <span className="text-[#57e9f8]">Mim</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#57e9f8] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Coluna da Imagem */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#57e9f8] to-[#1ad0e2] rounded-full blur-xl opacity-50 animate-pulse-slow"></div>
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/Kaua.jpg"
                  alt="Foto de Kauã Henrique"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/600x600/E6FDFE/0A192F?text=Kauã+Henrique';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Coluna de Texto */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#e0f7fa]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.h3
                className="text-3xl font-bold mb-6 text-[#0a192f] flex items-center"
              >
                <span className="mr-3">👋</span> Desenvolvedor apaixonado por criar soluções inteligentes
              </motion.h3>
              
              <motion.div
                className="prose prose-lg text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <p>
                  Meu nome é <strong>Kauã Henrique Santos de Araujo</strong>, tenho <strong>{age} anos</strong> e sou um desenvolvedor com formação técnica em Informática pela Escola Técnica de Ceilândia.
                </p>
                <p>
                  Atualmente, curso o 4º semestre de Análise e Desenvolvimento de Sistemas no IESB Oeste e atuo como estagiário de TI no Censipam.
                </p>
                <p className="mt-4 bg-[#f0fdff] p-4 rounded-lg border-l-4 border-[#57e9f8]">
                  Tenho experiência em desenvolvimento web e mobile com foco em front-end, back-end, banco de dados SQL e React Native. Busco unir desempenho, acessibilidade e uma boa experiência do usuário em cada projeto.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <div className="flex items-start">
                  <div className="bg-[#e6fdfe] p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#57e9f8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#0a192f]">Formação</h4>
                    <p className="text-gray-600">Técnico em Informática & Análise e Desenvolvimento de Sistemas</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#e6fdfe] p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#57e9f8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#0a192f]">Experiência</h4>
                    <p className="text-gray-600">Estagiário de TI no Censipam</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="border-t border-[#e0f7fa] pt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <h4 className="font-bold text-lg text-[#0a192f] mb-4">Entre em contato</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="bg-[#e6fdfe] p-2 rounded-lg mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#57e9f8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Email</span>
                      <span className="text-gray-700 font-medium">kauahenriquesx09@gmail.com</span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-[#e6fdfe] p-2 rounded-lg mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#57e9f8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">WhatsApp</span>
                      <span className="text-gray-700 font-medium">+55 (61) 8544-3250</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-bold text-[#0a192f]">Redes sociais:</span>
                  <div className="flex gap-3">
                    <SocialIcon href="https://github.com/Kauasx09-Henrique">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </SocialIcon>
                    <SocialIcon href="https://www.linkedin.com/in/kau%C3%A3-henrique-6b2617273/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
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