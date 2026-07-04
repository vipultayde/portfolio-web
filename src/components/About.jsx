import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineServerStack, HiOutlineShieldCheck, HiOutlineCpuChip } from 'react-icons/hi2';

const About = () => {
    const cards = [
        {
            icon: <HiOutlineCpuChip className="w-8 h-8 text-cyan-500" />,
            title: "AI / ML Engineering",
            description: "Specialized in LLMs, LangGraph multi-agent orchestration, RAG pipelines, PyTorch data pipelines, and federated learning."
        },
        {
            icon: <HiOutlineShieldCheck className="w-8 h-8 text-indigo-500" />,
            title: "Web3 & Blockchain",
            description: "Experienced in Solidity smart contracts, Ethereum auditability, and securing distributed model updates on-chain."
        },
        {
            icon: <HiOutlineServerStack className="w-8 h-8 text-violet-500" />,
            title: "Backend & Systems",
            description: "Proficient in FastAPI, PostgreSQL, vector database architectures (ChromaDB/FAISS), and containerized cloud setups."
        }
    ];

    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">About Me</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        {/* Text / Summary */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="lg:col-span-6 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed font-light"
                        >
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                                Bridging AI/ML & Web3 for Trustworthy Systems
                            </h3>
                            <p>
                                I am an AI/ML Engineer and Software Developer specializing in designing, developing, and deploying secure, scalable machine learning solutions, RAG pipelines, and multi-agent AI systems.
                            </p>
                            <p>
                                My academic foundation in Computer Science and Engineering, combined with hands-on internship experience at **VNIT Nagpur**, has allowed me to delve deep into advanced concepts like **decentralized Federated Learning** and on-chain blockchain auditability.
                            </p>
                            <p>
                                Whether implementing secure smart contracts via Solidity or engineering high-throughput FastAPI microservices handling 100+ concurrent document uploads, I focus on system reliability, database scalability, and software design patterns.
                            </p>
                        </motion.div>

                        {/* Professional pillars card stack */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="lg:col-span-6 space-y-6"
                        >
                            {cards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl glass-panel hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 flex items-start gap-5 group hover:-translate-y-1"
                                >
                                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 group-hover:scale-110 transition-transform duration-300 shrink-0">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
                                            {card.title}
                                        </h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-light">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
