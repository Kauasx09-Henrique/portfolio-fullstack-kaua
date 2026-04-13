import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import '../styles/home.css'

const Home = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: custom
            }
        })
    }

    return (
        <section id="home" className="home-white-premium">
            <div className="geometric-clash-container">
                <motion.div
                    className="clash-panel panel-left"
                    animate={{
                        x: ["-100vw", "0vw", "0vw", "0vw"],
                        y: ["0vh", "0vh", "0vh", "-100vh"]
                    }}
                    transition={{
                        duration: 2.2,
                        times: [0, 0.4, 0.6, 1],
                        ease: [0.85, 0, 0.15, 1]
                    }}
                />

                <motion.div
                    className="clash-panel panel-right"
                    animate={{
                        x: ["100vw", "0vw", "0vw", "0vw"],
                        y: ["0vh", "0vh", "0vh", "100vh"]
                    }}
                    transition={{
                        duration: 2.2,
                        times: [0, 0.4, 0.6, 1],
                        ease: [0.85, 0, 0.15, 1]
                    }}
                />

                <motion.div
                    className="clash-flash"
                    animate={{
                        scaleY: [0, 1, 1, 0],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 0.6,
                        times: [0, 0.2, 0.8, 1],
                        ease: "circOut",
                        delay: 0.8
                    }}
                />
            </div>

            <div className="white-grid-bg" />
            <div className="white-gradient-overlay" />

            <div className="container relative-z">
                <div className="premium-content">
                    <motion.div
                        custom={1.8}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="premium-badge"
                    >
                        <span className="pulse-dot"></span>
                        Disponível para novos desafios
                    </motion.div>

                    <motion.h1
                        custom={1.9}
                        className="premium-title"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                    >
                        Kauã Henrique
                    </motion.h1>

                    <motion.h2
                        custom={2.0}
                        className="premium-subtitle"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                    >
                        Desenvolvedor Full Stack
                    </motion.h2>

                    <motion.p
                        custom={2.1}
                        className="premium-description"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                    >
                        Estagiário no Censipam e estudante de ADS. Especializado em construir arquiteturas escaláveis e experiências únicas utilizando React, NestJS e React Native.
                    </motion.p>

                    <motion.div
                        custom={2.2}
                        className="premium-actions"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <a href="#projects" className="premium-btn-primary">
                            Explorar Projetos <ArrowRight size={18} className="btn-icon" />
                        </a>

                        <div className="premium-socials">
                            <a href="https://github.com/Kauasx09-Henrique" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={22} />
                            </a>
                            <a href="https://www.linkedin.com/in/kauãhenriquedev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={22} />
                            </a>
                            <a href="mailto:kauahenriquesx09@gmail.com" aria-label="Email">
                                <Mail size={22} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Home