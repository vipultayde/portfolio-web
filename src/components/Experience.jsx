import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi2';

const Experience = () => {
    const experiences = [
        {
            title: 'Research Intern',
            company: 'Visvesvaraya National Institute of Technology (VNIT)',
            location: 'Nagpur, Maharashtra',
            period: 'Jul 2025 - Dec 2025',
            description: [
                'Researched and implemented decentralized Federated Learning algorithms, improving model training efficiency by 25% across 5+ distributed nodes.',
                'Engineered PyTorch pipelines for data preprocessing and model benchmarking, processing 10K+ samples and reducing latency by 30%.',
                'Integrated Ethereum Smart Contracts via Solidity and Web3.py, achieving 100% auditability of model updates for 10+ edge devices.',
                'Conducted hyperparameter tuning and model validation, boosting final model accuracy by 14% and reducing convergence time by 18%.'
            ],
            tech: ['Federated Learning', 'PyTorch', 'Solidity', 'Web3.py', 'Hyperparameter Tuning']
        },
        {
            title: 'Advanced Java Intern',
            company: 'Compilers Technologies',
            location: 'Amravati, Maharashtra',
            period: 'Jul 2022 - Sep 2022',
            description: [
                'Created Java-based enterprise applications using JDBC, Servlets, and JSP, streamlining database operations and boosting query speed by 15%.',
                'Partnered with a 5-member team to design responsive web interfaces, debug backend modules, and accelerate product delivery by 15%.'
            ],
            tech: ['Java', 'JDBC', 'Servlets', 'JSP', 'SQL Optimization']
        }
    ];

    const education = [
        {
            degree: 'B. Tech in Computer Science and Engineering',
            institution: 'KDK College of Engineering, Nagpur',
            board: 'Rashtrasant Tukadoji Maharaj Nagpur University',
            period: '2023 - 2026',
            grade: 'CGPA: 7.6 / 10',
            highlights: 'Focus on advanced algorithms, database systems, and decentralized applications.'
        },
        {
            degree: 'Diploma in Computer Engineering',
            institution: 'Government Polytechnic, Amravati (Autonomous)',
            board: 'State Board / Autonomous Institute',
            period: '2021 - 2023',
            grade: 'Percentage: 77%',
            highlights: 'Foundational computer engineering, object-oriented systems, and data structures.'
        }
    ];

    return (
        <section id="experience" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Career Journey</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Experience Section */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-2xl font-black text-slate-900 dark:text-white mb-10 flex items-center gap-3"
                        >
                            <span className="p-2 bg-indigo-50 dark:bg-slate-900 text-indigo-600 dark:text-cyan-400 rounded-xl border border-indigo-100 dark:border-slate-800">
                                <HiBriefcase className="w-6 h-6" />
                            </span>
                            Professional Experience
                        </motion.h3>

                        <div className="space-y-12 relative before:absolute before:top-2 before:bottom-2 before:left-[19px] before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-10"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-[10px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 bg-indigo-600 dark:bg-cyan-400 shadow-md ring-2 ring-indigo-100 dark:ring-slate-900 z-10" />

                                    <div className="p-6 rounded-2xl glass-panel hover:border-slate-300 dark:hover:border-slate-800 transition-all duration-300">
                                        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">{exp.title}</h4>
                                                <p className="text-sm font-medium text-indigo-600 dark:text-cyan-400">{exp.company}</p>
                                            </div>
                                            <div className="text-right lg:text-right text-xs text-slate-500 dark:text-slate-400">
                                                <span className="font-semibold block">{exp.period}</span>
                                                <span className="font-light">{exp.location}</span>
                                            </div>
                                        </div>

                                        <ul className="list-disc list-outside text-slate-600 dark:text-slate-300 text-sm space-y-2 mb-4 pl-4 font-light">
                                            {exp.description.map((bullet, idx) => (
                                                <li key={idx} className="leading-relaxed">{bullet}</li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-1.5 mt-4">
                                            {exp.tech.map((t, idx) => (
                                                <span key={idx} className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-2xl font-black text-slate-900 dark:text-white mb-10 flex items-center gap-3"
                        >
                            <span className="p-2 bg-indigo-50 dark:bg-slate-900 text-indigo-600 dark:text-cyan-400 rounded-xl border border-indigo-100 dark:border-slate-800">
                                <HiAcademicCap className="w-6 h-6" />
                            </span>
                            Education
                        </motion.h3>

                        <div className="space-y-12 relative before:absolute before:top-2 before:bottom-2 before:left-[19px] before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-10"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-[10px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 bg-indigo-600 dark:bg-cyan-400 shadow-md ring-2 ring-indigo-100 dark:ring-slate-900 z-10" />

                                    <div className="p-6 rounded-2xl glass-panel hover:border-slate-300 dark:hover:border-slate-800 transition-all duration-300">
                                        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">{edu.degree}</h4>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{edu.institution}</p>
                                            </div>
                                            <div className="text-right text-xs text-slate-500 dark:text-slate-400 font-semibold">
                                                {edu.period}
                                            </div>
                                        </div>

                                        <p className="text-xs text-slate-400 dark:text-slate-500 mb-2 italic">{edu.board}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-300 font-light mb-4">{edu.highlights}</p>

                                        <div className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-cyan-400 rounded-lg text-xs font-bold border border-indigo-100 dark:border-indigo-900/50">
                                            {edu.grade}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
