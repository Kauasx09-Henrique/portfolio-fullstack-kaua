import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../styles/metrics.css'

const USER = 'Kauasx09-Henrique'
const ACCENT = '#ffffff'
const TONES = ['#ffffff', '#d4d4d8', '#a1a1aa', '#71717a', '#52525b', '#3f3f46']
const W = 7 * 864e5

const num = (n) => (typeof n === 'number' ? n.toLocaleString('pt-BR') : '--')

const GithubMetrics = () => {
    const [data, setData] = useState({ profile: null, repos: [], events: [], loading: true, failed: false, fetchedAt: null })

    useEffect(() => {
        const load = async () => {
            try {
                const [profile, repos, events] = await Promise.all([
                    fetch(`https://api.github.com/users/${USER}`).then(r => r.json()),
                    fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`).then(r => r.json()),
                    fetch(`https://api.github.com/users/${USER}/events/public?per_page=100`).then(r => r.json()).catch(() => [])
                ])
                if (!profile || profile.message) throw new Error('profile')
                setData({
                    profile,
                    repos: Array.isArray(repos) ? repos : [],
                    events: Array.isArray(events) ? events : [],
                    loading: false, failed: false, fetchedAt: new Date()
                })
            } catch {
                setData(prev => ({ ...prev, loading: false, failed: true }))
            }
        }
        load()
    }, [])

    const { profile, repos, events, loading, failed, fetchedAt } = data
    const dash = loading ? '--' : failed ? '—' : null

    // ---- linguagens (por nº de repos) ----
    const counts = {}
    repos.forEach(r => { if (r.language && !r.fork) counts[r.language] = (counts[r.language] || 0) + 1 })
    const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])
    const topLangs = sorted.slice(0, 5)
    const rest = sorted.slice(5).reduce((a, b) => a + b[1], 0)
    if (rest) topLangs.push(['Outras', rest])
    const langs = topLangs.length
        ? topLangs.map(([name, c], i) => ({
            name,
            repos: `${c} ${c === 1 ? 'repo' : 'repos'}`,
            pct: Math.round((c / total) * 1000) / 10,
            pctLabel: `${((c / total) * 100).toFixed(1)}%`,
            tone: i === 0 ? ACCENT : TONES[Math.min(i, TONES.length - 1)]
        }))
        : [{ name: dash || 'Sem dados', repos: '', pct: 100, pctLabel: '--', tone: '#27272a' }]

    // ---- commits por semana (12 semanas, via eventos públicos) ----
    const pushes = events.filter(e => e.type === 'PushEvent')
    const commits90 = pushes.reduce((a, e) => a + (e.payload?.size || 1), 0)
    const now = Date.now()
    const buckets = new Array(12).fill(0)
    pushes.forEach(e => {
        const i = 11 - Math.floor((now - new Date(e.created_at).getTime()) / W)
        if (i >= 0 && i < 12) buckets[i] += e.payload?.size || 1
    })
    const peak = Math.max(...buckets, 1)
    const weeks = buckets.map(v => ({
        h: v ? Math.max(4, Math.round((v / peak) * 100)) : 3,
        tone: v === 0 ? 'rgba(255,255,255,.08)' : v === peak ? ACCENT : '#52525b'
    }))

    // ---- ranking de projetos com mais commits ----
    const perRepo = {}
    pushes.forEach(e => {
        const n = e.repo?.name?.split('/')[1]
        if (n) perRepo[n] = (perRepo[n] || 0) + (e.payload?.size || 1)
    })
    let rows = Object.entries(perRepo).sort((a, b) => b[1] - a[1]).slice(0, 5)
    const usingCommits = rows.length > 0
    if (!usingCommits) rows = repos.filter(r => !r.fork).slice(0, 5).map(r => [r.name, r.stargazers_count || 0])
    const maxRow = Math.max(...rows.map(r => r[1]), 1)
    const langOf = n => repos.find(r => r.name === n)?.language || 'Code'
    const ranking = rows.length
        ? rows.map(([name, v], i) => ({
            rank: String(i + 1).padStart(2, '0'),
            name,
            language: langOf(name),
            pct: Math.max(3, Math.round((v / maxRow) * 100)),
            metric: usingCommits
                ? `${v} ${v === 1 ? 'commit' : 'commits'}`
                : `↑ ${new Date(repos.find(r => r.name === name)?.pushed_at || Date.now()).toLocaleDateString('pt-BR')}`,
            tone: i === 0 ? ACCENT : '#3f3f46'
        }))
        : [{ rank: '01', name: loading ? 'Carregando dados...' : 'Indisponível', language: '—', pct: 3, metric: '--', tone: '#27272a' }]

    const stars = repos.reduce((a, r) => a + (r.stargazers_count || 0), 0)
    const tiles = [
        { label: 'Repositórios públicos', value: dash || num(profile?.public_repos || 0) },
        { label: 'Seguidores', value: dash || num(profile?.followers || 0) },
        { label: 'Stars recebidas', value: dash || num(stars) },
        { label: 'Commits · 90d', value: dash || num(commits90) }
    ]

    const firstWeek = new Date(now - 11 * W)
        .toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).toUpperCase()

    return (
        <section className="metrics-telemetry-section">
            <div className="metrics-container">

                <motion.div
                    className="metrics-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="metrics-heading">
                        <span className="metrics-eyebrow">01 — TELEMETRIA</span>
                        <h2 className="metrics-title">Live Status.</h2>
                    </div>
                    <div className="metrics-badge">
                        <span className="pulse-dot" />
                        {loading ? 'CONECTANDO…' : failed ? 'API INDISPONÍVEL' : 'GITHUB API · CONECTADO'}
                    </div>
                </motion.div>

                <div className="metrics-tiles">
                    {tiles.map((t, i) => (
                        <motion.div
                            key={t.label}
                            className="metric-tile"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                        >
                            <span className="metric-label">{t.label}</span>
                            <span className="metric-value">{t.value}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="metrics-charts">
                    <div className="metrics-panel">
                        <div className="panel-head">
                            <span className="metric-label">Linguagens mais usadas</span>
                            <span className="panel-note">{sorted.length ? `${sorted.length} DETECTADAS` : '—'}</span>
                        </div>

                        <div className="lang-bar">
                            {langs.map(l => (
                                <div key={l.name} style={{ width: `${l.pct}%`, background: l.tone }} />
                            ))}
                        </div>

                        <div className="lang-list">
                            {langs.map(l => (
                                <div className="lang-row" key={l.name}>
                                    <span className="lang-swatch" style={{ background: l.tone }} />
                                    <span className="lang-name">{l.name}</span>
                                    <span className="lang-repos">{l.repos}</span>
                                    <span className="lang-pct">{l.pctLabel}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="metrics-panel">
                        <div className="panel-head">
                            <span className="metric-label">Commits / semana</span>
                            <span className="panel-note">12W</span>
                        </div>
                        <div className="week-chart">
                            {weeks.map((w, i) => (
                                <div className="week-col" key={i}>
                                    <motion.div
                                        className="week-bar"
                                        style={{ background: w.tone }}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${w.h}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.03 }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="week-axis">
                            <span>{firstWeek}</span>
                            <span>PICO {loading || failed ? '--' : peak}</span>
                            <span>HOJE</span>
                        </div>
                    </div>
                </div>

                <div className="metrics-panel metrics-ranking">
                    <div className="panel-head">
                        <span className="metric-label">Projetos com mais commits</span>
                        <span className="panel-note">{usingCommits ? 'EVENTOS PÚBLICOS · 90 DIAS' : 'ORDENADO POR ATUALIZAÇÃO'}</span>
                    </div>

                    <div className="rank-list">
                        {ranking.map((r, i) => (
                            <motion.div
                                className="rank-row"
                                key={r.name}
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                            >
                                <span className="rank-index">{r.rank}</span>
                                <div className="rank-id">
                                    <span className="rank-name">{r.name}</span>
                                    <span className="rank-lang">{r.language}</span>
                                </div>
                                <div className="rank-track">
                                    <div className="rank-fill" style={{ width: `${r.pct}%`, background: r.tone }} />
                                </div>
                                <span className="rank-metric">{r.metric}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="metrics-foot">
                        <span>@{USER}</span>
                        <span>
                            {fetchedAt
                                ? `SINCRONIZADO ${fetchedAt.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`
                                : 'AGUARDANDO…'}
                        </span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default GithubMetrics