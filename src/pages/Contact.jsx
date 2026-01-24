import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import '../styles/contact.css'

const Contact = () => {
    return (
        <section id="contact" className="section-padding contact-section">
            <div className="container">
                <motion.div
                    className="contact-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="contact-title">Vamos trabalhar juntos?</h2>
                    <p className="contact-text">
                        Se você tem uma ideia de projeto, uma vaga ou quer apenas trocar conhecimentos sobre desenvolvimento, minha caixa de entrada está sempre aberta.
                    </p>

                    <div className="contact-actions">
                        <a href="mailto:kauahenrique@example.com" className="contact-btn">
                            <Send size={20} /> Enviar Mensagem
                        </a>

                        <div className="social-links-container">
                            <a 
                                href="https://www.linkedin.com/in/kau%C3%A3henriquedev/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="social-icon"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={28} />
                            </a>
                            
                            <a 
                                href="https://github.com/Kauasx09-Henrique" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="social-icon"
                                aria-label="GitHub"
                            >
                                <Github size={28} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact