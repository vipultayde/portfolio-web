import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center space-x-8 mb-6">
                    <a
                        href="https://github.com/vipultayde"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                        aria-label="GitHub"
                    >
                        <FaGithub className="w-8 h-8" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vipul-tayde-887b1b22b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="w-8 h-8" />
                    </a>
                    <a
                        href="https://instagram.com/vipul_tayde"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                        aria-label="Instagram"
                    >
                        <FaInstagram className="w-8 h-8" />
                    </a>
                </div>
                <p className="text-gray-500 dark:text-gray-500 font-medium">
                    &copy; {new Date().getFullYear()} Vipul Tayde. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
