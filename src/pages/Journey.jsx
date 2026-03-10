import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Code } from 'lucide-react'
import '../styles/journey.css'

const Journey = () => {
    const trajectory = [
        {
            year: 'ATUAL',
            title: 'Estagiário em Tecnologia',
            location: 'CENSIPAM (Centro Operacional e Gestor da Amazônia)',
            description: 'Atuando no ambiente de operações e gestão tecnológica, focando em resolução de problemas, suporte e desenvolvimento de soluções internas.',
            icon: <Briefcase size={20} strokeWidth={1.5} />
        },
        {
            year: '2024',
            title: 'Graduação em Tecnologia',
            location: 'Análise e Desenvolvimento de Sistemas',
            description: 'Atualmente no 5º Semestre. Aprofundamento em arquitetura de software, banco de dados e engenharia de software.',
            icon: <GraduationCap size={20} strokeWidth={1.5} />
        },
        {
            year: '2025',
            title: 'Engenharia Full Stack',
            location: 'Desenvolvimento Independente',
            description: 'Arquitetura e deploy de aplicações completas como o Marcador (Mobile) e o Bibliafy (Web), utilizando React, Node.js e PostgreSQL.',
            icon: <Code size={20} strokeWidth={1.5} />
        }
    ]

    return (
        <section id="journey" className="journey-dark-section">
            <div className="container">
                <motion.div
                    className="journey-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="journey-title">Trajetória.</h2>
                </motion.div>

                <div className="journey-timeline">
                    {trajectory.map((item, index) => (
                        <motion.div
                            key={index}
                            className="journey-item"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="journey-year-col">
                                <span className="journey-year">{item.year}</span>
                            </div>

                            <div className="journey-content-col">
                                <div className="journey-icon-wrapper">
                                    {item.icon}
                                </div>
                                <div className="journey-text-content">
                                    <h3 className="journey-role">{item.title}</h3>
                                    <span className="journey-location">{item.location}</span>
                                    <p className="journey-desc">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Journey