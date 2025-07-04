// src/components/Header.js
"use client";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { id: 'home', text: 'Início' },
    { id: 'about', text: 'Sobre' },
    { id: 'skills', text: 'Habilidades' },
    { id: 'projects', text: 'Projetos' },
    { id: 'contact', text: 'Contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    closed: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.05 }}>
          <span className="text-[#57e9f8]">Port</span>folio
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <motion.li key={link.id} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={link.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="text-[#57e9f8] font-bold"
                  className="text-gray-700 hover:text-[#57e9f8] cursor-pointer transition-colors font-medium relative px-3 py-2"
                >
                  {link.text}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#57e9f8]"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-gray-700 z-50 relative w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <div className="relative w-full h-full">
            <motion.span
              className="absolute block w-full h-0.5 bg-gray-700 rounded-full"
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { top: '0.25rem', rotate: 0 },
                open: { top: '0.8rem', rotate: 45 },
              }}
            />
            <motion.span
              className="absolute block w-full h-0.5 bg-gray-700 rounded-full"
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { top: '0.8rem', opacity: 1 },
                open: { top: '0.8rem', opacity: 0 },
              }}
            />
            <motion.span
              className="absolute block w-full h-0.5 bg-gray-700 rounded-full"
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { top: '1.35rem', rotate: 0 },
                open: { top: '0.8rem', rotate: -45 },
              }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  variants={itemVariants}
                  className="border-b border-gray-100 last:border-0"
                >
                  <Link
                    to={link.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="block py-4 px-6 text-gray-700 hover:text-[#57e9f8] cursor-pointer transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                    <motion.span
                      className="block w-0 h-0.5 bg-[#57e9f8] mt-1"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
