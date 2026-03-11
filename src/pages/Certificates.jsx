import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, FileX } from 'lucide-react'
import '../styles/certificates.css'

import java from '../../public/certificado/programaçao/java.pdf'
import banco from '../../public/certificado/banco/IMPLEMENTANDO_Banco.pdf'
import software from '../../public/certificado/hardaware/HARDWARE&SOFTWARE.pdf'
import banco1 from '../../public/certificado/banco/ADMINISTRANDOBANCO.pdf'
import ia from '../../public/certificado/ia/IA.pdf'
import cyber from '../../public/certificado/cyber/Certificado-Cyber.pdf'

import { link } from 'framer-motion/client'

const Certificates = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const certificates = [
        {
            name: 'Java Completo + POO',
            issuer: 'Udemy',
            date: '2025',
            link: java,
            img: java
        },
        {
            name: 'Implementando Banco de Dados',
            issuer: 'Fundação Bradesco',
            date: '2025',
            link: banco,
            img: banco
        },
        {
            name: 'Fundamentos: Hardware & Software',
            issuer: 'Fundação Bradesco',
            date: '2025',
            link: software,
            img: software
        },
        {
            name: 'IA: Fundamentos e Aplicações',
            issuer: 'IESB',
            date: '2025',
            link: ia,
            img: ia
        },
        {
            name: 'Administrando MySQL',
            issuer: 'Fundação Bradesco',
            date: '2025',
            link: banco1,
            img: banco1
        },
        {
            name: 'Introdução a Cybersecurity',
            issuer: 'Cisco Networking Academy',
            date: '2026',
            link: cyber,
            img: cyber

        }
    ]

    const renderViewer = (cert) => {
        if (!cert.img) {
            return (
                <div className="viewer-light-empty">
                    <FileX size={40} strokeWidth={1.5} />
                    <span>Indisponível</span>
                </div>
            )
        }

        if (typeof cert.img === 'string' && cert.img.toLowerCase().endsWith('.pdf')) {
            return (
                <iframe
                    src={`${cert.img}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="viewer-light-iframe"
                    title={cert.name}
                />
            )
        }

        return <img src={cert.img} alt={cert.name} className="viewer-light-image" />
    }

    return (
        <section id="certificates" className="cert-light-section">
            <div className="container">
                <motion.div
                    className="cert-light-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="cert-light-title">Certificações.</h2>
                </motion.div>

                <div className="cert-light-layout">
                    <div className="cert-light-list">
                        {certificates.map((cert, index) => {
                            const isActive = activeIndex === index

                            return (
                                <motion.div
                                    key={index}
                                    className={`cert-light-item ${isActive ? 'is-active' : ''}`}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onClick={() => setActiveIndex(index)}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.05, duration: 0.4 }}
                                >
                                    <div className="cert-light-content">
                                        <span className="cert-light-number">0{index + 1}</span>
                                        <h3 className="cert-light-name">{cert.name}</h3>
                                    </div>
                                    <div className="cert-light-meta">
                                        <span className="cert-light-issuer">{cert.issuer}</span>
                                        <span className="cert-light-date">{cert.date}</span>
                                        {isActive && cert.link && (
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-light-link">
                                                <ArrowUpRight size={20} strokeWidth={2} />
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    <div className="cert-light-viewer">
                        <div className="viewer-light-sticky">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    className="viewer-light-wrapper"
                                    initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {renderViewer(certificates[activeIndex])}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificates