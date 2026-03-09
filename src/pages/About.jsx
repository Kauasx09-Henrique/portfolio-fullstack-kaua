import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Code, ArrowUpRight } from 'lucide-react'
import '../styles/about.css'
import meImg from '../../public/me/kaua.jpg'

const About = () => {
    return (
        <section id="about" className="about-section dark-theme">
            <div className="container">
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="massive-title">
                        <span>SOBRE</span>
                        <span className="outline-text">MIM</span>
                    </h2>
                </motion.div>

                <div className="about-bento-grid">
                    <motion.div
                        className="bento-item image-bento"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <img src={meImg} alt="Kauã Henrique" className="bento-img" />
                        <div className="bento-img-overlay"></div>
                    </motion.div>

                    <motion.div
                        className="bento-item text-bento"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="bento-subtitle">A Mente por Trás do Código</h3>
                        <p>
                            Sou <strong>Kauã Henrique</strong>, Desenvolvedor Full Stack especializado em Backend (Node.js, NestJS, PHP) e Mobile (React Native). Construo arquiteturas escaláveis e banco de dados otimizados.
                        </p>
                        <p>
                            Atualmente, aplico minhas habilidades como <strong>Estagiário no SENSIPAM</strong>, focado no ecossistema interno, e estou no 5º semestre de Análise e Desenvolvimento de Sistemas.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bento-item stat-bento"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <Briefcase size={28} className="bento-icon" />
                        <div>
                            <span className="bento-label">Atuação</span>
                            <span className="bento-value">SENSIPAM</span>
                        </div>
                        <ArrowUpRight size={20} className="bento-arrow" />
                    </motion.div>

                    <motion.div
                        className="bento-item stat-bento"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <GraduationCap size={28} className="bento-icon" />
                        <div>
                            <span className="bento-label">Acadêmico</span>
                            <span className="bento-value">5º Sem ADS</span>
                        </div>
                        <ArrowUpRight size={20} className="bento-arrow" />
                    </motion.div>

                    <motion.div
                        className="bento-item stat-bento highlight-bento"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Code size={28} className="bento-icon-dark" />
                        <div>
                            <span className="bento-label-dark">Tech Stack</span>
                            <span className="bento-value-dark">Node.js & React Native</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About