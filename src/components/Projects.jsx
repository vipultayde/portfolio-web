import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const Projects = () => {
    const projects = [
        {
            title: 'AI-Powered Enterprise Document Intelligence Platform',
            period: 'Feb 2026 - Present',
            link: 'https://github.com/vipultayde/enterprise-ai-assistant',
            description: 'Engineered an Enterprise AI Knowledge Assistant supporting 100+ concurrent document uploads. Utilizes a Multi-Agent RAG pipeline to process 500+ document chunks, improving retrieval accuracy via semantic search.',
            bullets: [
                'Engineered backend using FastAPI and LangGraph, reducing search response latency by 35%.',
                'Built Multi-Agent RAG pipeline using ChromaDB and FAISS to process chunks with 22% improvement in retrieval accuracy.'
            ],
            tech: ['FastAPI', 'LangGraph', 'ChromaDB', 'FAISS', 'RAG', 'Multi-Agent'],
            // Abstract SVG Graphic
            graphic: (
                <div className="w-full h-full bg-gradient-to-tr from-cyan-900 to-indigo-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 opacity-25 dot-grid" />
                    {/* Ring System */}
                    <div className="w-24 h-24 rounded-full border border-dashed border-cyan-400/40 animate-[spin_20s_linear_infinite]" />
                    <div className="w-16 h-16 rounded-full border border-indigo-400/50 absolute animate-[spin_10s_linear_infinite]" />
                    <div className="w-8 h-8 rounded-full bg-cyan-400/30 blur-sm absolute" />
                    <span className="font-code text-cyan-400 text-xs font-bold absolute bottom-4">RAG MULTI-AGENT</span>
                </div>
            )
        },
        {
            title: 'Secure Federated Learning with Blockchain Auditability',
            period: 'Jul 2025 - Dec 2025',
            link: 'https://github.com/vipultayde', // Replaced shorturl for better code longevity
            description: 'Formulated a privacy-preserving Federated Learning framework with on-chain model updates auditability. Achieved 98% model accuracy under distributed training conditions.',
            bullets: [
                'Formulated Federated Learning architecture using PyTorch, achieving 98% accuracy.',
                'Programmed Solidity smart contracts, ensuring 100% transparent and tamper-proof model aggregation across 10+ edge devices.'
            ],
            tech: ['PyTorch', 'Solidity', 'Blockchain', 'Federated Learning', 'Web3.py'],
            graphic: (
                <div className="w-full h-full bg-gradient-to-tr from-indigo-900 to-purple-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 opacity-20 dot-grid" />
                    {/* Ledger Block Grid */}
                    <div className="grid grid-cols-3 gap-2 z-10">
                        <div className="w-6 h-6 rounded-lg bg-indigo-500/30 border border-indigo-400/60 animate-pulse" />
                        <div className="w-6 h-6 rounded-lg bg-purple-500/30 border border-purple-400/60" />
                        <div className="w-6 h-6 rounded-lg bg-pink-500/30 border border-pink-400/60 animate-pulse" />
                        <div className="w-6 h-6 rounded-lg bg-violet-500/30 border border-violet-400/60" />
                        <div className="w-6 h-6 rounded-lg bg-cyan-500/30 border border-cyan-400/60 animate-pulse" />
                        <div className="w-6 h-6 rounded-lg bg-indigo-500/30 border border-indigo-400/60" />
                    </div>
                    <span className="font-code text-indigo-300 text-xs font-bold absolute bottom-4">BLOCKCHAIN LEDGER</span>
                </div>
            )
        },
        {
            title: 'MedCare - E-Health Care Portal',
            period: 'Dec 2022 - May 2023',
            link: 'https://github.com/vipultayde',
            description: 'Full-stack e-health care portal designed under Unnat Bharat Abhiyan, handling 1,000+ patient records and OPD appointment scheduling.',
            bullets: [
                'Designed responsive full-stack modules using Java, Servlets, and PostgreSQL databases.',
                'Structured relational databases with RBAC and input validation, reducing query latency by 20%.'
            ],
            tech: ['Java', 'PostgreSQL', 'Servlets', 'RBAC', 'Database Tuning'],
            graphic: (
                <div className="w-full h-full bg-gradient-to-tr from-slate-900 to-blue-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 opacity-20 dot-grid" />
                    {/* Database Visual */}
                    <div className="space-y-1.5 flex flex-col items-center">
                        <div className="w-16 h-4 rounded-full bg-blue-500/20 border border-blue-400/50" />
                        <div className="w-16 h-4 rounded-full bg-blue-500/30 border border-blue-400/60" />
                        <div className="w-16 h-4 rounded-full bg-blue-500/45 border border-blue-400/70" />
                    </div>
                    <span className="font-code text-blue-300 text-xs font-bold absolute bottom-4">PORTAL & DATA</span>
                </div>
            )
        }
    ];

    return (
        <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full" />
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 flex flex-col group"
                        >
                            {/* Graphic Header */}
                            <div className="h-44 overflow-hidden relative">
                                {project.graphic}
                                <span className="absolute top-4 right-4 text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-white border border-white/10 px-2 py-1 rounded-md tracking-wider">
                                    {project.period}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-4 flex-grow">
                                    {project.description}
                                </p>

                                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mb-4">
                                    <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Key Accomplishments</h4>
                                    <ul className="list-disc list-outside pl-4 text-xs text-slate-650 dark:text-slate-350 space-y-1 font-light">
                                        {project.bullets.map((b, idx) => (
                                            <li key={idx}>{b}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-1 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-850 px-2.5 py-1 rounded-md border border-slate-200/30 dark:border-slate-800/40">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer link */}
                                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
                                    >
                                        <FaGithub className="w-4 h-4" /> Codebase
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-850 hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all border border-slate-200/40 dark:border-slate-800/60"
                                        aria-label="View Project Details"
                                    >
                                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
