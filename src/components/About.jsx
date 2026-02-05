import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">About Me</h2>

                    <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify space-y-6">
                        <p>
                            I am a final-year Computer Science Engineering student at KDK College of Engineering, Nagpur, with a strong passion for
                            <strong> Blockchain Technology</strong>, <strong>Web3</strong>, and <strong>Machine Learning</strong>.
                            My journey involves bridging the gap between decentralized systems and AI to create secure, efficient, and transparent solutions.
                        </p>
                        <p>
                            With practical experience as a Research Intern at <strong>VNIT Nagpur</strong>, I have worked on integrating blockchain with
                            federated learning to secure decentralized model training. I am proficient in developing smart contracts using <strong>Solidity</strong>
                            and building full-stack DApps with the <strong>MERN stack</strong>.
                        </p>
                        <p>
                            I embrace a lifelong learning ethos, constantly staying updated with Layer 2 scaling solutions, cross-chain interoperability, and DeFi innovations.
                            Whether it's optimizing SQL queries or designing responsive web interfaces, I strive for excellence in every technical challenge I undertake.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
