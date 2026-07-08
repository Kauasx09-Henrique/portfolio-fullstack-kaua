import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, GraduationCap, BookOpen, Code } from 'lucide-react'
import '../styles/journey.css'

const Journey = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

    const trajectory = [
        {
            year: 'ATUAL',
            title: 'Estagiário em Tecnologia',
            location: 'CENSIPAM',
            description: 'Atuação estratégica no ecossistema tecnológico do órgão, com foco na otimização de operações, resolução de problemas complexos e desenvolvimento contínuo de soluções internas inovadoras.',
            icon: <Briefcase size={24} strokeWidth={1.5} />
        },
        {
            year: '2026',
            title: 'Engenharia de Software',
            location: 'Bacharelado',
            description: 'Imersão em conceitos avançados de engenharia, priorizando a construção de arquiteturas de software escaláveis, design patterns e a aplicação das melhores práticas de desenvolvimento moderno.',
            icon: <Code size={24} strokeWidth={1.5} />
        },
        {
            year: '2026',
            title: 'Análise e Desenvolvimento de Sistemas',
            location: 'IESB',
            description: 'Conclusão da graduação com sólida base na construção de sistemas, domínio de metodologias ágeis e aplicação rigorosa de padrões de qualidade em código estruturado.',
            icon: <GraduationCap size={24} strokeWidth={1.5} />
        },
        {
            year: '2024',
            title: 'Início da Jornada Acadêmica',
            location: 'Análise e Desenvolvimento de Sistemas',
            description: 'Ponto de partida no ensino superior em tecnologia, consolidando fundamentos essenciais de lógica de programação, estruturação de banco de dados e arquitetura web.',
            icon: <BookOpen size={24} strokeWidth={1.5} />
        },
        {
            year: '2024',
            title: 'Técnico em Informática',
            location: 'Escola Técnica de Ceilândia (ETC)',
            description: 'Formação técnica abrangente, estabelecendo alicerces cruciais em lógica algorítmica, infraestrutura de redes e administração avançada de sistemas operacionais.',
            icon: <GraduationCap size={24} strokeWidth={1.5} />
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

                <div className="journey-timeline-wrapper" ref={containerRef}>
                    <div className="timeline-beam-track">
                        <motion.div
                            className="timeline-beam-fill"
                            initial={{ scaleY: 0 }}
                            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                        />
                        <motion.div
                            className="timeline-beam-glow"
                            initial={{ bottom: "0%", opacity: 0 }}
                            animate={isInView ? { bottom: "100%", opacity: [0, 1, 1, 0] } : { bottom: "0%", opacity: 0 }}
                            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                        />
                    </div>

                    <div className="journey-timeline">
                        {trajectory.map((item, index) => (
                            <motion.div
                                key={index}
                                className="journey-item"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: (trajectory.length - index) * 0.2, ease: [0.16, 1, 0.3, 1] }}
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
            </div>
        </section>
    )
}

export default Journey