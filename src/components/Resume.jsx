import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Download, X } from 'lucide-react'
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
                            <button onClick={() => openModal(devPdf, 'Desenvolvedor Full Stack')} className="btn-editorial-primary">
                                Visualizar <Eye size={18} strokeWidth={1.5} />
                            </button>
                            <a href={devPdf} download className="btn-editorial-secondary">
                                Baixar <Download size={18} strokeWidth={1.5} />
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
                            <button onClick={() => openModal(supportPdf, 'Suporte Técnico N1/N2')} className="btn-editorial-primary">
                                Visualizar <Eye size={18} strokeWidth={1.5} />
                            </button>
                            <a href={supportPdf} download className="btn-editorial-secondary">
                                Baixar <Download size={18} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {activePdf && (
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
                            <div className="editorial-modal-body">
                                <iframe
                                    src={`${activePdf}#toolbar=0&navpanes=0&scrollbar=0`}
                                    className="editorial-pdf-viewer"
                                    title={activeTitle}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Resume