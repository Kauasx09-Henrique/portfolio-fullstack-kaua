import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import '../styles/projects.css'

const Projects = () => {

    const projects = [
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
                repo: 'https://github.com/Kauasx09-Henrique', // Ajuste se tiver repo específico
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
        <section id="projects" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem' }}
                >
                    <h2>Projetos <span style={{ color: 'var(--primary)' }}>Destaque</span></h2>
                    <p>Soluções reais desenvolvidas com código limpo.</p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Área do Iframe do LinkedIn */}
                            <div className="project-image">
                                <iframe
                                    src={project.embedUrl}
                                    title={project.title}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="project-link primary">
                                        <Github size={18} /> Code
                                    </a>

                                    <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <ExternalLink size={18} /> Ver Post
                                    </a>
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