import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import '../styles/home.css'

const Home = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    }

    return (
        <section id="home" className="home-white-premium">
            <div className="white-grid-bg" />
            <div className="white-gradient-overlay" />

            <div className="container relative-z">
                <div className="premium-content">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="premium-badge"
                    >
                        <span className="pulse-dot"></span>
                        Disponível para novos desafios
                    </motion.div>

                    <motion.h1
                        className="premium-title"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.1 }}
                    >
                        Kauã Henrique
                    </motion.h1>

                    <motion.h2
                        className="premium-subtitle"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        Desenvolvedor Full Stack
                    </motion.h2>

                    <motion.p
                        className="premium-description"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3 }}
                    >
                        Estagiário no SENSIPAM e estudante de ADS. Especializado em construir arquiteturas escaláveis e experiências únicas utilizando React, NestJS e React Native.
                    </motion.p>

                    <motion.div
                        className="premium-actions"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
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