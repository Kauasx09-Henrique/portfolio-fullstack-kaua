import { motion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import '../styles/projects.css'

const Projects = () => {
    const projects = [
        {
            title: 'Marcador',
            description: 'App mobile Fullstack para catalogação social e gamificada de livros. Escaneamento de ISBN com Smart Fallback, sincronização real-time no Modo Duo e animações nativas a 60fps.',
            tags: ['React Native', 'Node.js', 'PostgreSQL'],
            embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7422745029611315200?compact=1',
            links: {
                repo: 'https://lnkd.in/dSWp6H3f',
                linkedin: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7422745029611315200'
            }
        },
        {
            title: 'Bibliafy',
            description: 'Plataforma completa para leitura bíblica e devocionais. Sistema Fullstack composto por API robusta e interface web moderna.',
            tags: ['React', 'Node.js', 'Fullstack'],
            embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7383655992238051328?compact=1',
            links: {
                repo: 'https://github.com/Kauasx09-Henrique/bibliafy-front-end_web',
                linkedin: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7383655992238051328'
            }
        },
        {
            title: 'System Barber',
            description: 'Sistema de gestão para barbearias. Controle de agendamentos, fluxo de caixa e gestão de clientes.',
            tags: ['React', 'Management', 'Web'],
            embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7374837349064671233?compact=1',
            links: {
                repo: 'https://github.com/Kauasx09-Henrique',
                linkedin: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7374837349064671233'
            }
        },
        {
            title: 'Clínica Ped',
            description: 'App mobile para gestão pediátrica. Facilita o controle de pacientes e histórico médico na palma da mão.',
            tags: ['React Native', 'Mobile', 'Health'],
            embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7335650416174452736?compact=1',
            links: {
                repo: 'https://github.com/Kauasx09-Henrique/clinicaped-app-mobile',
                linkedin: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7335650416174452736'
            }
        },
        {
            title: 'Disbussines',
            description: 'Dashboard administrativo focado em visualização de dados e gestão empresarial inteligente.',
            tags: ['React', 'Dashboard', 'Analytics'],
            embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7351662946210529281?compact=1',
            links: {
                repo: 'https://github.com/Kauasx09-Henrique/Disbussines-web',
                linkedin: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7351662946210529281'
            }
        }
    ]

    return (
        <section id="projects" className="projects-editorial-section">
            <div className="container">
                <motion.div
                    className="projects-editorial-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="editorial-main-title">Projetos</h2>
                </motion.div>

                <div className="editorial-list">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="editorial-item"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="editorial-meta">
                                <span className="editorial-number">0{index + 1}</span>
                                <h3 className="editorial-title">{project.title}</h3>
                                <div className="editorial-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="editorial-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="editorial-visuals">
                                <div className="editorial-iframe-wrapper">
                                    <iframe
                                        src={project.embedUrl}
                                        title={project.title}
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>

                                <div className="editorial-footer">
                                    <p className="editorial-description">{project.description}</p>
                                    <div className="editorial-links">
                                        <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="editorial-link">
                                            <Github size={18} strokeWidth={1.5} /> Source
                                        </a>
                                        <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer" className="editorial-link primary-editorial-link">
                                            <ArrowUpRight size={18} strokeWidth={1.5} /> Live Preview
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects