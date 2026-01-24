import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import '../styles/home.css'

const Home = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    }

    return (
        <section id="home" className="home-section">
            <div className="home-bg-minimal" />

            <div className="container">
                <div className="home-content">

                    <motion.span
                        className="role-label"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                    >
                        Fullstack Developer
                    </motion.span>

                    <motion.h1
                        className="hero-title-minimal"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.1 }}
                    >
                        Kauã Henrique.
                    </motion.h1>

                    <motion.p
                        className="hero-description-minimal"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        Estagiário no SENSIPAM e estudante de ADS.
                        Criando o futuro com <span style={{ color: 'var(--text-main)' }}>React</span>,
                        <span style={{ color: 'var(--text-main)' }}> NestJS</span> e
                        <span style={{ color: 'var(--text-main)' }}> Mobile</span>.
                    </motion.p>

                    <motion.div
                        className="actions-container"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3 }}
                    >
                        <a href="#projects" className="cta-link">
                            Ver Projetos <ArrowRight size={20} />
                        </a>

                        <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)', display: 'inline-block' }}></div>

                        <div className="social-group">
                            <a
                                href="https://github.com/Kauasx09-Henrique"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-btn"
                                aria-label="GitHub"
                            >
                                <Github size={22} />
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-btn"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={22} />
                            </a>

                            <a
                                href="mailto:kauahenrique@example.com"
                                className="icon-btn"
                                aria-label="Email"
                            >
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