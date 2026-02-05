import { useState, useEffect } from 'react';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white">
                    Vipul Tayde
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'dark' ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleTheme}
                        className="p-2 mr-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                    >
                        {theme === 'dark' ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 focus:outline-none"
                    >
                        {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
                >
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium block"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
