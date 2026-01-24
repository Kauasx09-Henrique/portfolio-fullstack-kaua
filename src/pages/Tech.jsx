import { motion } from 'framer-motion'
import '../styles/tech.css'

const Tech = () => {
    const skills = [
        {
            name: 'React',
            category: 'Frontend',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
        },
        {
            name: 'React Native',
            category: 'Mobile',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
        },
        {
            name: 'NestJS',
            category: 'Backend',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg'
        },
        {
            name: 'TypeScript',
            category: 'Language',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
        },
        {
            name: 'Node.js',
            category: 'Runtime',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
        },
        {
            name: 'PHP',
            category: 'Backend',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg'
        },
        {
            name: 'SQL',
            category: 'Database',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
        },
        {
            name: 'PostgreSQL',
            category: 'Database',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
        },
        {
            name: 'Git Bash',
            category: 'Tool',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
        },
        {
            name: 'Vercel',
            category: 'Deploy',
            img: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png'
        },
        {
            name: 'Render',
            category: 'Deploy',
            // Usei o SimpleIcons CDN que já fornece o SVG limpo e branco
            img: 'https://cdn.simpleicons.org/render/white'
        },
        {
            name: 'Tailwind',
            category: 'Styling',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
        },
        {
            name: 'Java',
            category: 'Language',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
        },
        {
            name: 'Python',
            category: 'Language',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
        },
        {
            name: 'JavaScript',
            category: 'Language',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
        },
        {
            name: 'HTML5',
            category: 'Frontend',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
        },
        {
            name: 'CSS3',
            category: 'Frontend',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
        },
        {
            name: 'Bootstrap',
            category: 'Styling',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
        },
        { name: 'C++', category: 'Language', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
        {
            name: 'mySQL',
            category: 'Database',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
        },
        {
            name: 'xampp',
            category: 'Tool',
            img: 'data:image/png;base64,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'
        },
        {
            name: 'Postman',
            category: 'Tool',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg'
        }, {
            name: 'Figma',
            category: 'Design',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
        },
        {
            name: 'Visual Studio Code',
            category: 'IDE',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'
        },
        {

            name: 'GitHub',
            category: 'Platform',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'


        },
        {
            name: 'workbank',
            category: 'Platform',
            img: 'https://images.icon-icons.com/1508/PNG/512/mysqlworkbench_103806.png'
        },
        {
            name: 'Api Rest',
            category: 'Backend',
            img: 'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png'
        },
        {
            name: 'jwt',
            category: 'Backend',
            img: 'https://img.icons8.com/?size=96&id=rHpveptSuwDz&format=png'
        }


    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section id="tech" className="section-padding">
            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2>Stack <span style={{ color: 'var(--primary)' }}>Tecnológico</span></h2>
                    <p>As ferramentas que domino para construir aplicações de ponta a ponta.</p>
                </motion.div>

                <motion.div
                    className="tech-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="tech-card"
                            variants={itemVariants}
                        >
                            <img
                                src={skill.img}
                                alt={skill.name}
                                className="tech-icon"
                                style={skill.name === 'Vercel' & 'Api Rest' ? { filter: 'invert(1)' } : {}}
                            />

                            <div className="tech-info">
                                <h3 className="tech-name">{skill.name}</h3>
                                <span className="tech-category">{skill.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default Tech