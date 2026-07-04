import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-850/80 transition-colors duration-300">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center space-x-6 mb-6">
                    <a
                        href="https://github.com/vipultayde"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-cyan-400 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm transition-all transform hover:scale-110"
                        aria-label="GitHub Profile"
                    >
                        <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                        href="http://www.linkedin.com/in/vipultayde"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-cyan-400 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm transition-all transform hover:scale-110"
                        aria-label="LinkedIn Profile"
                    >
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:vipultayde14@gmail.com"
                        className="p-3 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-cyan-400 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm transition-all transform hover:scale-110"
                        aria-label="Direct Email"
                    >
                        <FaEnvelope className="w-5 h-5" />
                    </a>
                </div>
                <p className="text-xs sm:text-sm text-slate-450 dark:text-slate-500 font-light">
                    &copy; {new Date().getFullYear()} Vipul Tayde. All Rights Reserved. Crafted for AI/ML & Web3.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
