import { useState, useEffect } from 'react'
import { Home, User, Code2, Folder, Award, Mail, FileText, Activity, Map } from 'lucide-react'
import { motion } from 'framer-motion'
import '../styles/navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('Home')
    const [hovered, setHovered] = useState(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#home', icon: Home },
        { name: 'Sobre', href: '#about', icon: User },
        { name: 'Trajetória', href: '#journey', icon: Map },
        { name: 'Tech', href: '#tech', icon: Code2 },
        { name: 'Projetos', href: '#projects', icon: Folder },
        { name: 'Métricas', href: '#githubmetrics', icon: Activity },
        { name: 'Certificados', href: '#certificates', icon: Award },
        { name: 'Currículos', href: '#resume', icon: FileText },
        { name: 'Contato', href: '#contact', icon: Mail }
    ]

    return (
        <>
            <motion.header
                className={`navbar-desktop ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <nav className="desktop-pill" onMouseLeave={() => setHovered(null)}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`desktop-item ${active === link.name ? 'active' : ''}`}
                            onMouseEnter={() => setHovered(link.name)}
                            onClick={() => setActive(link.name)}
                        >
                            {hovered === link.name && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="desktop-hover-pill"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="desktop-item-text">{link.name}</span>
                        </a>
                    ))}
                </nav>
            </motion.header>

            <motion.nav
                className="mobile-dock"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <div className="dock-container">
                    {navLinks.map((link) => {
                        const Icon = link.icon
                        const isActive = active === link.name

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`dock-item ${isActive ? 'active' : ''}`}
                                onClick={() => setActive(link.name)}
                            >
                                <Icon size={22} strokeWidth={isActive ? 2 : 1.5} />
                                {isActive && (
                                    <motion.div
                                        layoutId="dock-indicator"
                                        className="dock-indicator"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </a>
                        )
                    })}
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar