// src/components/Header.tsx
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Particles from "react-tsparticles"; // Certifique-se de ter instalado: npm install react-tsparticles tsparticles
import { loadFull } from "tsparticles"; // Importa para ter todas as funcionalidades

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const menuRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation(); // Para animações do header e links desktop

  const navLinks = [
    { id: "home", text: "Início" },
    { id: "about", text: "Sobre" },
    { id: "skills", text: "Habilidades" },
    { id: "projects", text: "Projetos" },
    { id: "contact", text: "Contato" },
  ];

  // Configuração das partículas para o fundo do menu mobile
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Animação de "respiração" no header
      if (isScrolled && !scrolled) {
        controls.start({
          y: [0, -5, 0, -3, 0], // Mais pontos para uma "respiração" mais orgânica
          transition: { duration: 0.8, ease: "easeInOut" }
        });
      }

      // Atualizar link ativo
      const sections = navLinks.map(link => document.getElementById(link.id));
      const visibleSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        // Ajustar offset para quando a seção está visível, considerar o topo da seção
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });
      if (visibleSection) setActiveLink(visibleSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, controls, navLinks]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      // Animação de clique nos links
      controls.start({
        scale: [1, 0.98, 1],
        transition: { duration: 0.3 }
      });

      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
      setIsMenuOpen(false); // Fecha o menu mobile após clicar no link
    }
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-[#0d071a]/90 backdrop-blur-md py-3 shadow-xl"
        : "bg-transparent py-5"
        }`}
      style={{
        borderBottom: scrolled
          ? "1px solid rgba(138, 79, 255, 0.15)"
          : "none",
        background: scrolled
          ? "linear-gradient(to bottom, rgba(13,7,26,0.92) 60%, rgba(13,7,26,0.85))"
          : "transparent"
      }}
      animate={controls}
      initial={false}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo com animação aprimorada */}
        <motion.div
          className="flex items-center cursor-pointer group"
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 400 }
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("home")}
          // Animação de rotação e opacidade na borda do logo
          animate={{
            rotate: [0, 1, -1, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror"
            }
          }}
        >
          <div className="relative">
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-600/70 to-indigo-700/70 rounded-full blur-lg"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.span
              className="relative z-10 font-bold text-2xl text-white bg-[#0d071a] px-3 py-1 rounded-lg group-hover:text-purple-300 transition-colors"
              animate={{
                textShadow: ["0 0 0px #fff", "0 0 8px rgba(192, 132, 252, 0.8)", "0 0 0px #fff"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              KH
            </motion.span>
          </div>
          <motion.span
            className="text-purple-400 ml-1 font-bold text-2xl"
            animate={{
              opacity: [0.5, 1, 0.5],
              textShadow: [
                "0 0 5px rgba(138, 79, 255, 0.3)",
                "0 0 20px rgba(138, 79, 255, 0.8)",
                "0 0 5px rgba(138, 79, 255, 0.3)"
              ],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            .
          </motion.span>
        </motion.div>

        {/* Navegação Desktop com animações fluídas */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              className={`relative px-4 py-2.5 rounded-xl font-medium transition-all ${activeLink === link.id
                ? "text-white"
                : "text-purple-200/90 hover:text-white"
                }`}
              onClick={() => scrollToSection(link.id)}
              whileHover={{
                y: -3,
                transition: { type: "spring", stiffness: 500 }
              }}
              whileTap={{ scale: 0.96 }}
            >
              <motion.span
                className="relative z-10"
                animate={activeLink === link.id ? {
                  scale: [1, 1.05, 1],
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                } : {}}
              >
                {link.text}
              </motion.span>

              {activeLink === link.id ? (
                <motion.div
                  className="absolute bottom-1 left-2 right-2 h-[3px] bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"
                  layoutId="desktop-underline"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  animate={{
                    width: ["100%", "90%", "100%"],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity
                    }
                  }}
                />
              ) : (
                <motion.div
                  className="absolute bottom-1 left-1/2 h-[2px] w-0 bg-purple-500 rounded-full"
                  whileHover={{
                    width: "80%",
                    x: "-50%",
                    transition: { duration: 0.3 }
                  }}
                />
              )}
            </motion.button>
          ))}

          <motion.div
            className="ml-3 relative"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            animate={{
              scale: [1, 1.02, 1],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-md opacity-70"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                transition: {
                  duration: 3,
                  repeat: Infinity
                }
              }}
            />
            <motion.button
              className="relative px-6 py-2.5 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
              onClick={() => scrollToSection("contact")}
              whileHover={{
                boxShadow: "0 5px 20px rgba(138, 79, 255, 0.7)",
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                background: [
                  "linear-gradient(to right, #7e22ce, #4f46e5)",
                  "linear-gradient(to right, #8b5cf6, #6366f1)",
                  "linear-gradient(to right, #7e22ce, #4f46e5)"
                ],
                transition: {
                  duration: 4,
                  repeat: Infinity
                }
              }}
            >
              Contato
            </motion.button>
          </motion.div>
        </nav>

        {/* Botão Menu Mobile com animações aprimoradas */}
        <motion.button
          className="md:hidden z-50 relative w-10 h-10 flex flex-col items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <motion.span
            className="block w-6 h-[2px] rounded-full bg-white absolute"
            initial={false}
            animate={{
              y: isMenuOpen ? 7 : 0,
              rotate: isMenuOpen ? 45 : 0,
              backgroundColor: isMenuOpen ? "#c4b5fd" : "#e0e7ff",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }} // Transição de mola
          />
          <motion.span
            className="block w-6 h-[2px] rounded-full bg-white absolute"
            initial={false}
            animate={{
              opacity: isMenuOpen ? 0 : 1,
              x: isMenuOpen ? 30 : 0,
              backgroundColor: isMenuOpen ? "#c4b5fd" : "#e0e7ff",
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-[2px] rounded-full bg-white absolute"
            initial={false}
            animate={{
              y: isMenuOpen ? -7 : 0,
              rotate: isMenuOpen ? -45 : 0,
              backgroundColor: isMenuOpen ? "#c4b5fd" : "#e0e7ff",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }} // Transição de mola
          />
        </motion.button>
      </div>

      {/* Menu Mobile com animações diferentes e novo layout */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            className="md:hidden fixed inset-0 top-16 bg-[#0d071a] p-4 flex flex-col justify-center relative overflow-hidden" // Adicionado relative e overflow-hidden para as partículas
            initial={{
              scale: 0.8, // Começa menor
              opacity: 0,
              y: "100%", // Vem de baixo para cima
            }}
            animate={{
              scale: 1, // Cresce para o tamanho normal
              opacity: 1,
              y: "0%", // Move para a posição final
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.07,
                duration: 0.5, // Duração da animação
                ease: "easeOut", // Suaviza a entrada
              },
            }}
            exit={{
              scale: 0.8, // Diminui ao sair
              opacity: 0,
              y: "100%", // Sai para baixo
              transition: {
                when: "afterChildren",
                duration: 0.4, // Duração menor para a saída
                ease: "easeIn", // Suaviza a saída
              },
            }}
            style={{
              background: "linear-gradient(to bottom, rgba(13, 7, 26, 0.95) 0%, rgba(13, 7, 26, 0.9) 100%)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Componente de partículas no fundo do menu mobile */}
            <Particles
              id="tsparticles"
              init={particlesInit}
              // As opções de configuração das partículas agora estão diretamente aqui
              options={{
                background: {
                  color: {
                    value: "#0d071a", // Cor de fundo base do menu
                  },
                },
                fpsLimit: 60,
                interactivity: {
                  events: {
                    onHover: {
                      enable: false,
                      mode: "repulse",
                    },
                    onClick: {
                      enable: false,
                      mode: "push",
                    },
                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 0,
                    },
                    repulse: {
                      distance: 100,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: ["#a78bfa", "#c4b5fd", "#d8b4fe"], // Tons de roxo
                  },
                  links: {
                    enable: false,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: true,
                    speed: 0.5,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 30,
                  },
                  opacity: {
                    value: { min: 0.1, max: 0.5 },
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 3 },
                  },
                },
                detectRetina: true,
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: -1, // Garante que fique atrás do conteúdo
              }}
            />

            <motion.div className="flex flex-col space-y-3 px-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  className={`relative w-full text-center py-3 rounded-lg font-medium text-lg flex items-center justify-center ${ // Centraliza texto e aumenta tamanho
                    activeLink === link.id
                      ? "text-white bg-purple-700/50 border border-purple-500/30" // Cor de fundo mais sólida para ativo
                      : "text-purple-200/90 hover:bg-purple-800/20" // Ajuste no hover
                    }`}
                  onClick={() => scrollToSection(link.id)}
                  initial={{ opacity: 0, y: 20 }} // Vem de baixo para cima levemente
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      damping: 15,
                      stiffness: 300,
                      delay: index * 0.08 + 0.2, // Atraso cascata
                    },
                  }}
                  whileHover={{
                    scale: 1.02, // Leve zoom no hover
                    backgroundColor: "rgba(109, 40, 217, 0.35)", // Cor mais forte no hover
                    boxShadow: "0 0 20px rgba(138, 79, 255, 0.4)", // Sombra mais visível
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Barra lateral indicadora de ativo */}
                  {activeLink === link.id && (
                    <motion.div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 rounded-full bg-gradient-to-b from-purple-400 to-indigo-300"
                      layoutId="mobile-active-indicator" // Permite animação fluida entre itens
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  <motion.span
                    className="relative z-10" // Garante que o texto fique acima da barra
                  >
                    {link.text}
                  </motion.span>
                </motion.button>
              ))}

              <motion.div
                className="mt-6 relative" // Mais espaçamento antes do botão de contato
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 300,
                    delay: navLinks.length * 0.08 + 0.3, // Atraso coordenado
                  },
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-70"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    transition: {
                      duration: 3,
                      repeat: Infinity
                    }
                  }}
                />
                <motion.button
                  className="relative w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center text-xl shadow-lg" // Mais alto e fonte maior
                  onClick={() => scrollToSection("contact")}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(138, 79, 255, 0.7)" }} // Sombra no hover mais intensa
                  whileTap={{ scale: 0.96 }}
                  animate={{
                    background: [
                      "linear-gradient(to right, #7e22ce, #4f46e5)",
                      "linear-gradient(to right, #8b5cf6, #6366f1)",
                      "linear-gradient(to right, #7e22ce, #4f46e5)"
                    ],
                    transition: {
                      duration: 4,
                      repeat: Infinity
                    }
                  }}
                >
                  Fale Comigo
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;