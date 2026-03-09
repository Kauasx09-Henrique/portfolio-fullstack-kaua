import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import '../styles/footer.css'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="footer-absolute">
            <div className="container">
                <motion.div
                    className="footer-grid"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="footer-col">
                        <span className="footer-label">KAUÃ HENRIQUE</span>
                        <span className="footer-value">© {new Date().getFullYear()}</span>
                    </div>

                    <div className="footer-col hide-mobile">
                        <span className="footer-label">CORE STACK</span>
                        <span className="footer-value">REACT NATIVE / NESTJS</span>
                    </div>

                    <div className="footer-col align-right">
                        <button onClick={scrollToTop} className="footer-up-btn">
                            TOPO <ArrowUp size={14} strokeWidth={2} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer