import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import '../styles/navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Sobre', href: '#about' },
        { name: 'Tech', href: '#tech' },
        { name: 'Projetos', href: '#projects' },
        { name: 'Certificados', href: '#certificates' },
        { name: 'Contato', href: '#contact' }
    ]

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-container">

                    <a href="#" className="logo">
                        <Code2 size={32} color="var(--primary)" />
                        Kauã<span>.dev</span>
                    </a>

                    {/* Menu Desktop */}
                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Botão Mobile */}
                    <button
                        className="mobile-toggle"
                        onClick={toggleMenu}
                        aria-label="Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="mobile-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="mobile-link"
                            onClick={toggleMenu}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar