// src/components/Footer.js
import React from 'react';
import { FaGithub, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a192f] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="text-3xl font-bold mb-6">
            <span className="text-[#57e9f8]">Kauã</span> Henrique
          </div>
          
          <p className="text-gray-400 text-center max-w-lg mb-8">
            Desenvolvedor Full Stack criando soluções digitais inovadoras e eficientes.
          </p>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/Kauasx09-Henrique" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#57e9f8] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            
            <a 
              href="https://wa.me/556185543250" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#57e9f8] transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
          
          <a 
            href="https://wa.me/556185543250?text=Opa%20Kauã,%20gostaria%20de%20pedir%20para%20você%20realizar%20um%20sistema%20ou%20site" 
            className="bg-[#57e9f8] hover:bg-[#1ad0e2] text-[#0a192f] font-bold py-3 px-6 rounded-full transition-colors flex items-center"
          >
            <FaWhatsapp className="mr-2" />
            Fale comigo no WhatsApp
          </a>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500">
                &copy; {currentYear} Kauã Henrique. Todos os direitos reservados.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center text-gray-400">
                <FaEnvelope className="text-[#57e9f8] mr-2" />
                <span>kauahenriquesx09@gmail.com</span>
              </div>
              
              <div className="flex items-center text-gray-400">
                <FaWhatsapp className="text-[#57e9f8] mr-2" />
                <span>+55 (61) 8554-3250</span>
              </div>
              
              <div className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="text-[#57e9f8] mr-2" />
                <span>Brasília, Brasil</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center text-gray-500">
            <p>
              Desenvolvido Por Kauã Henrique 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;