import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
    const floatingSkills = [
        { name: 'Multi-Agent AI', color: 'from-cyan-500 to-blue-500', delay: 0 },
        { name: 'RAG Pipelines', color: 'from-indigo-500 to-violet-500', delay: 1.5 },
        { name: 'Federated Learning', color: 'from-purple-500 to-pink-500', delay: 0.8 },
        { name: 'FastAPI / LangGraph', color: 'from-blue-500 to-teal-500', delay: 2.2 },
        { name: 'Solidity / Web3', color: 'from-amber-500 to-orange-500', delay: 1.2 }
    ];

    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 dot-grid-light dark:dot-grid opacity-60 pointer-events-none" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                {/* Text Content */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200/50 dark:border-slate-800 bg-indigo-50/50 dark:bg-slate-900/50 text-indigo-600 dark:text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-cyan-400 animate-pulse" />
                        AI / ML & Web3 Software Engineer
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white"
                    >
                        Hi, I am <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400">Vipul Vipin Tayde</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-light leading-relaxed text-center lg:text-left"
                    >
                        Specializing in designing, developing, and deploying secure, scalable machine learning solutions, **RAG pipelines**, and **multi-agent AI systems** with a focus on trust and auditability.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
                    >
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-indigo-500/25 hover:shadow-lg dark:shadow-none hover:-translate-y-0.5"
                        >
                            View Projects <HiArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="mailto:vipultayde14@gmail.com"
                            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-slate-500 dark:text-slate-400 border border-transparent hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-slate-200 dark:hover:border-slate-800 transition-all duration-300"
                            title="Download Resume"
                        >
                            <FaFileDownload className="w-5 h-5" />
                            <span>Download CV</span>
                        </a>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-12 w-full max-w-lg border-t border-slate-200/60 dark:border-slate-800/80 pt-6 flex justify-around lg:justify-between items-center text-center lg:text-left gap-4"
                    >
                        <div>
                            <span className="block text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">B.Tech</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">Computer Science</span>
                        </div>
                        <div className="w-px h-8 bg-slate-200 dark:bg-slate-800" />
                        <div>
                            <span className="block text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">2</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">Developer Internships</span>
                        </div>
                        <div className="w-px h-8 bg-slate-200 dark:bg-slate-800" />
                        <div>
                            <span className="block text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">3+</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">Core Projects</span>
                        </div>
                    </motion.div>
                </div>

                {/* Picture Side */}
                <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                        {/* Orbiting / background ring */}
                        <div className="absolute inset-0 rounded-full border border-dashed border-indigo-400/40 dark:border-cyan-400/30 animate-[spin_60s_linear_infinite]" />
                        <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-violet-500 opacity-20 blur-md pointer-events-none" />
                        
                        {/* Profile Photo Wrapper */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl glow-indigo dark:glow-cyan group"
                        >
                            <img
                                src="/images/myphotoBlue.png"
                                alt="Vipul Tayde"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => { e.target.src = '/images/myphoto.jpg' }}
                            />
                        </motion.div>

                        {/* Floating skill indicators around the profile photo */}
                        {floatingSkills.map((skill, index) => (
                            <motion.span
                                key={index}
                                animate={{
                                    y: [0, -12, 0]
                                }}
                                transition={{
                                    duration: 3 + index,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: skill.delay
                                }}
                                className={`hidden sm:inline-block absolute text-xs font-semibold px-3 py-1.5 rounded-full text-white bg-gradient-to-r ${skill.color} shadow-md dark:shadow-slate-950/40 border border-white/10`}
                                style={{
                                    top: index === 0 ? '5%' : index === 1 ? '75%' : index === 2 ? '45%' : index === 3 ? '15%' : '80%',
                                    left: index === 0 ? '5%' : index === 1 ? '-10%' : index === 2 ? '85%' : index === 3 ? '80%' : '65%',
                                }}
                            >
                                {skill.name}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
