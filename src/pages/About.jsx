import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Heart } from 'lucide-react'
import '../styles/about.css'
import meImg from '../../public/me/kaua.jpg'

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-dark)' }}>
            <div className="container">

                <div className="about-container">

                    <motion.div
                        className="image-wrapper"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <img src={meImg} alt="Kauã Henrique" className="profile-pic" />
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2>Sobre <span style={{ color: 'var(--primary)' }}>mim</span></h2>

                        <div className="about-text">
                            <p>
                                Meu nome é <strong>Kauã Henrique</strong>. Atualmente tenho 20 anos e sou apaixonado por tecnologia desde criança.
                            </p>
                            <p>
                                Atualmente, atuo como <strong>Estagiário no CENSIPAM</strong>, onde trabalho como suporte N1 e N2 e curso <strong>Análise e Desenvolvimento de Sistemas</strong> (5º Semestre).
                            </p>
                            <p>
                                Minha especialidade é o ecossistema JavaScript (React, NestJS, React Native). Quando não estou programando, estou provavelmente assistindo podcast e pensando sobre novos projetos.
                            </p>
                        </div>

                        <div className="info-grid">

                            <div className="info-card">
                                <div className="info-icon">
                                    <Briefcase size={24} />
                                </div>
                                <div className="info-content">
                                    <h3>Experiência</h3>
                                    <p>CENSIPAM</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <GraduationCap size={24} />
                                </div>
                                <div className="info-content">
                                    <h3>Formação</h3>
                                    <p>5º Semestre ADS</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <Heart size={24} />
                                </div>
                                <div className="info-content">
                                    <h3>Interesse</h3>
                                    <p>Web & Mobile</p>
                                </div>
                                
                            </div>

                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default About