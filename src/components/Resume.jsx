import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Download, X } from 'lucide-react'
import '../styles/resume.css'

const devData = {
    name: "KAUÃ HENRIQUE SANTOS DE ARAUJO",
    role: "Desenvolvedor Full Stack | Engenharia de Software",
    contact: "Brasília-DF | kauahenriquesx09@gmail.com | kauahenriquedev.com.br",
    summary: "Desenvolvedor Full Stack de 21 anos, graduado em Análise e Desenvolvimento de Sistemas e atual estudante de Engenharia de Software. Especialista na criação de arquiteturas escaláveis, com forte atuação em Backend (PHP, Node.js, NestJS) e modelagem de Banco de Dados. Atualmente no CENSIPAM, componho a equipe de desenvolvimento do projeto DQBRN para o Exército Brasileiro, um painel estratégico voltado ao monitoramento de desastres ambientais, químicos, radiológicos e epidemiológicos.",
    skills: [
        "Backend: PHP 8+, Node.js, NestJS, Express.js.",
        "Banco de Dados: Modelagem Relacional, PostgreSQL, MySQL, Otimização de Queries.",
        "Mobile & Frontend: React Native, React.js, TypeScript, JavaScript (ES6+).",
        "Ferramentas & Infra: Git/GitHub, Postman, Linux, VS Code, APIs RESTful.",
        "Práticas: Clean Code, Metodologias Ágeis (Scrum/Kanban), Arquitetura de Software."
    ],
    experience: [
        {
            company: "CENSIPAM (Centro Operacional e Gestor da Amazônia)",
            role: "Estagiário de Desenvolvimento de Sistemas",
            period: "01/2024 - Atualmente",
            tasks: [
                "Desenvolvimento e manutenção do painel estratégico DQBRN para o Exército Brasileiro, focado em desastres ambientais e químicos.",
                "Implementação de lógicas de negócio complexas utilizando PHP e arquitetura de banco de dados.",
                "Otimização de consultas SQL (PostgreSQL/MySQL) para lidar com grandes volumes de dados geoespaciais e relatórios.",
                "Colaboração em equipes multidisciplinares e aplicação de metodologias ágeis para entregas contínuas."
            ]
        }
    ],
    projects: [
        {
            name: "DQBRN - Exército Brasileiro (Projeto CENSIPAM)",
            tech: "PHP, Banco de Dados, APIs",
            desc: "Painel de monitoramento focado em desastres ambientais, químicos, radiológicos e epidemiológicos. Atuação direta no back-end para processamento de dados críticos em tempo real."
        },
        {
            name: "ClinicPed+ (Sistema de Gestão de Clínicas)",
            tech: "NestJS, React Native, PostgreSQL",
            desc: "Solução completa (Mobile + API) para agendamento de consultas. Autenticação via JWT, validação com DTOs e integração com APIs externas."
        },
        {
            name: "Barbearia Full Stack",
            tech: "Node.js, React.js, PostgreSQL",
            desc: "Sistema de agendamento online com painel administrativo e gestão de horários em tempo real. Foco em UX/UI responsiva."
        },
        {
            name: "DisBusiness",
            tech: "PHP, MySQL, UX/UI",
            desc: "Plataforma para microempreendedores gerenciarem catálogos de produtos com lógica de negócios robusta e interface acessível."
        }
    ],
    education: {
        course: "Bacharelado em Engenharia de Software",
        inst: "Instituto de Educação Superior de Brasília (IESB)",
        status: "Em andamento"
    },
    education2: {
        course: "Análise e Desenvolvimento de Sistemas",
        inst: "Instituto de Educação Superior de Brasília (IESB)",
        status: "Graduado"
    },
    languages: ["Português: Nativo.", "Inglês: Técnico Avançado (Leitura e Documentação)."]
}

const supportData = {
    name: "KAUÃ HENRIQUE SANTOS DE ARAUJO",
    role: "Analista de Suporte Técnico & Sustentação de Sistemas",
    contact: "Brasília-DF | kauahenriquesx09@gmail.com | kauahenriquedev.com.br",
    summary: "Profissional de TI (21 anos), formado em Análise e Desenvolvimento de Sistemas e graduando em Engenharia de Software. Possuo vasta experiência prática no CENSIPAM em ambientes de missão crítica. Especializado na sustentação de sistemas governamentais de alto impacto, como o projeto DQBRN do Exército Brasileiro. Destaco-me pela capacidade de leitura de código, análise aprofundada de bancos de dados (SQL) e resolução ágil de incidentes de infraestrutura e software (N1/N2).",
    skills: [
        "Sistemas Operacionais: Windows Avançado (Redes, Configuração), Linux (Terminal, Permissões).",
        "Banco de Dados: Consultas SQL avançadas para auditoria, relatórios e correção de inconsistências.",
        "Diagnóstico & Sustentação: Análise de Logs, Debugging Web, Monitoramento de Sistemas Críticos.",
        "Infraestrutura & Redes: Protocolos TCP/IP, DNS, Docker básico, Controle de Versão (Git).",
        "Atendimento Técnico: Resolução de incidentes sob SLA rigoroso e comunicação assertiva com usuários."
    ],
    experience: [
        {
            company: "CENSIPAM (Centro Operacional e Gestor da Amazônia)",
            role: "Estagiário de TI / Sustentação e Banco de Dados",
            period: "01/2024 - Atualmente",
            tasks: [
                "Sustentação técnica do sistema DQBRN (Exército Brasileiro), garantindo alta disponibilidade do painel de monitoramento de desastres.",
                "Execução de queries complexas em banco de dados para correção de falhas e extração de relatórios operacionais.",
                "Identificação, análise e triagem de bugs em aplicações críticas, reportando de forma estruturada para a equipe de engenharia.",
                "Apoio técnico direto aos usuários, resolvendo incidentes operacionais e documentando soluções na base de conhecimento."
            ]
        }
    ],
    projects: [
        {
            name: "Sustentação DQBRN (Exército Brasileiro)",
            tech: "SQL, Troubleshooting, Monitoramento",
            desc: "Garantia da integridade dos dados e funcionamento do painel de desastres químicos e ambientais. Correção de anomalias diretamente na base de dados e suporte tático operacional."
        },
        {
            name: "ClinicPed+ (Controle de Acessos)",
            tech: "Validação & Segurança",
            desc: "Estruturação de validações e permissões no painel administrativo, reduzindo erros de operação de usuários finais e mantendo a estabilidade do sistema."
        }
    ],
    education: {
        course: "Bacharelado em Engenharia de Software",
        inst: "Instituto de Educação Superior de Brasília (IESB)",
        status: "Em andamento"
    },
    education2: {
        course: "Análise e Desenvolvimento de Sistemas",
        inst: "Instituto de Educação Superior de Brasília (IESB)",
        status: "Graduado"
    },
    languages: ["Português: Nativo (Comunicação clara para suporte).", "Inglês: Intermediário/Técnico (Leitura de manuais e logs)."]
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
                <div className="cv-block" style={{ marginBottom: '1rem' }}>
                    <strong>{data.education.course}</strong><br />
                    {data.education.inst}<br />
                    {data.education.status}
                </div>
                <div className="cv-block">
                    <strong>{data.education2.course}</strong><br />
                    {data.education2.inst}<br />
                    {data.education2.status}
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
                            Focado na stack PHP/Node, arquitetura escalável e integração de sistemas complexos de missão crítica.
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
                            Especialista em resolução de problemas N2, análise de banco de dados e sustentação de infraestruturas operacionais.
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