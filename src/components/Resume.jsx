import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Download, X } from 'lucide-react'
import '../styles/resume.css'

const devData = {
    name: "KAUÃ HENRIQUE SANTOS DE ARAUJO",
    role: "Desenvolvedor Full Stack | Foco em Backend & Mobile",
    contact: "Brasília-DF | kauahenriquesx09@gmail.com | kauahenriquedev.com.br",
    summary: "Desenvolvedor Full Stack com sólida experiência acadêmica e prática em Backend (Node.js, NestJS, PHP) e Mobile (React Native). Atualmente estagiário no SENSIPAM, atuando como Suporte Help Desk. Possuo forte domínio em modelagem de banco de dados (PostgreSQL/MySQL), criação de APIs RESTful escaláveis e boas práticas de arquitetura de software (Clean Code). Busco oportunidades para aplicar conhecimentos em arquitetura de sistemas e resolver problemas complexos através do código.",
    skills: [
        "Backend: Node.js, NestJS, PHP 8+, Express.js.",
        "Banco de Dados: PostgreSQL, MySQL, Modelagem de Dados, Sequelize/Prisma ORM.",
        "Mobile & Front: React Native, React.js, TypeScript, JavaScript (ES6+), HTML5/CSS3.",
        "Ferramentas & DevOps: Git/GitHub, Postman, Linux, VS Code.",
        "Metodologias: Scrum, Kanban, Desenvolvimento Ágil."
    ],
    experience: [
        {
            company: "SENSIPAM (Centro Operacional e Gestor da Amazônia)",
            role: "Estagiário de Desenvolvimento de Sistemas",
            period: "01/2024 - Atualmente",
            tasks: [
                "Atuação no desenvolvimento e manutenção de sistemas internos focados em monitoramento e gestão.",
                "Aplicação de tecnologias Full Stack (Java/JavaScript) para resolução de problemas em ambiente de alta complexidade.",
                "Colaboração em equipes multidisciplinares utilizando metodologias ágeis para entrega contínua de software.",
                "Desenvolvimento de interfaces e otimização de queries em banco de dados para melhor performance."
            ]
        }
    ],
    projects: [
        {
            name: "ClinicPed+ (Sistema de Gestão de Clínicas)",
            tech: "NestJS, React Native, PostgreSQL",
            desc: "Desenvolvimento de uma solução completa (Mobile + API) para agendamento de consultas. Implementação de autenticação segura via JWT, validação de dados com DTOs e arquitetura modular no Backend. Criação de rotinas de integração com APIs de CEP para normalização de endereços."
        },
        {
            name: "Barbearia Full Stack",
            tech: "Node.js, React.js, PostgreSQL",
            desc: "Criação de sistema de agendamento online com painel administrativo. Desenvolvimento de API RESTful com autenticação e gestão de horários em tempo real. Interface web responsiva focada na experiência do usuário (UX)."
        },
        {
            name: "Bibliafy",
            tech: "React Native, API Rest, JSON",
            desc: "Projeto Open Source focado em consumo de dados e performance mobile. Estruturação de API própria para servir dados bíblicos de forma otimizada para o Front-end."
        },
        {
            name: "DisBusiness",
            tech: "PHP, MySQL, UX/UI",
            desc: "Plataforma para microempreendedores gerenciarem catálogos de produtos. Foco em lógica de negócios robusta no servidor e interface intuitiva para usuários não técnicos."
        }
    ],
    education: {
        course: "Análise e Desenvolvimento de Sistemas",
        inst: "Instituto de Educação Superior de Brasília (IESB)",
        status: "5º Semestre | Previsão de Formatura: 06/2026"
    },
    languages: ["Português: Nativo.", "Inglês: Técnico."]
}

const supportData = {
    name: "KAUÃ HENRIQUE SANTOS DE ARAUJO",
    role: "Analista de Suporte Técnico | Sustentação de Sistemas & N2",
    contact: "Brasília-DF | kauahenriquesx09@gmail.com | kauahenriquedev.com.br",
    summary: "Profissional de TI em formação (5º Semestre), com experiência prática em ambientes de missão crítica (SENSIPAM). Diferencio-me pela capacidade de leitura de código e análise de banco de dados (SQL) para diagnóstico de incidentes. Busco atuar com Suporte Técnico ou Sustentação, utilizando minha lógica de programação e conhecimentos de infraestrutura para resolver chamados com agilidade, garantir SLAs e otimizar a experiência do usuário final.",
    skills: [
        "Sistemas Operacionais: Windows Avançado (Configuração, Redes), Linux (Básico/Intermediário - Terminal).",
        "Banco de Dados: Consultas SQL para relatórios e correção de dados (PostgreSQL/MySQL).",
        "Diagnóstico: Análise de Logs, Debugging de aplicações Web/Mobile, Testes de API (Postman).",
        "Infraestrutura: Noções de Redes, Docker, Git (Versionamento), Instalação de Softwares.",
        "Atendimento: Facilidade em traduzir termos técnicos para usuários leigos, Foco em resolução de problemas."
    ],
    experience: [
        {
            company: "SENSIPAM (Centro Operacional e Gestor da Amazônia)",
            role: "Estagiário de TI / Desenvolvimento & Sustentação",
            period: "01/2024 - Atualmente",
            tasks: [
                "Atuação direta na sustentação e manutenção de sistemas internos de monitoramento.",
                "Responsável pela identificação, análise e correção de bugs em aplicações críticas.",
                "Execução de rotinas de banco de dados e validação de integridade das informações.",
                "Apoio técnico a usuários e colaboradores na utilização das ferramentas da instituição.",
                "Documentação de processos e falhas para base de conhecimento interna."
            ]
        }
    ],
    projects: [
        {
            name: "ClinicPed+ (Sistema de Gestão)",
            tech: "Validação & UX",
            desc: "Desenvolvi o painel administrativo com foco em controle de usuários e permissões. Implementei validações de dados (CEP, CPF) para reduzir erros operacionais no cadastro. Destaque: Experiência em garantir a estabilidade de um sistema com múltiplos níveis de acesso."
        },
        {
            name: "DisBusiness (Plataforma Web)",
            tech: "Troubleshooting",
            desc: "Foco total na experiência do usuário final, criando interfaces intuitivas para evitar chamados de dúvida. Diagnóstico e correção de falhas de conexão com banco de dados MySQL durante o desenvolvimento."
        }
    ],
    education: {
        course: "Análise e Desenvolvimento de Sistemas",
        inst: "Instituto de Educação Superior de Brasília (IESB)",
        status: "5º Semestre (Foco em Infraestrutura e Software) | Previsão de Formatura: 06/2026"
    },
    languages: ["Português: Nativo (Boa comunicação verbal e escrita para atendimento).", "Inglês: Intermediário/Técnico (Leitura de documentação técnica e logs de erro)."]
}

const Resume = () => {
    const [activeProfile, setActiveProfile] = useState(null)
    const [activeTitle, setActiveTitle] = useState('')

    const devPdf = "/public/curriculo/dev/CV_Kaua_Henrique_FullStack (1).pdf"
    const supportPdf = "/public/curriculo/suporte/CV_Kaua_Henrique_Suporte_Tecnico (1).pdf"

    useEffect(() => {
        if (activeProfile) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [activeProfile])

    const openModal = (profileType, title) => {
        setActiveProfile(profileType)
        setActiveTitle(title)
    }

    const closeModal = () => {
        setActiveProfile(null)
        setActiveTitle('')
    }

    const renderNativeCV = (data) => (
        <div className="native-cv-document">
            <div className="cv-header">
                <h1 className="cv-name">{data.name}</h1>
                <h2 className="cv-role">{data.role}</h2>
                <p className="cv-contact">{data.contact}</p>
            </div>

            <div className="cv-section">
                <h3 className="cv-section-title">RESUMO PROFISSIONAL</h3>
                <p className="cv-text">{data.summary}</p>
            </div>

            <div className="cv-section">
                <h3 className="cv-section-title">HABILIDADES TÉCNICAS</h3>
                <ul className="cv-list">
                    {data.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
            </div>

            <div className="cv-section">
                <h3 className="cv-section-title">EXPERIÊNCIA PROFISSIONAL</h3>
                {data.experience.map((exp, i) => (
                    <div key={i} className="cv-block">
                        <div className="cv-block-header">
                            <strong>{exp.company}</strong>
                        </div>
                        <div className="cv-block-subheader">
                            <em>{exp.role} | {exp.period}</em>
                        </div>
                        <ul className="cv-list">
                            {exp.tasks.map((task, j) => <li key={j}>{task}</li>)}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="cv-section">
                <h3 className="cv-section-title">PROJETOS EM DESTAQUE</h3>
                {data.projects.map((proj, i) => (
                    <div key={i} className="cv-block">
                        <div className="cv-block-header">
                            <strong>{proj.name}</strong> | {proj.tech}
                        </div>
                        <p className="cv-text-margin">{proj.desc}</p>
                    </div>
                ))}
            </div>

            <div className="cv-section">
                <h3 className="cv-section-title">FORMAÇÃO ACADÊMICA</h3>
                <div className="cv-block">
                    <strong>{data.education.course}</strong><br />
                    {data.education.inst}<br />
                    {data.education.status}
                </div>
            </div>

            <div className="cv-section">
                <h3 className="cv-section-title">IDIOMAS</h3>
                <ul className="cv-list">
                    {data.languages.map((lang, i) => <li key={i}>{lang}</li>)}
                </ul>
            </div>
        </div>
    )

    return (
        <section id="resume" className="resume-editorial-section">
            <div className="resume-split-container">
                <motion.div
                    className="resume-half dev-half"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="resume-content-wrapper">
                        <span className="resume-label">Perfil 01</span>
                        <h2 className="resume-massive-title">Desenvolvedor<br />Full Stack</h2>
                        <p className="resume-minimal-desc">
                            Focado em React, Node.js, arquitetura escalável e desenvolvimento de soluções Web e Mobile de alta performance.
                        </p>
                        <div className="resume-action-row">
                            <button onClick={() => openModal('dev', 'Desenvolvedor Full Stack')} className="btn-editorial-primary">
                                Visualizar <Eye size={18} strokeWidth={1.5} />
                            </button>
                            <a href={devPdf} download className="btn-editorial-secondary">
                                Baixar PDF <Download size={18} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="resume-half support-half"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                    <div className="resume-content-wrapper">
                        <span className="resume-label">Perfil 02</span>
                        <h2 className="resume-massive-title">Suporte<br />Técnico</h2>
                        <p className="resume-minimal-desc">
                            Experiência sólida em hardware, infraestrutura de redes e resolução eficiente de problemas N1/N2.
                        </p>
                        <div className="resume-action-row">
                            <button onClick={() => openModal('support', 'Suporte Técnico N1/N2')} className="btn-editorial-primary">
                                Visualizar <Eye size={18} strokeWidth={1.5} />
                            </button>
                            <a href={supportPdf} download className="btn-editorial-secondary">
                                Baixar PDF <Download size={18} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {activeProfile && (
                    <motion.div
                        className="editorial-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="editorial-modal-container"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="editorial-modal-header">
                                <h3 className="editorial-modal-title">{activeTitle}</h3>
                                <button className="editorial-modal-close" onClick={closeModal}>
                                    FECHAR <X size={20} strokeWidth={1} />
                                </button>
                            </div>
                            <div className="editorial-modal-body custom-scroll">
                                {activeProfile === 'dev' ? renderNativeCV(devData) : renderNativeCV(supportData)}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Resume