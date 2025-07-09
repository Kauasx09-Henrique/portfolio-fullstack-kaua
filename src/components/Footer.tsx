// src/components/Footer.tsx
"use client"; // Necessário para usar motion e hooks do React

import * as React from 'react';
import { motion } from 'framer-motion';
// Importação dos ícones da família FA6 (moderna), e FaMapMarkerAlt de 'fa' se necessário
import { FaGithub, FaWhatsapp, FaEnvelope, FaLinkedinIn } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './style/Footer.css'; // Importação do CSS específico do Footer

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Informações de contato centralizadas
  const contactInfo = {
    name: "Kauã Henrique",
    email: "kauahenriquesx09@gmail.com",
    phone: "+55 (61) 8554-3250",
    phoneRaw: "556185543250",
    location: "Brasília, Brasil",
    githubUrl: "https://github.com/Kauasx09-Henrique",
    linkedinUrl: "https://www.linkedin.com/in/kau%C3%A3-henrique-6b2617273/", // Adicionado URL do LinkedIn
    whatsappMessage: "Olá Kauã, gostaria de conversar sobre um projeto.",
  };

  // Cores de destaque para o footer, consistentes com o portfólio
  const footerBgGradientStart = '#0d071a'; // Roxo muito escuro
  const footerBgGradientEnd = '#1a0d3c';   // Roxo escuro
  const accentPurple = '#8b5cf6';          // Roxo vibrante (main accent)
  const lightPurpleText = '#e0e7ff';       // Roxo claro para texto
  const mediumPurpleText = '#c4b5fd';      // Roxo médio para texto
  const darkPurpleText = '#a78bfa';        // Roxo um pouco mais escuro para links
  const indigoAccent = '#6366f1';          // Índigo para toques

  // Animações para os elementos internos do footer (agora seguindo a tipagem correta)

  return (
    <motion.footer
      className="footer relative overflow-hidden"
      aria-label="Rodapé"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }} // Transição como prop separada
      style={{
        background: `linear-gradient(to bottom, ${footerBgGradientStart} 0%, ${footerBgGradientEnd} 100%)`,
        borderTop: `1px solid ${accentPurple}33`
      }}
    >
      {/* Elementos decorativos de fundo animados */}
      <motion.div
        className="absolute bottom-1/4 left-[5%] w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: accentPurple }}
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} // Transição como prop separada
      ></motion.div>
      <motion.div
        className="absolute top-1/4 right-[5%] w-56 h-56 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ backgroundColor: indigoAccent }}
        animate={{ scale: [1, 0.9, 1], x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }} // Transição como prop separada
      ></motion.div>


      <div className="footer-container relative z-10">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }} // Transição como prop separada
        >
          <motion.h2
            className="footer-name"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }} // Transição como prop separada
          >
            <span className="name-highlight">Kauã</span> Henrique
          </motion.h2>

          <motion.p
            className="footer-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }} // Transição como prop separada
          >
            Desenvolvedor Full Stack criando soluções digitais inovadoras e eficientes.
          </motion.p>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.5 }} // Transição como prop separada
          >
            {/* Ícone do GitHub */}
            <motion.a
              href={contactInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }} // Transição como prop separada
              whileHover={{ scale: 1.2, color: accentPurple, boxShadow: `0 0 20px ${accentPurple}66` }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={28} />
            </motion.a>
            {/* Ícone do LinkedIn */}
            <motion.a
              href={contactInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} // Transição como prop separada
              whileHover={{ scale: 1.2, color: indigoAccent, boxShadow: `0 0 20px ${indigoAccent}66` }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedinIn size={28} />
            </motion.a>

          </motion.div>

          <motion.a
            href={`https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
            className="whatsapp-button"
            aria-label="Fale comigo no WhatsApp"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }} // Transição como prop separada
            whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${accentPurple}99` }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: `linear-gradient(to right, ${accentPurple}, ${indigoAccent})`,
              color: lightPurpleText,
            }}
          >
            <FaWhatsapp className="whatsapp-icon" size={20} />
            Fale comigo no WhatsApp
          </motion.a>
        </motion.div>

        {/* Linha divisória animada */}
        <motion.div
          className="footer-divider"
          initial={{ width: 0 }}
          whileInView={{ width: "80%" }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.2, ease: "easeOut" }} // Transição como prop separada
          style={{
            background: `linear-gradient(to right, transparent, ${accentPurple}55, transparent)`
          }}
        ></motion.div>

        <div className="footer-bottom">
          <motion.div
            className="footer-bottom-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.8 }} // Transição como prop separada
          >
            <motion.div className="contact-details">
              <motion.div
                className="contact-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }} // Transição como prop separada
              >
                <FaEnvelope className="contact-icon" size={20} />
                <span style={{ color: mediumPurpleText }}>{contactInfo.email}</span>
              </motion.div>

              <motion.div
                className="contact-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} // Transição como prop separada
              >
                <FaWhatsapp className="contact-icon" size={20} />
                <span style={{ color: mediumPurpleText }}>{contactInfo.phone}</span>
              </motion.div>

              <motion.div
                className="contact-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} // Transição como prop separada
              >
                <FaMapMarkerAlt className="contact-icon" size={20} />
                <span style={{ color: mediumPurpleText }}>{contactInfo.location}</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="copyright"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }} // Transição como prop separada
            >
              <p style={{ color: mediumPurpleText }}>
                &copy; {currentYear} {contactInfo.name}. Todos os direitos reservados.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="developer-credit"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 }} // Transição como prop separada
          >
         
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;