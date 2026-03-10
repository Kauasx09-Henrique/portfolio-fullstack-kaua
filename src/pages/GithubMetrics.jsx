import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Activity, Terminal } from 'lucide-react'
import '../styles/metrics.css'

const GithubMetrics = () => {
    const [metrics, setMetrics] = useState({
        repos: 0,
        followers: 0,
        latestRepo: '',
        language: '',
        loading: true
    })

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                const profileRes = await fetch('https://api.github.com/users/Kauasx09-Henrique')
                const profileData = await profileRes.json()

                const reposRes = await fetch('https://api.github.com/users/Kauasx09-Henrique/repos?sort=updated&per_page=1')
                const reposData = await reposRes.json()

                setMetrics({
                    repos: profileData.public_repos || 0,
                    followers: profileData.followers || 0,
                    latestRepo: reposData[0]?.name || 'Indisponível',
                    language: reposData[0]?.language || 'Code',
                    loading: false
                })
            } catch (error) {
                setMetrics(prev => ({ ...prev, loading: false }))
            }
        }

        fetchGithubData()
    }, [])

    return (
        <section className="metrics-telemetry-section">
            <div className="container">
                <motion.div
                    className="metrics-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="metrics-title">Live Status.</h2>
                    <div className="metrics-badge">
                        <span className="pulse-dot"></span>
                        API GITHUB CONNECTED
                    </div>
                </motion.div>

                <div className="metrics-grid">
                    <motion.div
                        className="metric-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="metric-header">
                            <Github size={20} strokeWidth={1.5} />
                            <span>REPOSITÓRIOS PÚBLICOS</span>
                        </div>
                        <div className="metric-value">
                            {metrics.loading ? '--' : metrics.repos}
                        </div>
                    </motion.div>

                    <motion.div
                        className="metric-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="metric-header">
                            <Activity size={20} strokeWidth={1.5} />
                            <span>SEGUIDORES</span>
                        </div>
                        <div className="metric-value">
                            {metrics.loading ? '--' : metrics.followers}
                        </div>
                    </motion.div>

                    <motion.div
                        className="metric-card card-span-full"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="metric-header">
                            <Terminal size={20} strokeWidth={1.5} />
                            <span>ÚLTIMA ATIVIDADE REGISTRADA</span>
                        </div>
                        <div className="metric-latest-repo">
                            <span className="repo-name">{metrics.loading ? 'Carregando dados...' : metrics.latestRepo}</span>
                            {!metrics.loading && (
                                <span className="repo-lang">{metrics.language}</span>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default GithubMetrics