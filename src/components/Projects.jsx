import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'Secure Federated Learning on Blockchain',
            description: 'Built a secure federated learning system integrated with blockchain for decentralization. Utilized Python and Solidity to ensure data integrity and trust without a central authority.',
            image: 'https://placehold.co/600x400/4F46E5/ffffff?text=Secure+FL',
            tech: ['Python', 'Solidity', 'Blockchain'],
            year: '2025',
        },
        {
            title: 'MED+ (Unnat Bharat Abhiyan)',
            description: 'Healthcare solution developed as Sub-Leader of a 5-member team. Focused on providing accessible medical resources and information to rural areas.',
            image: 'https://placehold.co/600x400/10B981/ffffff?text=MED%2B',
            tech: ['Web Technologies', 'Team Leadership'],
            year: '2023',
        },
        {
            title: 'GYM Management System',
            description: 'Led a team of 4 to create a comprehensive system to manage all gym-related data including member records, payments, and schedules.',
            image: 'https://placehold.co/600x400/F59E0B/ffffff?text=Gym+System',
            tech: ['Java', 'Swing', 'JDBC', 'MySQL'],
            year: '2022',
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-bold text-blue-500 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">{project.year}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
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
