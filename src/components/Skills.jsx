import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    HiCodeBracket, 
    HiCpuChip, 
    HiCommandLine, 
    HiServerStack, 
    HiCloud, 
    HiWrenchScrewdriver 
} from 'react-icons/hi2';

const Skills = () => {
    const categories = [
        { id: 'all', name: 'All Skills', icon: null },
        { id: 'languages', name: 'Languages', icon: <HiCodeBracket className="w-4 h-4" /> },
        { id: 'ai', name: 'AI & ML', icon: <HiCpuChip className="w-4 h-4" /> },
        { id: 'frameworks', name: 'Frameworks', icon: <HiCommandLine className="w-4 h-4" /> },
        { id: 'databases', name: 'Databases & Vector Stores', icon: <HiServerStack className="w-4 h-4" /> },
        { id: 'cloud', name: 'Cloud & DevOps', icon: <HiCloud className="w-4 h-4" /> },
        { id: 'tools', name: 'Developer Tools', icon: <HiWrenchScrewdriver className="w-4 h-4" /> }
    ];

    const skills = [
        // Languages
        { name: 'Python', category: 'languages', rating: '95%', color: 'from-blue-500 to-cyan-500' },
        { name: 'Java', category: 'languages', rating: '85%', color: 'from-orange-500 to-red-500' },
        { name: 'SQL', category: 'languages', rating: '80%', color: 'from-blue-600 to-indigo-600' },
        { name: 'Solidity', category: 'languages', rating: '75%', color: 'from-slate-500 to-slate-700' },
        
        // AI & Machine Learning
        { name: 'Generative AI / LLMs', category: 'ai', rating: '90%', color: 'from-cyan-400 to-blue-500' },
        { name: 'RAG Pipelines', category: 'ai', rating: '92%', color: 'from-indigo-500 to-violet-500' },
        { name: 'Multi-Agent Systems', category: 'ai', rating: '88%', color: 'from-purple-500 to-pink-500' },
        { name: 'Federated Learning', category: 'ai', rating: '85%', color: 'from-pink-500 to-rose-500' },
        { name: 'Deep Learning / NLP', category: 'ai', rating: '80%', color: 'from-emerald-400 to-teal-500' },
        { name: 'Machine Learning', category: 'ai', rating: '90%', color: 'from-teal-500 to-cyan-500' },
        { name: 'MLOps', category: 'ai', rating: '75%', color: 'from-cyan-550 to-blue-600' },

        // Frameworks & Libraries
        { name: 'FastAPI', category: 'frameworks', rating: '90%', color: 'from-teal-400 to-emerald-500' },
        { name: 'PyTorch', category: 'frameworks', rating: '85%', color: 'from-orange-600 to-red-500' },
        { name: 'LangGraph', category: 'frameworks', rating: '88%', color: 'from-violet-500 to-fuchsia-600' },
        { name: 'LangChain', category: 'frameworks', rating: '90%', color: 'from-indigo-500 to-violet-500' },
        { name: 'Scikit-learn', category: 'frameworks', rating: '85%', color: 'from-blue-500 to-indigo-500' },
        { name: 'Pandas', category: 'frameworks', rating: '85%', color: 'from-blue-700 to-indigo-700' },
        { name: 'NumPy', category: 'frameworks', rating: '80%', color: 'from-cyan-600 to-teal-650' },
        { name: 'Web3.py', category: 'frameworks', rating: '75%', color: 'from-slate-600 to-slate-800' },

        // Databases & Vector Stores
        { name: 'ChromaDB', category: 'databases', rating: '85%', color: 'from-emerald-500 to-green-600' },
        { name: 'FAISS', category: 'databases', rating: '80%', color: 'from-green-500 to-teal-600' },
        { name: 'PostgreSQL', category: 'databases', rating: '85%', color: 'from-blue-600 to-indigo-600' },
        { name: 'MySQL', category: 'databases', rating: '80%', color: 'from-blue-500 to-cyan-550' },

        // Cloud & DevOps
        { name: 'AWS (EC2, S3, IAM, VPC)', category: 'cloud', rating: '80%', color: 'from-orange-400 to-amber-500' },
        { name: 'Docker', category: 'cloud', rating: '85%', color: 'from-cyan-500 to-blue-500' },
        { name: 'GitHub Actions', category: 'cloud', rating: '78%', color: 'from-slate-700 to-slate-900' },
        { name: 'Linux', category: 'cloud', rating: '80%', color: 'from-slate-650 to-slate-800' },

        // Developer Tools
        { name: 'Git', category: 'tools', rating: '90%', color: 'from-orange-500 to-red-650' },
        { name: 'GitHub', category: 'tools', rating: '92%', color: 'from-slate-800 to-black' },
        { name: 'VS Code', category: 'tools', rating: '95%', color: 'from-blue-500 to-sky-500' }
    ];

    const [activeTab, setActiveTab] = useState('all');

    const filteredSkills = activeTab === 'all' 
        ? skills 
        : skills.filter(skill => skill.category === activeTab);

    return (
        <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Technical Stack</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full" />
                </motion.div>

                {/* Filter Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
                    {categories.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
                                activeTab === tab.id
                                    ? 'bg-slate-900 border-slate-900 text-white dark:bg-cyan-500 dark:border-cyan-500 dark:text-slate-950 shadow-md shadow-slate-900/10 dark:shadow-cyan-500/10'
                                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-850 dark:text-slate-400 dark:hover:bg-slate-800/50'
                            }`}
                        >
                            {tab.icon}
                            <span>{tab.name}</span>
                        </button>
                    ))}
                </div>

                {/* Skills Cards Grid */}
                <motion.div 
                    layout 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.85 }}
                                transition={{ duration: 0.3 }}
                                key={skill.name}
                                className="p-5 rounded-2xl glass-panel hover:border-slate-350 dark:hover:border-slate-700/80 transition-all duration-300 cursor-default transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-slate-950/60"
                            >
                                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-widest uppercase block mb-2 font-code">
                                    {skill.category === 'languages' ? 'Lang' : skill.category === 'ai' ? 'AI/ML' : skill.category === 'frameworks' ? 'Lib' : skill.category === 'databases' ? 'Data' : skill.category === 'cloud' ? 'Cloud' : 'Tool'}
                                </span>
                                <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-4">{skill.name}</h4>
                                
                                {/* Static indicator representation of confidence */}
                                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`} 
                                        style={{ width: skill.rating }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
