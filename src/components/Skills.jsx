import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["Java", "Python", "Solidity", "C++"]
        },
        {
            title: "Web Technologies",
            skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"]
        },
        {
            title: "Databases",
            skills: ["MySQL", "MongoDB", "PostgreSQL"]
        },
        {
            title: "Tools & Others",
            skills: ["Git", "GitHub", "VS Code", "Blockchain", "Problem Solving"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
                >
                    Technical Skills
                </motion.h2>

                <div className="max-w-4xl mx-auto space-y-12">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold mb-6 text-center text-blue-500">{category.title}</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {category.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-medium shadow-sm hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 cursor-default transform hover:-translate-y-1 border border-transparent hover:border-blue-500"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
