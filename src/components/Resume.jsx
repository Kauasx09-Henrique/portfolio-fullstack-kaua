import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Download, X, Code2, Headset, FileText } from 'lucide-react'
import '../styles/resume.css'

const Resume = () => {
    const [activePdf, setActivePdf] = useState(null)
    const [activeTitle, setActiveTitle] = useState('')

    const devPdf = "/public/curriculo/dev/CV_Kaua_Henrique_FullStack (1).pdf"
    const supportPdf = "/public/curriculo/suporte/CV_Kaua_Henrique_Suporte_Tecnico (1).pdf"

    useEffect(() => {
        if (activePdf) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [activePdf])

    const openModal = (url, title) => {
        setActivePdf(url)
        setActiveTitle(title)
    }

    const closeModal = () => {
        setActivePdf(null)
        setActiveTitle('')
    }

    return (
        <section className="section-padding resume-section">
            <div className="container">

                <motion.div
                    className="resume-card-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="resume-header">
                        <h2>Currículos <span style={{ color: 'var(--primary)' }}>Profissionais</span></h2>
                        <p>Escolha a versão que melhor se adapta à oportunidade.</p>
                    </div>

                    <div className="resume-split">

                        <motion.div
                            className="resume-option dev"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="role-icon">
                                <Code2 size={28} />
                            </div>
                            <h3 className="role-title">Desenvolvedor Fullstack</h3>
                            <p className="role-desc">
                                Focado em React, Node.js, Arquitetura de Software e Projetos Web/Mobile.
                            </p>

                            <div className="btn-group">
                                <button onClick={() => openModal(devPdf, 'Currículo Desenvolvedor')} className="btn-action btn-eye">
                                    <Eye size={18} /> Visualizar
                                </button>
                                <a href={devPdf} download className="btn-action btn-down">
                                    <Download size={18} /> Baixar PDF
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="resume-option support"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="role-icon">
                                <Headset size={28} />
                            </div>
                            <h3 className="role-title">Suporte Técnico N1/N2</h3>
                            <p className="role-desc">
                                Experiência em Hardware, Redes, Atendimento ao Cliente e Resolução de Problemas.
                            </p>

                            <div className="btn-group">
                                <button onClick={() => openModal(supportPdf, 'Currículo Suporte')} className="btn-action btn-eye">
                                    <Eye size={18} /> Visualizar
                                </button>
                                <a href={supportPdf} download className="btn-action btn-down">
                                    <Download size={18} /> Baixar PDF
                                </a>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>

            </div>

            <AnimatePresence>
                {activePdf && (
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="pdf-header">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                                    <FileText size={18} color="var(--primary)" /> {activeTitle}
                                </div>
                                <button className="close-modal-btn" onClick={closeModal} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
                                    <X size={24} />
                                </button>
                            </div>

                            <object
                                data={activePdf}
                                type="application/pdf"
                                className="pdf-viewer"
                            >
                                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', gap: '1rem' }}>
                                    <p>Seu navegador não suporta visualização de PDF.</p>
                                    <a href={activePdf} download className="btn-view" style={{ background: 'var(--primary)', padding: '10px 20px', borderRadius: '8px', color: 'white', textDecoration: 'none' }}>
                                        Baixar Arquivo
                                    </a>
                                </div>
                            </object>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Resume