import { Zap } from 'lucide-react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">Kauã Henrique</div>

                <p className="footer-copy">
                    &copy; {new Date().getFullYear()} Todos os direitos reservados.
                </p>

                <p className="footer-tech">
                    Desenvolvido com <span className="tech-highlight">React</span> & <span className="tech-energy"><Zap size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Energia</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer