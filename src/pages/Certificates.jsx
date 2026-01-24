import { motion } from 'framer-motion'
import { Award, Calendar, Building, ExternalLink } from 'lucide-react'
import '../styles/certificates.css'

import java from '../../public/certificado/programaçao/java.pdf'
import banco from '../../public/certificado/banco/IMPLEMENTANDO_Banco.pdf'
import software from '../../public/certificado/hardaware/HARDWARE&SOFTWARE.pdf'
import banco1 from '../../public/certificado/banco/ADMINISTRANDOBANCO.pdf'
import ia from './ia.pdf'

const Certificates = () => {

    const getCertImage = (fileUrl) => {
        if (!fileUrl) {
            return (
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #27272a, #18181b)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem', color: '#52525b' }}>
                    <Award size={32} opacity={0.5} />
                    <span style={{ fontWeight: 600, fontSize: '0.8rem' }}>SEM ARQUIVO</span>
                </div>
            )
        }
        if (typeof fileUrl === 'string' && fileUrl.toLowerCase().endsWith('.pdf')) {
            return (
                <iframe
                    src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="cert-thumb"
                    title="Certificado PDF"
                    style={{ border: 'none', pointerEvents: 'none', overflow: 'hidden' }} // pointerEvents evita clique no PDF, mantendo comportamento de card
                />
            )
        }
        return <img src={fileUrl} alt="Certificado" className="cert-thumb" />
    }

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
            name: 'Fundamentos de TI: Hardware & Software',
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
            name: 'Administrando bancos de dados MySQL',
            issuer: 'Fundação Bradesco',
            date: '2025',
            link: banco1,
            img: banco1
        }

    ]

    return (
        <section id="certificates" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem' }}
                >
                    <h2>Meus <span style={{ color: 'var(--primary)' }}>Certificados</span></h2>
                    <p>Comprovações de aprendizado contínuo.</p>
                </motion.div>

                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="cert-image">
                                {getCertImage(cert.img)}

                                {cert.link && cert.link !== '#' && (
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link-overlay">
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>

                            <div className="cert-content">
                                <div className="cert-header-slim">
                                    <div className="cert-icon-slim">
                                        <Award size={16} /> Certificado
                                    </div>
                                </div>

                                <h3 className="cert-title">{cert.name}</h3>

                                <div className="cert-issuer">
                                    <Building size={14} />
                                    {cert.issuer}
                                </div>

                                <div className="cert-date">
                                    <Calendar size={14} />
                                    Concluído em {cert.date}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certificates