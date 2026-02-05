import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi';

const Experience = () => {
    const experiences = [
        {
            title: 'Research Intern',
            company: 'Visvesvaraya National Institute of Technology (VNIT)',
            location: 'Nagpur',
            period: 'Jul 2025 - Dec 2025',
            description: [
                'Worked on integrating blockchain with federated learning to enable secure and decentralized model training.',
                'Developed Solidity smart contracts and Python-based prototypes to improve data integrity and trust.',
            ],
            type: 'work',
        },
        {
            title: 'Advanced Java Intern',
            company: 'Compilers Technologies',
            location: 'Amravati',
            period: 'Jul 2022 - Sep 2022',
            description: [
                'Developed Java applications using Swing, JDBC, Servlets, and JSP.',
                'Designed responsive web pages using HTML, CSS, and JSP.',
                'Optimized SQL queries, improving load times significantly.',
            ],
            type: 'work',
        },
    ];

    const education = [
        {
            title: 'B.Tech - Computer Science and Engineering',
            institution: 'KDK College of Engineering, Nagpur',
            period: '2023 - 2026',
            details: 'CGPA: 7.0/10 (Pursuing)',
            type: 'edu',
        },
        {
            title: 'Diploma - Computer Engineering',
            institution: 'Government Polytechnic, Amravati',
            period: '2021 - 2023',
            details: 'Percentage: 77%',
            type: 'edu',
        },
    ];

    return (
        <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">Career Journey</h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Experience Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center text-blue-500">
                            <HiBriefcase className="mr-3" /> Experience
                        </h3>
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
                                >
                                    <span className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-500 rounded-full ring-4 ring-white dark:ring-gray-900"></span>
                                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">{exp.title}</h4>
                                    <p className="text-blue-500 font-medium">{exp.company}</p>
                                    <span className="text-sm text-gray-500 dark:text-gray-400 block mb-2">{exp.period} | {exp.location}</span>
                                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center text-blue-500">
                            <HiAcademicCap className="mr-3" /> Education
                        </h3>
                        <div className="space-y-12">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
                                >
                                    <span className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-500 rounded-full ring-4 ring-white dark:ring-gray-900"></span>
                                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">{edu.title}</h4>
                                    <p className="text-blue-500 font-medium">{edu.institution}</p>
                                    <span className="text-sm text-gray-500 dark:text-gray-400 block mb-2">{edu.period}</span>
                                    <p className="text-gray-600 dark:text-gray-300">{edu.details}</p>
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
