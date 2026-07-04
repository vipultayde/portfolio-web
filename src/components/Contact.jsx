import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const subject = `Portfolio Inquiry from ${formData.name}`;
            const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
            window.open(`mailto:vipultayde14@gmail.com?subject=${subject}&body=${body}`);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setStatus('error');
        }
    };

    const contactDetails = [
        {
            icon: <FaEnvelope className="w-5 h-5" />,
            label: 'Email',
            value: 'vipultayde14@gmail.com',
            link: 'mailto:vipultayde14@gmail.com',
            color: 'text-cyan-500'
        },
        {
            icon: <FaPhoneAlt className="w-5 h-5" />,
            label: 'Phone',
            value: '+91 93568 29281',
            link: 'tel:+919356829281',
            color: 'text-indigo-500'
        },
        {
            icon: <FaMapMarkerAlt className="w-5 h-5" />,
            label: 'Location',
            value: 'Nagpur, Maharashtra, India',
            link: null,
            color: 'text-violet-500'
        }
    ];

    return (
        <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Let's Connect</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-light max-w-xl mx-auto text-sm sm:text-base">
                        Have an opportunity, collaboration idea, or question? Drop a line, and let's build something exceptional.
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full mt-4" />
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            <h3 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">Contact Channels</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed">
                                Reach out directly via email, phone, or explore my profiles online. I typically respond within 24 hours.
                            </p>

                            <div className="space-y-4 pt-4">
                                {contactDetails.map((detail, idx) => (
                                    <div 
                                        key={idx} 
                                        className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-850/80 bg-slate-50/50 dark:bg-slate-900/30"
                                    >
                                        <div className={`p-3 rounded-lg bg-white dark:bg-slate-900 shadow-sm border border-slate-200/40 dark:border-slate-800 shrink-0 ${detail.color}`}>
                                            {detail.icon}
                                        </div>
                                        <div>
                                            <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{detail.label}</span>
                                            {detail.link ? (
                                                <a href={detail.link} className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                                                    {detail.value}
                                                </a>
                                            ) : (
                                                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{detail.value}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links Panel */}
                        <div className="pt-8 lg:pt-0">
                            <h4 className="text-xs font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest mb-4">Professional Platforms</h4>
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/vipultayde"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 hover:text-indigo-650 hover:border-slate-355 dark:text-slate-450 dark:hover:text-cyan-400 dark:hover:border-slate-700 transition-all hover:-translate-y-0.5"
                                    aria-label="GitHub Profile"
                                >
                                    <FaGithub className="w-5 h-5" />
                                </a>
                                <a
                                    href="http://www.linkedin.com/in/vipultayde"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 hover:text-indigo-650 hover:border-slate-355 dark:text-slate-450 dark:hover:text-cyan-400 dark:hover:border-slate-700 transition-all hover:-translate-y-0.5"
                                    aria-label="LinkedIn Profile"
                                >
                                    <FaLinkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <div className="p-8 rounded-2xl glass-panel">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-semibold text-slate-450 dark:text-slate-400 mb-2 uppercase tracking-wider">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:ring-cyan-400/20 dark:focus:border-cyan-400 outline-none transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-semibold text-slate-450 dark:text-slate-400 mb-2 uppercase tracking-wider">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:ring-cyan-400/20 dark:focus:border-cyan-400 outline-none transition-all duration-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs font-semibold text-slate-450 dark:text-slate-400 mb-2 uppercase tracking-wider">Message Description</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:ring-cyan-400/20 dark:focus:border-cyan-400 outline-none transition-all duration-300 resize-none"
                                        placeholder="Outline your proposal or question here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                                >
                                    Draft Message
                                </button>
                                
                                {status === 'success' && (
                                    <p className="text-xs text-emerald-500 font-semibold text-center mt-2 animate-pulse">
                                        Mail client initialized successfully!
                                    </p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
