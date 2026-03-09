import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import '../styles/contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact-master-section">
            <div className="container">
                <div className="contact-master-wrapper">
                    <motion.div
                        className="contact-master-content"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="master-subtitle">PRÓXIMOS PASSOS</p>
                        <h2 className="master-title">
                            Tem um projeto?<br />
                            <span className="title-outline">Vamos criar.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="master-action-area"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        <a href="mailto:kauahenriquesx09@gmail.com" className="master-circle-btn">
                            <span className="circle-text">INICIAR<br />CONVERSA</span>
                            <ArrowUpRight size={32} strokeWidth={1} className="circle-arrow" />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className="master-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <div className="master-footer-left">
                        <a href="mailto:kauahenriquesx09@gmail.com" className="master-direct-email">
                            kauahenriquesx09@gmail.com
                        </a>
                    </div>

                    <div className="master-footer-right">
                        <a href="https://www.linkedin.com/in/kauãhenriquedev/" target="_blank" rel="noopener noreferrer" className="master-social-link">
                            LinkedIn
                        </a>
                        <a href="https://github.com/Kauasx09-Henrique" target="_blank" rel="noopener noreferrer" className="master-social-link">
                            GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact