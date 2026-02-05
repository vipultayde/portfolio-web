import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center -mt-20 pt-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-500 overflow-hidden shadow-lg mx-auto">
                    {/* Fallback to a placeholder if image format is different, but assuming png from legacy */}
                    <img
                        src="/images/myphotoBlue.png"
                        alt="Vipul Tayde"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = 'https://placehold.co/200x200?text=VT' }}
                    />
                </div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
            >
                Vipul Vipin Tayde
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8"
            >
                Machine Learning & Web Technologies Enthusiast
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
                <a
                    href="#contact"
                    className="px-8 py-3 rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
                >
                    Get In Touch
                </a>
                <a
                    href="#"
                    className="px-8 py-3 rounded-md font-semibold text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    Download Resume
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
